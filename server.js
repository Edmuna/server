const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
app.use(cors())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello world" })
})

app.get("/home", (req, res) => {
    res.json({ message: "Home API endpoint" })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})