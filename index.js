var https = require('https')
global.bds_api_start = true
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path")
var cors = require('cors');

app.use(cors())
app.use(require("body-parser").json())
app.use(require("body-parser").urlencoded({ extended: true }))

app.get("/mcpe", (req, res) => {
    var dir = fs.readdirSync('/var/www/html/Minecraft/mcpe')
    var element = '['
    var url_base = `https://f.sh23.org/Minecraft/mcpe`
    for (let index in dir) {
        element += `{"name": "${dir[index].replaceAll(".apk", "")}","url": "${url_base}/${dir[index]}"},`
        index++
    }
    if (element.slice(-1) === ","){
        element = element.slice(0, -1)
        element += "]"
    }
    return res.send(element);
})
app.get("/script", (req, res) => {
    const script = fs.readFileSync("./fet.js")
    res.type('.js');
    res.send(script);
})
app.get("/", (req, res) => {
    const html = fs.readFileSync("./index.html")
    res.type('.html');
    res.send(html);
})
const http_port = 8880
app.listen(http_port)