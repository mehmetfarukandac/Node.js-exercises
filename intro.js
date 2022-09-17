var http = require("http");
var log = require("./log.js");
// var city = require("./exportsDemo");
var sayHelloTo = require("./exportsDemo");

http
  .createServer(function (request, response) {
    console.log(request.url);
    if (request.url == "/admin") {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(
        "<html><body><strong>Admin Sayfasi.</strong></body></html>"
      );
    } else if (request.url == "/") {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(
        "<html><body><input 'type'='file' 'id'='avatar' 'name'='avatar' 'accept'='image/png, image/jpeg'></body></html>"
      );
    } else if (request.url == "/customer") {
      response.writeHead(200, { "Content-type": "application/json" });
      response.write(
        JSON.stringify([
          { name: "Mehmet", lastName: "Andac" },
          { name: "Faruk", lastName: "Andac" },
        ])
      );
    }
    response.end();
  })
  .listen(8080);
log.information("Sunucu Yayına geçti");
sayHelloTo("Mehmet");
