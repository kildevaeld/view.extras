const Koa = require('koa'),
    fs = require('mz/fs'),
    Path = require('path'),
    koaBody = require('koa-body'),
    uuid = require('uuid');


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

function save() {
    fs.writeFileSync('./todos-db.json', JSON.stringify(Todos, null, 2), 'utf8');
}

const app = new Koa();

app.use(koaBody());

const Reg = /^\/api\/todos\/([a-zA-Z0-9\-]+)/;

app.use(async(ctx, next) => {

    ctx.status = 404;

    switch (ctx.path) {
        case "/":
            return await handleIndex(ctx, next);
        case "/api/todos/":
        case "/api/todos":
            {
                console.log(ctx.method)
                switch (ctx.method.toLowerCase()) {
                    case 'get':
                        return await handleList(ctx, next);
                    case 'post':
                        return await handleCreate(ctx, next);
                }
            }

        default:
            {
                if (/^\/?node_modules\//.test(ctx.path)) {
                    return await handleFile(Path.join(__dirname, "..", ctx.path), ctx, next, ctx, next);
                } else if (/^\/?view.extra.example.js/.test(ctx.path)) {
                    return await handleFile(Path.join(__dirname, 'view.extra.example.js'), ctx, next);
                } else if (Reg.test(ctx.path)) {

                    switch (ctx.method) {
                        case "PATCH":
                        case "PUT":
                            return await handleUpdate(ctx, Reg.exec(ctx.path)[1]);
                    }
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

async function handleCreate(ctx) {
    let body = await ctx.request.body;
    let todo = JSON.parse(body);

    todo.id = uuid.v4();

    Todos[todo.id] = todo;
    save();

    ctx.status = 201;
    ctx.body = todo;
    ctx.type = "json";
}

async function handleUpdate(ctx, id) {
    let body = await ctx.request.body;

    let todo = JSON.parse(body);

    if (!Todos[id]) {
        ctx.throw(404);
    }

    for (let k in todo) {
        Todos[id][k] = todo[k];
    }


    save()

    ctx.status = 200;
    ctx.type = 'json';
    ctx.body = todo;

}