import React from 'react';
import '../assets/styles/components/Search.scss';

const main_title_text="Carlos Córdova, Página de muestra (en mantenimiento)";
const main_input_text="Buscar...";

const Search = () =>(
    <section className="main">
    <h2 className="main__title">{main_title_text}</h2>
    <input className="input" type="text" placeholder={main_input_text}/>
    </section>
);

export default Search;