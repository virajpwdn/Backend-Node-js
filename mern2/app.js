const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// z = "hello world"
const data = [
  {
    username: "hey",
    id: 1,
  },
  {
    username: "hi",
    id: 2,
  },
  {
    username: "huihui",
    id: 3,
  },
];

app.get("*", (req, res) => {
  res.render("index",{
    data:data
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
