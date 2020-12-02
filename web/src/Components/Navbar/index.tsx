import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icons } from '../../Assets/Icons';
import { excludeData } from '../../Common/storage';
import { useVerifyLogin } from '../../Context/auth';
import './style.css';


const Header = () => {
    let history = useHistory();
    const { isLoginPage, setIsLoginPage } = useVerifyLogin();
    
    function closeSession(){
        excludeData("token");
        excludeData("user");
        setIsLoginPage(true);
        history.push("/");
    } 
    return (
        <>
            <div className="container">
                <div className="elements">
                    <header>
                        <a href="/dashboard">Dashboard</a>
                    </header>
                    <header>
                        <a href="">Controle</a>
                    </header>
                    <header>
                        <a href="">Configurações</a>
                    </header>
                </div>
                <div className="logout">
                    <header>
                        <a href="" onClick={() => closeSession()}><img src={Icons.logout} alt={"Logout"} />Sair</a>
                    </header>
                </div>
            </div>
        </>
    );

}

export default Header;