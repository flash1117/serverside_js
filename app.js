let express = require("express");
let app = express();

// 관습적으로 public 을 정적인 파일을 두는 위치로 삼는다.
app.use(express.static("public")); // 정적인 파일이 위치할 디렉토리.

app.get("/", (req, res) => {
  res.send("Hello home page");
}); // get 방식으로 접속

app.get("/dynamic", (req, res) => {
  let lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + `<li>coding${i + 1}</li>`;
  }
  let output = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
      </head>
      <body>
        Hello , Dynamic
        ${lis}
      </body>
    </html>
    `;
  res.send(output);
});

app.get("/router", (req, res) => {
  res.send('Hello router, <img src="/3.png">');
});

app.get("/login", (req, res) => {
  res.send("Login Please");
});

app.listen(3000, function () {
  console.log("connected 3000 port!");
});
