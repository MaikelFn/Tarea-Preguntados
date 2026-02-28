import { useState } from "react";

type BotonPreguntasProps = {
  texto: string;
  onClick: () => void;
  EsCorrecto: boolean;
};

const baseColor = "#934ae2";

export default function BotonPreguntas(props: BotonPreguntasProps) {
  const [bgColor, setBgColor] = useState(baseColor);

  const handleClick = () => {
    setBgColor(props.EsCorrecto ? "green" : "red");
    props.onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: "white", padding: "8px 14px", margin: "4px" }}
    >
      {props.texto}
    </button>
  );
}
