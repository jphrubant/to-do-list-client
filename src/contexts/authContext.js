import React, { createContext, Component } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
    user: null,
    todos: [],
    isLoggedIn: false,
    signupError: false,
    loginError: false,
    username: "",
    password: "",
    password2: "",
    axios: axios.create({baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true})
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  signup = event => {
    event.preventDefault();
    const { username, password, password2 } = this.state;
    if (password === password2) {
    this.state.axios
        .post('/auth/signup', {username, password})
        .then(({user}) => this.setState({ isLoggedIn: true, user}))
        .catch(err => this.setState({ isLoggedIn: false}))
    } else {
      this.setState({signupError: true})
    }
    this.setState({ username: "", password: "", password2: ""})
  }

  login = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.state.axios
        .post('/auth/login', {username, password})
        .then(({user}) => {
          this.setState({ isLoggedIn: true, user})
        })
        .catch(err => {
          this.setState({ isLoggedIn: false, loginError: true})
        })
    this.setState({ username: "", password: ""})
  }

  logout = () => {
    this.state.axios
      .post('/auth/logout', {})
      .then(({data}) => data);
    this.setState({isLoggedIn: false, user: null})
  }

  render () {
    return (
      <AuthContext.Provider value={{
        ...this.state, 
        handleChange: this.handleChange,
        login: this.login,
        signup: this.signup,
        logout: this.logout
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
};

export default AuthContextProvider;










