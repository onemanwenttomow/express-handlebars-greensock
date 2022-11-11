const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home");
})

app.listen(8080, () => console.log("listening on http://localhost:8080"));
