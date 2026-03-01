type Botonprops = {
    texto: string;
    onClick: () => void;
};

export default function Boton(props: Botonprops) {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: "#934ae2", color: "white", padding: "8px 14px", margin: "4px" }}>
            {props.texto}
        </button>
    );
}