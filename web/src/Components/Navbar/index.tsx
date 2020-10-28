import React from 'react';
import { Icons } from '../../Assets/Icons';
import './style.css';


const Header = () => {
    return (
        <>
            <div className="container">
                <div className="elements">
                    <header>
                        <a href="">Dashboard</a>
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
                        <a href=""><img src={Icons.logout} alt={"Logout"} />Sair</a>
                    </header>
                </div>
            </div>
        </>
    );

}

export default Header;