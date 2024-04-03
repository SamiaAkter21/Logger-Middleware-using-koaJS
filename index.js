const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx);
    await next();
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
    console.log("Server is running");
});