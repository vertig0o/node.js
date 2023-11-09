const Koa = require("koa");
const app = new Koa();
const port = 3000;

// Ana sayfa
app.use(async (ctx, next) => {
  if (ctx.url === "/") {
    ctx.body = "<h1>Hoşgeldiniz xxx sayfasına!</h1>";
  } else {
    await next();
  }
});

// Hakkında sayfası
app.use(async (ctx, next) => {
  if (ctx.url === "/hakkimda") {
    ctx.body = "<h1>Hoşgeldiniz hakkimda sayfasına!</h1>";
  } else {
    await next();
  }
});

// İletişim sayfası
app.use(async (ctx, next) => {
  if (ctx.url === "/iletisim") {
    ctx.body = "<h1>Hoşgeldiniz iletisim sayfasına!</h1>";
  } else {
    await next();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
