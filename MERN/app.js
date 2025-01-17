const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.set("view engine", "ejs");
app.use(morgan("dev"));

// if we are using post method then we to use inbuilt middleware to see data on terminal
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   const a = 5;
//   const b = 7;

//   console.log(a + b);
//   return next();
// });

app.get(
  "/",
  (req, res, next) => {
    const a = 10;
    const b = 4;
    const c = "hello";
    console.log(a + b + c);

    return next();
  },
  (req, res) => {
    res.render("index");
    // res.send("This is Home page");
  }
);

app.post("/get-data-form", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(3000);
