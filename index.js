let fs = require("fs");
let express = require ("express");
let path = require ("path");

let app = express();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"form.html"));
});

app.get("/info", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.post("/addUser", (req, res) => {
    console.log(req.body);
    fs.appendFile("users.json", JSON.stringify(req.body), (error) => {
        if(error) {
            console.log(error)
        }
        res.redirect("/info")
    })
})

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(9000);