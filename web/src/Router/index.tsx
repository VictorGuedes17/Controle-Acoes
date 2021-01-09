import React, { Component, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { AuthContext, AuthProvider, useVerifyLogin } from "../Context/auth";
import Controle from "../View/Controle";
import Login from "../View/Login";
import Dashboard from "../View/Dashboard";
import Header from '../Components/Navbar'
import { getData } from "../Common/storage";

interface State {
  isLogged: boolean;
  loading: boolean;
}

export default class AppRouter extends Component {
  state = {
    isLogged: false,
    loading: true
  };

  async componentDidMount() {
      await this.getUser();
      setTimeout(() => {
        this.setState({ loading: false })
      },3000)
  }

  getUser = async() => {
    const userData: any[] = getData('user');
    if (userData && userData.length > 0) {
      this.setState({ isLogged: true })
    } else {
      if (window.location.href !== "http://localhost:3000/") {
        window.location.href = "/"
      }
    }
  }

  render() {
    const { isLogged, loading } = this.state;

    return (
      loading ? <h1>Carregando</h1> : 
      <Router>
        {!isLogged ? <></> :
          <Header />}
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/controlpainel' exact>
            <Controle />
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    )
  }
}