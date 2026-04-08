const express = require("express")
const path = require("node:path");

const indexRouter = require("./routers/indexRouter")
const messageRouter = require("./routers/messageRouter")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/new", messageRouter);
app.use("/", indexRouter);

app.listen(3000, (error) => {
    console.log(error);
})