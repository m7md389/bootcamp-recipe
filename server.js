const express = require("express")
const path = require("path")
const api = require("./server/routes/api")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)


const PORT = 8080
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
})