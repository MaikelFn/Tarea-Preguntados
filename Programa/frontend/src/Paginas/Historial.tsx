import { useEffect, useState } from "react";
import Boton from "../Componetes/Boton";

/**
 * Representa una partida guardada por el backend.
 */
type Partida = {
	nombreJugador: string;
	aciertos: number;
	estado: "ganado" | "perdido";
};

/**
 * Propiedades de la pantalla Historial.
 * Permite volver a la pantalla de inicio.
 */
type HistorialProps = {
	cambiarPagina: (pagina: "inicio") => void;
};

/**
 * Pantalla que consulta y muestra el historial de partidas.
 * Si no hay datos, muestra un estado vacio.
 */
export default function Historial(props: HistorialProps) {
	const [partidas, setPartidas] = useState<Partida[]>([]);

	useEffect(() => {
		// Carga el historial al montar la pantalla.
		fetch("http://localhost:3000/historial")
			.then(respuesta => respuesta.json())
			.then(datos => setPartidas(datos));
	}, []);

	return (
		<div className="inicio-container">
			<h1>Historial</h1>
			
			{partidas.length === 0 ? (
				<p>No hay partidas</p>
			) : (
				<div className="historial-scroll-container">
					<ul>
						{partidas.map((partida, i) => (
							<li key={i}>
								<div>Jugador: {partida.nombreJugador}</div>
								<div>Aciertos: {partida.aciertos}/10</div>
								<div>Estado: {partida.estado}</div>
							</li>
						))}
					</ul>
				</div>
			)}

			<Boton texto="Volver al inicio" onClick={() => props.cambiarPagina("inicio")} />
		</div>
	);
}

