import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Login = () =>(
    <section className="login">
        <section className="login__container">
            <h2>Inicia Sesión</h2>
            <form className="login__form">
                <input className="input" type="text" placeholder="Correo"/>
                <input className="input" type="password" placeholder="Contraseña"/>
                <button className="button">Iniciar Sesión</button>
                <div className="login__form--recuerdame">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox"/> Recuerdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>

            <section className="login__socialmedia">
                <div>
                    <img src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png" alt="Google"/>
                    Inicia sesión con Google
                </div>
                <div>
                    <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" alt="Twitter"/>
                    Inicia sesión con Twitter
                </div>
            </section>
            <p className="login__register">No tienes ninguna cuenta 
            
            <Link to="register">
                Registrate
            </Link>
            
            </p>
        </section>
    </section>
);

export default Login;

//<a href="">Registrate</a>
            