import express from "express";
import cors from "cors";
import preguntas from "./data/preguntas.json" with { type: "json" };
import historial from "./data/historial.json" with { type: "json" };
import fspromises from "fs/promises";

const app = express();
const PORT = 3000;

app.use(cors());


const guardarHistorial = async (nombreJugador, aciertos, estado) => {
    const nuevaPartida = {
        nombreJugador,
        aciertos,
        estado
    };

    historial.push(nuevaPartida);

    await fspromises.writeFile(new URL("./data/historial.json", import.meta.url), JSON.stringify(historial, null, 2), "utf-8");
};

const obtenerPreguntas = (list) => {
    const copia = list.slice();
    const listaPreguntas = [];

    for (let i = 0; i < 10 && copia.length > 0; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        listaPreguntas.push(copia[indice]);
        copia.splice(indice, 1);
    }

    return listaPreguntas;
};

app.get("/preguntas", (req, res) => {
    res.json(obtenerPreguntas(preguntas));
    console.log("Preguntas enviadas");
});

app.get("/probar-historial", async (req, res) => {
    await guardarHistorial("JugadorPrueba", 7, "ganado");
    res.json(historial);
});

app.listen(PORT);