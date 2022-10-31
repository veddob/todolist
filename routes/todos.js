const bodyParser = require('body-parser');

const router = require('express').Router();
const Todo = require("../models/todo")

//routes

router.post("/add/todo",(req,res) => {
    const {todo} = req.body; //Koristimo destruktor
    // console.log(todo);

    const newTodo = new Todo({todo})

    //Spremamo 

    newTodo.save()
    .then(() => {
        console.log("Successfully added Todo!")
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})

.get("/delete/todo/:_id",(req,res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})

module.exports = router;