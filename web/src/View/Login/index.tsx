import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Icons } from '../../Assets/Icons/'
import { getData, setData } from '../../Common/storage';
import { requestAPI_Auth } from '../../Config/constants';
import ls from 'local-storage';
import './styles.css';
import { useVerifyLogin } from '../../Context/auth';

const Login = () => {
  let history = useHistory();
  const { isLoginPage, setIsLoginPage } = useVerifyLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsLoginPage(true)
  },[])

  async function handleLogin() {
    try {
      const response = await requestAPI_Auth({
        params: `/auth/login`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email: email,
          password: password
        }
      });

      const data = await response;
      
      const { success, user, token } = data;

      if (success) {
        setData('token', token);
        setData('user',user);
        window.location.href = "/controlpainel"
        // history.push("/controlpainel");
        setIsLoginPage(false);        
      }
      else {
        console.log("handleLogin error")
      }
    
    } catch (e) {
      console.log("handleLogin error : ", e)
    }


  }

  return (
    <>
      <div className="row-md-12 h-100">
        <div className="d-flex col-md-12 h-100">
          <div className="col-md-3 h-75 mt-5 ml-4 rounded">
            <div>
              <h1 className="text-left ml-2 text-info">Bem Vindo(a) ao</h1>
              <h2 className="text-left ml-3" >Sistema de Controle de Ações para</h2>
              <h3 className="text-info ml-4">Swing Traders</h3>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center">
                <input type="text" className="loginInput" placeholder="Digite o seu Email" onChange={(e: any) => setEmail(e.target.value)} />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <input type="password" className="loginInput" placeholder="Digite a sua Senha" onChange={(e: any) => setPassword(e.target.value)} />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button className="btnLogin" onClick={() => handleLogin()}>Entrar</button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div>
              <img
                className="imgLogin"
                src={Icons.chart}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Login;