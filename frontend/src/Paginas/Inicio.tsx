import Boton from "../Componetes/Boton";
import "../App.css";

type InicioProps = {
	nombre: string;
	setNombre: (nombre: string) => void;
	cambiarPagina: (pagina: "juego" | "historial") => void;
};

export default function Inicio(props: InicioProps) {

	const BotonIniciar = () => {
		if (!props.nombre) {
			alert("Por favor, escribe tu nombre para iniciar.");
			return;
		}

		props.cambiarPagina("juego");
	};

	const BotonHistorial = () => {
		props.cambiarPagina("historial");
	};

	return (
		<div className="inicio-container">
			<h1>Inicio</h1>
			<label htmlFor="nombre" className="inicio-label">
				Escribe tu nombre
			</label>
			<input
				id="nombre"
				type="text"
				value={props.nombre}
				onChange={(event) => props.setNombre(event.target.value)}
				placeholder="Tu nombre"
				className="inicio-input"
			/>

			<div className="inicio-botones">
				<Boton texto="Iniciar" onClick={BotonIniciar} />
				<Boton texto="Ver historial" onClick={BotonHistorial} />
			</div>
		</div>
	);
}
