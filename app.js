const express = require("express")
const path = require('path')
const dotenv = require("dotenv");
const PostRouter = require("./routes/posts")
// express app
const app = express()

// template engine
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

// app middlewares
dotenv.config()
app.use(express.json())
app.use(express.static('assets'))

//app routes
app.use("/", PostRouter)

app.get("*", function (req, res, next) {
    res.status(200).send('Sorry, requested page not found.');
    next();
});

// server setup
app.listen(5000, function () {
    console.log(`http://localhost:5000`);
});