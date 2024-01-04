import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
    const pathname = ctx.request.url.pathname;
    ctx.response.body = `
        <html>
            <body>
                <p>輸入/nqu，獲得金門大學超連結</p>
                <p>輸入/nqu/csie/ ，獲得金門大學資工系超連結</p>
                <p>輸入/to/nqu/ ，前往金門大學網站 </p>
                <p>輸入/to/nqu/csie/ ，前往金門大學資工系</p>
            </body>
        </html>`
    if (pathname == `/nqu`)
    {
        ctx.response.body = `
        <html>
            <body>
                <p>
                    金門大學超連結:
                    <a href="https://www.nqu.edu.tw/">https://www.nqu.edu.tw/</a>
                </p>
            </body>
        </html>`
    }
    else if (pathname == `/nqu/csie`)
    {
        ctx.response.body = `
        <html>
            <body>
                <p>
                    金門大學資工系超連結:
                    <a href="https://csie.nqu.edu.tw/">https://csie.nqu.edu.tw/</a>
                </p>
            </body>
        </html>`
    }
    else if (pathname == `/to/nqu`)
    {
        ctx.response.redirect('https://www.nqu.edu.tw/')
    }
    else if (pathname == `/to/nqu/csie`)
    {
        ctx.response.redirect('https://csie.nqu.edu.tw/')
    }
  });

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });