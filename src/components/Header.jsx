import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <a href="index.html" title="Pagina principal">
        <img className="header__img" src="https://i.imgur.com/hwHdLHF.png"  alt="carlos logo"/>
        </a>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="https://i.imgur.com/PKgolRh.png" alt="User"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>            
        </div>
    </header>
);

export default Header;