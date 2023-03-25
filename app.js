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

app.post("/contact", (req, res)=>{
  var username = req.body.username;
  var phone = req.body.phone;
  var email = req.body.email;
  console.log(username);
  console.log(phone);
  console.log(email);
  res.redirect("/");
});
