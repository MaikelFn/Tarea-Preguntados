import Boton from "../Componetes/Boton";
import "../App.css";

/**
 * Propiedades de la pantalla de inicio.
 * - `nombre`: valor actual del input de nombre.
 * - `setNombre`: actualiza el nombre ingresado por el usuario.
 * - `cambiarPagina`: navega entre inicio, juego e historial.
 */
type InicioProps = {
	nombre: string;
	setNombre: (nombre: string) => void;
	cambiarPagina: (pagina: "juego" | "historial") => void;
};

/**
 * Pantalla inicial del juego.
 * Solicita el nombre del jugador y permite ir al juego o al historial.
 */
export default function Inicio(props: InicioProps) {

	// Valida que exista nombre antes de empezar la partida.
	const BotonIniciar = () => {
		if (!props.nombre) {
			alert("Por favor, escribe tu nombre para iniciar.");
			return;
		}

		props.cambiarPagina("juego");
	};

	// Cambia a la pagina de historial al hacer clic.
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
