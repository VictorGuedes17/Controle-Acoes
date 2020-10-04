import React from 'react'
import { Icons } from '../../Assets/Icons/'

const Login = () => {

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
                                <input type="text" className="loginInput" placeholder="Digite o seu Email" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <input type="password" className="loginInput" placeholder="Digite a sua Senha" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btnLogin">Entrar</button>
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