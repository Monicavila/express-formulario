let fs = require("fs");
let express = require ("express");
let path = require ("path");

let app = express();

//Middleware
app.use("/public", express.static("public"));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"form.html"));
});

app.get("/inicio", (req, res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.post("/addUser", (req, res) => {
    fs.appendFile("users.json", JSON.stringify(req.body), (error) => {
        if(error) {
            console.log(error)
        }
        res.redirect("/inicio")
    })
})

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(9000);