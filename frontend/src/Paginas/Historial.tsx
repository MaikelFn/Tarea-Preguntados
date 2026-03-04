import { useEffect, useState } from "react";
import Boton from "../Componetes/Boton";

type Partida = {
	nombreJugador: string;
	aciertos: number;
	estado: "ganado" | "perdido";
};

type HistorialProps = {
	cambiarPagina: (pagina: "inicio") => void;
};

export default function Historial(props: HistorialProps) {
	const [partidas, setPartidas] = useState<Partida[]>([]);

	useEffect(() => {
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
				<ul>
					{partidas.map((partida, i) => (
						<li key={i}>
							<div>Jugador: {partida.nombreJugador}</div>
							<div>Aciertos: {partida.aciertos}/10</div>
							<div>Estado: {partida.estado}</div>
						</li>
					))}
				</ul>
			)}

			<Boton texto="Volver al inicio" onClick={() => props.cambiarPagina("inicio")} />
		</div>
	);
}

