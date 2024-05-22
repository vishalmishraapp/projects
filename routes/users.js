const express = require("express")
const router = express.Router()

// app.get("/",(req, res) => {
//     console.log("Hello World")
//     res.send("heyyy siri")
//     // res.sendStatus(500)
// })

router.get("/", (req, res) =>{
    res.send("User List")
})

router.get("/new", (req, res) =>{
    res.send("User New Data")
})

module.exports = router

app.listen(3000)