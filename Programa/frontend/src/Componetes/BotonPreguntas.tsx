/**
 * Propiedades del componente BotonPreguntas.
 * - `texto`: contenido visible del botón de respuesta.
 * - `onClick`: función ejecutada al seleccionar la respuesta.
 * - `EsCorrecto`: indica si la opción representada es correcta.
 */
type BotonPreguntasProps = {
  texto: string;
  onClick: () => void;
  EsCorrecto: boolean;
};


/**
 * Botón reutilizable para mostrar una opción de respuesta en el juego.
 */
export default function BotonPreguntas(props: BotonPreguntasProps) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "#934ae2", color: "white", padding: "8px 14px", margin: "4px" }}
    >
      {props.texto}
    </button>
  );
}
