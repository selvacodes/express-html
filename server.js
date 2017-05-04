const express = require("express")
const app = express()
const http = require("http")
const httpServer = http.Server(app)

const port = 4000

app.use(express.static(__dirname + "/dist"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.get("/two", function(req, res) {
  res.sendFile(__dirname + "/two.html")
})

app.use("/one.js", function(req, res) {
  res.setHeader("content-type", "application/javascript")
  res.sendFile(__dirname + "/dist/one.bundle.js")
})

app.use("/two.js", function(req, res) {
  res.setHeader("content-type", "application/javascript")
  res.sendFile(__dirname + "/dist/two.bundle.js")
})

app.listen(port)

console.log(`app served @ ${port}`)
