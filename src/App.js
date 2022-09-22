import React from "react";

import forca0 from "./img/forca0.png";
// import forca1 from "./img/forca1.png";

// import palavras from "./palavras";

// const letrasClicadas = [];

export default function App() {

    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const [classeLetra, setclasseLetra] = React.useState("letraOculta");
    // const [letrasIniciais, setletrasIniciais] = React.useState(letras);
    // const [letrasClicadas, setletrasClicadas] = React.useState([]);

    function iniciarJogo(){
        setclasseLetra("letraAtiva");
    }

    return (
        <>
            <div className="superior">
                <div className="forca">
                    <img src={forca0} alt="imagem inicial da forca"/>
                </div>
                <button className="escolherPalavra" onClick={() => iniciarJogo()}>Escolher Palavra</button>
            </div>
            <div className="letras">
                {letras.map((l, index) => (
                <div className={classeLetra} key={index}>{l}</div>))}
            </div>
            <div className="inferior">
                <span>Já sei a palavra!</span>
                <input/>
                <button className="botaoChute">Chutar</button>
            </div>
        </>
    )
}

