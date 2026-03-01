type BotonPreguntasProps = {
  texto: string;
  onClick: () => void;
  EsCorrecto: boolean;
};


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
