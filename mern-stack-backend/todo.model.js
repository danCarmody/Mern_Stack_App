const Sequelize = require('sequelize');
const dotenv = require('./data/db/todo.data');

const Schema = db.define('todo', {
    todo_description: {
        type: Sequelize.STRING
    },
    todo_responsible: {
        type: Sequelize.STRING
    },
    todo_priority: {
        type: Sequelize.STRING
    },
    todo_title: {
        type: Sequelize.STRING
    },
    todo_completed: {
        type: Sequelize.BOOLEAN
    }
});

Schema.sync().then(() => {
    console.log('table created');
});
module.exports = Schema;

