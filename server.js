
const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.get("/",(req, res) => {
    console.log("Hello World")
    res.send("Hy Hello World")
    res.download('server.js')
    res.json({message:"Error"})
    res.index('index')
    res.render("index", {text: "World"})
    // res.sendStatus(500)
})

// const userRouter = require("./routes/users")
// app.use("/users", userRouter)
app.listen(3000)