let fs = require("fs");
let express = require ("express");
let path = require ("path");

let app = express();
app.use(express.static("styles"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"form.html"));
});

app.get("/info", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/info", (req, res) => {
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname,"404.html"));
})

app.listen(9000);