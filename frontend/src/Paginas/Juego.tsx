

import { useEffect, useState } from "react";

type JuegoProps = {
	cambiarPagina: (pagina: "inicio") => void;
};

export default function Juego(props: JuegoProps) {
	const [preguntas, setPreguntas] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/preguntas")
			.then((respuesta) => respuesta.json())
			.then((data) => {
				setPreguntas(data);
			});
	}, []);

	return (
		<div className="inicio-container">
			<h1>Preguntas (JSON)</h1>
			<pre>{JSON.stringify(preguntas, null, 2)}</pre>
		</div>
	);
}
