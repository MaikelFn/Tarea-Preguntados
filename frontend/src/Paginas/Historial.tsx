import Boton from "../Componetes/Boton";

type HistorialProps = {
	cambiarPagina: (pagina: "inicio") => void;
};

export default function Historial(props: HistorialProps) {
	return (
		<div className="inicio-container">
			<h1>Historial</h1>
			<Boton texto="Volver al inicio" onClick={() => props.cambiarPagina("inicio")} />
		</div>
	);
}
