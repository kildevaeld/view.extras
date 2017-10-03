const Koa = require('koa'),
    fs = require('mz/fs'),
    Path = require('path');


var Todos = {};

try {

    const data = fs.readFileSync('./todos-db.json');
    Todos = JSON.parse(data);

} catch (e) {
    try {
        fs.unlinkSync('./todos-db.json');
    } catch (e) {}
    Todos = {};
}

const app = new Koa();

app.use(async(ctx, next) => {

    ctx.status = 404;

    switch (ctx.path) {
        case "/":
            return await handleIndex(ctx, next);
        case "/api/todos":
            {
                switch (ctx.method.toLowerCase()) {
                    case 'get':
                        return await handleList(ctx, next);
                }
            }

        default:
            {
                if (/^\/?node_modules\//.test(ctx.path)) {
                    return await handleFile(Path.join(__dirname, "..", ctx.path), ctx, next, ctx, next);
                } else if (/^\/?view.extra.example.js/.test(ctx.path)) {
                    return await handleFile(Path.join(__dirname, 'view.extra.example.js'), ctx, next);
                }
            }
    }



});

app.listen(3000);

async function handleIndex(ctx, next) {
    ctx.type = "text/html";
    ctx.status = 200;
    ctx.body = await fs.readFile(Path.join(__dirname, "index.html"));
}

async function handleFile(path, ctx, next, type = "application/javascript") {
    ctx.type = type;
    ctx.status = 200;
    ctx.body = await fs.readFile(path);
}

async function handleList(ctx) {
    ctx.type = "json";
    ctx.status = 200;
    ctx.body = [...Object.values(Todos)];
}