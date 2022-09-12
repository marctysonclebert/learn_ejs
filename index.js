const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const port = 3000 || 3001;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

app.use(expressLayout);
app.set("layout", "./layouts/layout.ejs");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.listen(port, () => {
  console.log("====================================");
  console.log(`App is running on http://localhost:${port}`);
  console.log("====================================");
});
