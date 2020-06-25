import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';
import logo from './logo.png';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar brand" href="/">
              <img src={logo} width="30" height="30" alt="logo i stole" />
            </a>
            <Link to='/' className="navbar-brand"> Mern-Stack Tracker App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to='/' className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={TodosList} />
          <Route path='/edit:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
