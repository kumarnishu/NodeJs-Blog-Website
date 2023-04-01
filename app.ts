import path from 'path'
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser"
import express, { Request, Response, NextFunction } from 'express';
import { connectDatabase } from './config/database';
import PostRouter from "./routes/posts";
import UserRouter from "./routes/users"
import PublicRouter from "./routes/public"

// express app
const app = express()
dotenv.config()

const PORT = process.env.PORT
const HOST = process.env.HOST

// app middlewares
app.use(express.json())
app.use(cookieParser());
app.use(express.static('assets'))

if (process.env.NODE_ENV === "production")
    app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// connect database
connectDatabase()

//app routes
app.use("/", PublicRouter)
app.use("/api/v1", PostRouter)
app.use("/api/v1", UserRouter)

//serving react app
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "dist")))
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "dist/", "index.html"));
    })
}

app.get("*", function (req: Request, res: Response, next: NextFunction) {
    // res.render('no-page')
    res.send("wrong url")
});

// server setup
if (!PORT) {
    console.log("Server Port not specified in the environment")
    process.exit(1)
}
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${HOST}:${PORT}`);
});