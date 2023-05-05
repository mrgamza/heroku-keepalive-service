const express = require("express")
const http = require("http");
const app = express()

const PORT = process.env.PORT || 3000;
const apps = [
    'your-app'
]

function doWork() {
    apps.forEach((item, index, array) => {
        const url = `http://${item}.herokuapp.com`
        console.log(`call :`, url);
        http.get(url);
    })
}

app.get("/", (req, res) => {
    res.send('Hello, keepalive service!')
})

app.get("/force", (req, res) => {
    doWork()
})

app.listen(PORT)

console.log("Start keepalive service!!")

setInterval(function () {
    doWork()
}, 600000)
