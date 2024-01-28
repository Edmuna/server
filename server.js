const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
app.use(cors())

const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
    res.json({ message: "Hello world" })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})