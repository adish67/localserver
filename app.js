const express = require('express');

const app = express();

app.set("view engine" ,"ejs");

app.get("/",(req,res) => {
    res.render("index");
})

const port = 4000;

app.listen(port,() => {
    console.log("server is listening on port ${port}")
});