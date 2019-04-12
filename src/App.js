import React, { Component } from 'react'
import './App.css';
import Header from './components/layouts/Header'
import About from './components/pages/About'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Time to sleep 1',
        completed: false
      },
      {
        id: 2,
        title: 'Time to sleep 2',
        completed: true
      },
      {
        id: 3,
        title: 'Time to sleep 3',
        completed: false
      },
      {
        id: 4,
        title: 'Time to sleep 4',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  addTodo = (title) => {
    let newTodo = {
      id: 10,
      title,
      completed: false
    }
    this.setState({ todo: [...this.state.todo, newTodo] })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props =>
            (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todo} markComplete={this.markComplete} />
              </React.Fragment>
            )

          } />

        </div >
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
