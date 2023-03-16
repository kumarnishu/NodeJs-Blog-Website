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
app.get("/detail", function (req, res) {
    let youtube = `
       <iframe width="560" height="315" src="https://www.youtube.com/embed/wrdt1nkcW2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    let gist =` <script src="https://gist.github.com/kumarnishu/1acfc36f0d11b4ba47da1f50f810c249.js"></script>`
    let context = {
        title: "Blogger Post Detail Page",
        youtube,
        gist 
    }
    res.render("post-detail", context);
});
app.get("/", function (req, res) {
    
    let context = {
        title: "Blogger Home Page"
    }
    res.render("home", context);
});

app.get("*", function (req, res, next) {
    res.status(200).send('Sorry, requested page not found.');
    next();
});

// server setup
app.listen(8080, function () {
    console.log(`http://localhost:8080`);
});