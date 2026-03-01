import express from "express";
import cors from "cors";
import preguntas from "./data/preguntas.json" with { type: "json" };
import historial from "./data/historial.json" with { type: "json" };
import fspromises from "fs/promises";

const app = express();
const PORT = 3000;

app.use(cors());

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
    connsole.log("Preguntas enviadas");
});

app.listen(PORT);