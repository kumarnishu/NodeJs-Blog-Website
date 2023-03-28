import path from 'path'
import dotenv from "dotenv"
import express, { Request, Response, NextFunction } from 'express';
import { connectDatabase } from './config/database';
import PostRouter from "./routes/posts";
import UserRouter from "./routes/users"

// express app
const app = express()

// app middlewares
app.use(express.json())
app.use(express.static('assets'))
dotenv.config()

if (process.env.NODE_ENV === "production")
    app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// connect database
connectDatabase()

//app routes
app.use("/", PostRouter)
app.use("/", UserRouter)

//serving react app 
app.use(express.static(path.join(__dirname, "dist")))
app.get('/login', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "dist/", "index.html"));
})

app.get("*", function (req: Request, res: Response, next: NextFunction) {
    res.render('no-page')
});

// server setup
app.listen(5000, function () {
    console.log(`http://localhost:5000`);
});