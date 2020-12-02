import React, { useContext, useEffect, useState } from "react";
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

export default function AppRouter() {
  const { isLoginPage, setIsLoginPage } = useVerifyLogin();

  return (
      <Router>
        {isLoginPage === false ? 
      <Header /> : <></>
      }
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