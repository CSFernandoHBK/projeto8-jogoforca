import React from "react";

import forca0 from "./img/forca0.png";
// import forca1 from "./img/forca1.png";

import palavras from "./palavras";

// const letrasClicadas = [];

export default function App() {

    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const [classeLetra, setclasseLetra] = React.useState("letraOculta");
    // const [letrasIniciais, setletrasIniciais] = React.useState(letras);
    const [letrasClicadas, setletrasClicadas] = React.useState([]);
    const [arrayPalavra, setarrayPalavra] = React.useState([]);

    function teste(pal){
        console.log(letrasClicadas);
    }

    function renderizarPalavra(array){
        return(
            <ul>
                {array.map((a) => (
                    <li>{a}</li>
                ))}
            </ul>
        )
    }

    function iniciarJogo(){
        setclasseLetra("letraAtiva");
        escolherPalavra();
        renderizarPalavra(arrayPalavra);
    }

    function escolherPalavra(){
        const palavra = (palavras[Math.floor(Math.random() * palavras.length)]).toUpperCase();
        setarrayPalavra(palavra.split(""));
    }

    function verificarLetra(letra){
        setletrasClicadas(...letrasClicadas, letra);
        return(arrayPalavra.forEach((letpav) => (letpav === letra ? console.log("igual") : console.log("diferente"))));
    }

    return (
        <>
            <div className="superior">
                <div className="forca">
                    <img src={forca0} alt="imagem inicial da forca"/>
                </div>
                <button className="escolherPalavra" onClick={() => iniciarJogo()}>Escolher Palavra</button>
            </div>
            <ul className="palavrarend">
                {arrayPalavra === [] ? "vazia" : (arrayPalavra.map((a, index) => (<li key={index}><span>{a}</span></li>)))}
            </ul>
            <div className="letras">
                {letras.map((l, index) => (
                <div className={classeLetra} key={index} onClick={() => verificarLetra(l)}>{l}</div>))}
            </div>
            <div className="inferior">
                <span>Já sei a palavra!</span>
                <input/>
                <button className="botaoChute" onClick={() => teste(arrayPalavra)}>Chutar</button>
            </div>
        </>
    )
}

