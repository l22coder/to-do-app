const express = require("express");
const app = express();
const port = 3000;

// EJS를 템플릿 엔진으로 사용
app.set("view engine", "ejs");

// 정적 파일들을 제공하기 위해 public 폴더를 설정
app.use(express.static("public"));

// 루트 경로로 접속했을 때 처리
app.get("/", (req, res) => {
  res.render("index");
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
