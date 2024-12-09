import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css"; // Asegúrate de importar los estilos si no está configurado globalmente

// Componente principal
const Home = () => {
    const [counter, setCounter] = useState(0); // Estado del contador

    const increment = () => {
        setCounter(counter + 1); // Incrementar el contador
    };

    return (
        <div className="home-container">
            <div className="counter-card">
                <img src={rigoImage} alt="Rigo Baby" className="image" />
                <div className="info">
                    <h1 className="counter">{counter}</h1>
                    <button className="button" onClick={increment}>
                        Incrementar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
