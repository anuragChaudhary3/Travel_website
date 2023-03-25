const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.listen("3000", ()=>{
  console.log("server started at port 3000");
});

app.get("/", (req, res)=>{
  res.render("home");
});

app.get("/index.html", (req, res)=>{
  res.redirect("/");
});

app.get("/contact.html", (req, res)=>{
  res.render("contact");
});

app.get("/about.html", (req, res)=>{
  res.render("about");
});
