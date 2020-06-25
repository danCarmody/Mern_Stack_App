const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = express.Router();
const PORT = 4000;

var mysql = require('mysql');
// const { default: TodosList } = require('../mern-stack-app/src/components/todos-list.component');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Dan',
    password: 'Fire_Bal1',
    database: 'mern_stack_db'
});

var Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(todos);
        }
    })
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;

    Todo.findById(id, function(err, todo) {
        res.json(todo);
    })
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);

    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req,res) {
    Todo.findById(req.params.id, function(err, todo) {
        if(!todo){
            res.status(404).send("Data is not found.");
        }
        else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsibile = req.body.todo_responsibile;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.todo_title = req.body.todo_title;

            todo.save().then(todo => {
                res.json('TODO updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible.");
            });
        }
    });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});