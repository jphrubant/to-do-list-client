import React from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";
import Footer from "./components/Footer";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import AuthContextProvider from "./contexts/authContext";
import TodoContextProvider from "./contexts/todoContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <TodoContextProvider>
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <AnonRoute exact path='/signup' component={Signup}/>
          <AnonRoute exact path='/login' component={Login}/>
          <PrivateRoute exact path='/add' component={AddTodo}/>
          <PrivateRoute exact path='/update/:id' component={UpdateTodo}/>
          </Switch>
        </TodoContextProvider>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
