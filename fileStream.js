var fs = require("fs");

fs.readFile("dosya.txt", "utf8", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log(data);
});

// fs.writeFile("dosya2.txt", "Mehmet Ali", function (hata) {}


// fs.appendFile("dosya2.txt", "Mehmet Ali", function (hata) {
//   if (hata) {
//     throw hata;
//   }
//   console.log("Yazıldı");
// });
fs.unlink("dosya2.txt", function (hata) {
  if (hata) {
    throw hata;
  }
  console.log("Silindi");
});
