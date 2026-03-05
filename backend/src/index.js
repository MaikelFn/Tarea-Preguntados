import express from "express";
import cors from "cors";
import preguntas from "./data/preguntas.json" with { type: "json" };
import historial from "./data/historial.json" with { type: "json" };
import fspromises from "fs/promises";

/**
 * Servidor de Preguntados.
 *
 * Funciones principales:
 * - Entregar preguntas aleatorias para cada partida.
 * - Devolver el historial de partidas jugadas.
 * - Guardar nuevas partidas en archivo JSON local.
 */
const app = express();
const PORT = 3000;
app.use(cors());

/**
 * Guarda una partida en memoria y la persiste en `data/historial.json`.
 *
 * @param {string} nombreJugador - Nombre del jugador.
 * @param {number} aciertos - Cantidad de respuestas correctas.
 * @param {"ganado" | "perdido" | string} estado - Resultado final de la partida.
 * @returns {Promise<void>}
 */
const guardarHistorial = async (nombreJugador, aciertos, estado) => {
    const nuevaPartida = {
        nombreJugador,
        aciertos,
        estado
    };

    historial.push(nuevaPartida);

    await fspromises.writeFile(new URL("./data/historial.json", import.meta.url), JSON.stringify(historial, null, 2), "utf-8");
};

/**
 * Obtiene hasta 10 preguntas aleatorias sin repetir.
 *
 * @param {Array} list - Lista total de preguntas disponibles.
 * @returns {Array} Lista de preguntas seleccionadas para una partida.
 */
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

/**
 * GET /preguntas
 * Devuelve hasta 10 preguntas aleatorias desde `preguntas.json`.
 */
app.get("/preguntas", (req, res) => {
    res.json(obtenerPreguntas(preguntas));
    console.log("Preguntas enviadas");
});

/**
 * GET /historial
 * Devuelve todas las partidas almacenadas en `historial.json`.
 */
app.get("/historial", (req, res) => {
    res.json(historial);
    console.log("Historial enviado");
});

/**
 * POST /guardar-historial
 * Recibe una partida y la guarda en historial.
 */
app.post("/guardar-historial", express.json(), async (req, res) => {
    const { nombreJugador, aciertos, estado } = req.body;
    await guardarHistorial(nombreJugador, aciertos, estado);
    res.json({ message: "Historial guardado correctamente" });
});

// Inicializa el servidor HTTP.
app.listen(PORT);