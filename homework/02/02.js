import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
const room = new Map();

room.set("e320", {
    教室編號: "320",
    教室名: "多媒體教室",
});

room.set("e319", {
    教室編號: "319",
    教室名: "嵌入式實驗室",
});

router.get("/", (ctx) => {
    ctx.response.body = `
        <html>
            <body>
                <p>輸入/nqu，獲得金門大學超連結</p>
                <p>輸入/nqu/csie/，獲得金門大學資工系超連結</p>
                <p>輸入/to/nqu/，前往金門大學網站</p>
                <p>輸入/to/nqu/csie/，前往金門大學資工系</p>
            </body>
        </html>`;
});

router.get("/nqu", (ctx) => {
    ctx.response.body = `
        <html>
            <body>
                <p>
                    金門大學超連結:
                    <a href="https://www.nqu.edu.tw/">https://www.nqu.edu.tw/</a>
                </p>
            </body>
        </html>`;
});

router.get("/nqu/csie", (ctx) => {
    ctx.response.body = `
        <html>
            <body>
                <p>
                    金門大學資工系超連結:
                    <a href="https://csie.nqu.edu.tw/">https://csie.nqu.edu.tw/</a>
                </p>
            </body>
        </html>`;
});

router.get("/to/nqu", (ctx) => {
    ctx.response.redirect('https://www.nqu.edu.tw/');
});

router.get("/to/nqu/csie", (ctx) => {
    ctx.response.redirect('https://csie.nqu.edu.tw/');
});

router.get("/room/:id", (ctx) => {
    if (ctx.params && ctx.params.id && room.has(ctx.params.id))
    {
        ctx.response.body = room.get(ctx.params.id);
    }
});


app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });
