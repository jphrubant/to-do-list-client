import React, { createContext, Component } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
  state = {
    user: null,
    todos: [],
    name: "",
    description: "",
    pendingToggle: true,
    solvedToggle: false,
    updateToggle: false,
    axios: axios.create({baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true})
  }

  componentDidMount = () => {
    this.state.axios
    .get('/auth')
    .then(({data}) => {
      this.setState({user: data.username, todos: data.todo})
    });  
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  togglePendingFunc = () => {
    this.setState({pendingToggle: !this.state.pendingToggle, solvedToggle: false})
  }

  toggleSolvedFunc = () => {
    this.setState({solvedToggle: !this.state.solvedToggle, pendingToggle: false})
  }

  addTodo = (event) => {
    event.preventDefault();
    const { name, description } = this.state;
    let createdTimestamp = new Date().toDateString();
    this.state.axios
      .post('/todos', {name, description, createdTimestamp})
      .then(({data}) => {
        let todos = [...this.state.todos, data];
        this.setState({name: "", description: "", todos});
      })
      .catch(err => console.log(err));
  };

  updateTodo = (id) => {
    const { name, description } = this.state;
    this.state.axios
      .put(`/todos/${id}`, {name, description})
      .then(({data}) => {
        let todo = this.state.todos.filter(oneTodo => {
          return id === oneTodo._id
        })
        todo[0].name = name;
        todo[0].description = description;
        this.setState({name: "", description: "", todos: [...this.state.todos, todo]});
      })
      .catch(err => console.log(err));
  }

  setTask = (id) => {
    this.state.todos.filter(oneTodo => {
      if(id === oneTodo._id){
        this.setState({name: oneTodo.name, description: oneTodo.description})
      }
      return oneTodo;
    })
  }

  solveOneTodo = (oneTodo) => {
    const { _id, name, description } = oneTodo;
    let solvedTimestamp = new Date().toDateString()
    this.state.axios
      .put(`/todos/${_id}`, {name, description, solvedTimestamp, solved: true})
      .then(({data}) => {
        let todo = this.state.todos.filter(oneTodo => {
          return _id === oneTodo._id
        })
        todo[0].solved = true;
        todo[0].solvedTimestamp = solvedTimestamp;
        this.setState({todos: [...this.state.todos, todo]});
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (id) => {
    this.state.axios
      .delete(`/todos/${id}`, {})
      .then(({data}) => {
        let todos = this.state.todos.filter(oneTodo => {
          return oneTodo._id !== id
        })
        this.setState({name: "", description: "", todos})
      })
      .catch(err => console.log(err))
  };

  render () {
    return (
      <TodoContext.Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        addTodo: this.addTodo,
        updateTodo: this.updateTodo,
        deleteTodo: this.deleteTodo,
        togglePendingFunc: this.togglePendingFunc,
        toggleSolvedFunc: this.toggleSolvedFunc,
        solveOneTodo: this.solveOneTodo,
        setTask: this.setTask
      }}>
        {this.props.children}
      </TodoContext.Provider>
      );
  };
};

export default TodoContextProvider;