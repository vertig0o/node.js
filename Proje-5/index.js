const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url = req.url;

  if (req.url === "/") {
    responseText = "<h2>Index sayfasina hosgeldiniz (Ana Sayfa)</h2>";
  } else if (req.url === "/hakkimda") {
    responseText = "<h2>Hakkimda sayfasina hosgeldiniz (Hakkimda)</h2>";
  } else if (req.url === "/iletisim") {
    responseText = "<h2>Iletisim sayfasina hosgeldiniz  (Iletisim)</h2>";
  } else {
    responseText = "<h2>Sayfa bulunamadı</h2>";
    res.statusCode = 404;
  }

  res.end(responseText);
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
