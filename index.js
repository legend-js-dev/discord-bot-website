const express = require("express")
const app = express();
const { inviteURL, supportServer } = require("./config.json")

app.get("/", async (req, res) => {
  res.status(200).sendFile("/home/runner/website-1/website/html/home.html") //put the path to home.html here or it wont work - That is my path because i used repl.it
})

app.get("/home", async (req, res) => {
  res.status(200).sendFile("/home/runner/website-1/website/html/home.html") //put the path to home.html here or it wont work - That is my path because i used repl.it
})

app.get("/about", async (req, res) => {
  res.status(200).sendFile("/home/runner/website-1/website/html/about.html") //put the path to about.html here or it wont work - That is my path because i used repl.it
})

app.get("/team", async (req, res) => {
  res.status(200).sendFile("/home/runner/website-1/website/html/team.html") //put the path to team.html in here or it wont work - That is my path cecause i used repl.it
})

app.get(`/invite`, async (req, res) => {
  res.status(200)
  res.redirect(inviteURL)
})

app.get(`/supportServer`, async (req, res) => {
  res.status(200)
  res.redirect(supportServer)
})

app.use(express.static('website/css'))

app.use(function(req, res) {
  res.status(404).sendFile(`/home/runner/website-1/website/html/404.html`) //put the path to 404.html here or it wont work - That is my path because i used repl.it
})

app.listen(6969, () => console.log("loaded"))
