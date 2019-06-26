const express = require("express");
const fs = require("fs");
const app = express();
let cards = [];
let tiles = {}

fs.readFile("./data/db.json", "utf8", (err, result) => {
    let contents = JSON.parse(result);
    cards = contents.cards;
    tiles = contents.tiles;
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/cards", (req, res) => {
    res.json(cards);
});

app.get("/cards/count", (req, res) => {
    res.json(cards.length);
});

app.get("/cards/:index", (req, res) => {
    res.json(cards[+req.params.index - 1]);
});

app.get("/tiles", (req, res) => {
    res.json(tiles);
});

app.listen(3000, () => {
    console.log("app listening on port 3000");
});