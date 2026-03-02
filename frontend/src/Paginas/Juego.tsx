import { useEffect, useState } from "react";
import FramePregunta from "../Componetes/FramePregunta";
import Boton from "../Componetes/Boton";

type Respuesta = {
	texto: string;
	correcto: boolean;
}

type Pregunta = {
	pregunta: string;
	respuestas: Respuesta[];
}

type JuegoProps = {
	nombre: string;
	cambiarPagina: (pagina: string) => void;
}

export default function Juego(props: JuegoProps) {
	const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
	const [indice, setIndice] = useState(0);
	const [RespuestasCorrectas, setRespuestasCorrectas] = useState(0);
	const [juegoTerminado, setJuegoTerminado] = useState(false);

	const enviarHistorial = (aciertos: number) => {
		let estado = "perdido";
		if (aciertos >= 5) {
			estado = "ganado";
		}
		fetch("http://localhost:3000/guardar-historial", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				nombreJugador: props.nombre,
				aciertos: aciertos,
				estado: estado
			})
		});
	};

	useEffect(() => {
		fetch("http://localhost:3000/preguntas")
			.then(respuesta => respuesta.json())
			.then(datos => setPreguntas(datos));
	}, []);

	if (!preguntas[indice]) {
		return <div>Cargando</div>;
	}

	const preguntaActual = preguntas[indice];
	const opciones = preguntaActual.respuestas.map((respuesta: any) => ({
		texto: respuesta.texto,
		esCorrecto: respuesta.correcto
	}));

	const RespuestaSeleccionada = (esCorrecto: boolean) => {
		let aciertos = RespuestasCorrectas;
		if (esCorrecto) {
			aciertos = RespuestasCorrectas + 1;
			setRespuestasCorrectas(aciertos);
		}
		if (indice < preguntas.length - 1) {
			setIndice(indice + 1);
		} else {
			setJuegoTerminado(true);
			enviarHistorial(aciertos);
		}
	};

	if (juegoTerminado) {
		return (
			<div className="inicio-container">
				<h1>Juego terminado</h1>
				<p>Respuestas correctas: {RespuestasCorrectas} de {preguntas.length}</p>
				<Boton texto="Volver al inicio" onClick={() => props.cambiarPagina("inicio")} />
			</div>
		);
	}

	return (
		<div className="inicio-container">
			<h1>Pregunta {indice + 1} de {preguntas.length}</h1>
			<FramePregunta pregunta={preguntaActual.pregunta} opciones={opciones} onRespuesta={RespuestaSeleccionada} />
		</div>
	);
}
