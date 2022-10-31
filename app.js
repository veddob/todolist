const express = require('express')
const mongoose = require('mongoose')

const app = express()

//Povezivanje na mongoDB

mongoose.connect("mongodb://localhost:27017/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Middleware

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine","ejs");

//Rute

app.use(require("./routes/index"))
app.use(require("./routes/todos"))

//Konfiguracija servera

app.listen(3000, () => console.log("Server radi na portu 3000"))