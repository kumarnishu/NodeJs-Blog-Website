const express = require("express")
const path = require('path')

// express app
const app = express()

// template engine
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

// app middlewares
app.use(express.json())
app.use(express.static('assets'))

//app routes
app.get("/", function (req, res) {
    res.render("home", {
        title: "Blogger",
    });
});
app.get("*", function (req, res, next) {
    res.status(200).send('Sorry, requested page not found.');
    next();
});

// server setup
app.listen(8080, function () {
    console.log(`http://localhost:8080`);
});