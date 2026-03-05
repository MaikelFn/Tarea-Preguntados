/**
 * Propiedades del componente Boton.
 * - `texto`: etiqueta visible dentro del botón.
 * - `onClick`: función que se ejecuta al hacer clic.
 */
type Botonprops = {
    texto: string;
    onClick: () => void;
};

/**
 * Botón reutilizable de la aplicación.
 * Mantiene un estilo inline fijo para conservar consistencia visual.
 */
export default function Boton(props: Botonprops) {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: "#934ae2", color: "white", padding: "8px 14px", margin: "4px" }}>
            {props.texto}
        </button>
    );
}