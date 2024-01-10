import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

const db = new DB("dr_information.db");
db.query("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_game_id TEXT, user_account TEXT, password TEXT, user_introduce TEXT)");

// 定義要更新的資料
const userIdToUpdate = 3;
const newGameIdText = "zawarudo";

// 使用 SQL UPDATE 陳述句更新資料
const updateQuery = `UPDATE users SET user_game_id = ? WHERE id = ?`;

// 執行更新操作
await db.query(updateQuery, [newGameIdText, userIdToUpdate]);

const router = new Router()
router
    
    .post("/login.html", login)
    .post("/signup.html", signup)
    .get("/logout",logout)
    .get("/dr_list",list)
    .get("/(.*)", async (ctx) => {
      let wpath = ctx.params[0]
      await send(ctx, wpath, {
      root: Deno.cwd()+"/",
      index: "login.html",
      })
  })


const app = new Application()
app.use(Session.initMiddleware())
app.use(router.routes());
app.use(router.allowedMethods());

function sqlcmd(sql, arg1) {
    console.log('sql:', sql)
    try {
      var results = db.query(sql, arg1)
      console.log('sqlcmd: results=', results)
      return results
    } catch (error) {
      console.log('sqlcmd error: ', error)
      throw error
    }
}

function userQuery(sql) {
    let list = []
    for (const [id, user_game_id, user_account, password, user_introduce] of sqlcmd(sql)) {
      list.push({id, user_game_id, user_account, password, user_introduce})
    }
    console.log('userQuery: list=', list)
    return list
  }

async function parseFormBody(body) {
    const pairs = await body.value
    const obj = {}
    for (const [key, value] of pairs) {
      obj[key] = value
    }
    return obj
}

async function login(ctx) {
  const body = ctx.request.body();
  if (body.type === "form") {
      var user = await parseFormBody(body);
      var dbUsers = userQuery(`SELECT id, user_game_id, user_account, password, user_introduce FROM users WHERE user_account='${user.user_account}'`);
      
      if (dbUsers.length > 0) {
          var dbUser = dbUsers[0];
          
          if (dbUser.password === user.password) {
              ctx.state.session.set('user', user);
              console.log('session.user=', await ctx.state.session.get('user'));
              ctx.response.redirect('/operator_list_login.html');
          } else {
              ctx.response.redirect('/login_fail_1.html');
          }
      } else {
          ctx.response.redirect('/login_fail_2.html');
      }
  }
}

async function signup(ctx) {
    const body = ctx.request.body()
    if (body.type === "form") {
        var user = await parseFormBody(body)
        var dbUsers = userQuery(`SELECT id, user_game_id, user_account, password, user_introduce FROM users WHERE user_account='${user.user_account}'`)
        if (dbUsers.length === 0) {
        sqlcmd("INSERT INTO users (user_game_id, user_account, password, user_introduce) VALUES (?, ?, ?, ?)", [user.user_game_id, user.user_account, user.password, user.user_introduce]);
        ctx.response.redirect('/signup_success.html')
        } else 
        ctx.response.redirect('/signup_fail.html')
    }
}

async function logout(ctx) {
    ctx.state.session.set('user', null)
    ctx.response.redirect('/login.html')
 }

 async function list(ctx) {
  let users = userQuery("SELECT id, user_game_id, user_account, password, user_introduce FROM users");
  console.log('list:posts=', users);
  ctx.response.body = await render.list(users, await ctx.state.session.get('user'));
}



console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });