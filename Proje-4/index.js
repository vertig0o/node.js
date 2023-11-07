const fs = require("fs");

fs.writeFile(
  "employees.Json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("Json  başarılı bir şekikde oluşturuldu.");
  }
);

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya Okundu");
});

fs.appendFile(
  "examplees.json",
  '\n{"name": "Employee 2 Name", "salary": 5000}',
  (err) => {
    if (err) console.log(err);
    console.log("Güncellendi");
  }
);

fs.unlink("example.json", (err) => {
  if (err) console.log(err);
  console.log("Silindi");
});
