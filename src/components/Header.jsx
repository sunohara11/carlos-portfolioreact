import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';


const Header = () => (
    <header className="header">
        
        <Link to='/'>
            <img className="header__img" src="https://i.imgur.com/hwHdLHF.png"  alt="carlos logo"/>        
        </Link>        

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="https://i.imgur.com/PKgolRh.png" alt="User"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li>
                    <Link to="/login">
                        Iniciar Sesión
                    </Link>
                </li>
            </ul>            
        </div>
    </header>
);

export default Header;

/*
        <a href="index.html" title="Pagina principal">
            <img className="header__img" src="https://i.imgur.com/hwHdLHF.png"  alt="carlos logo"/>
        </a>

*/