import BotonPreguntas from "./BotonPreguntas"

/**
 * Propiedades del componente FramePregunta.
 * - `pregunta`: enunciado principal a mostrar.
 * - `opciones`: lista de respuestas disponibles (texto + bandera de corrección).
 * - `onRespuesta`: callback que recibe si la opción elegida es correcta.
 */
type FramePreguntaProps = {
    pregunta: string;
    opciones: { texto: string; esCorrecto: boolean }[];
    onRespuesta: (esCorrecto: boolean) => void;
};

/**
 * Contenedor visual de una pregunta del juego.
 * Renderiza hasta 3 botones de respuesta y delega el resultado al callback padre.
 */
export default function FramePregunta(props: FramePreguntaProps) {
    const [op1, op2, op3] = props.opciones;

    return (
        <div>
            <h2>{props.pregunta}</h2>
            <div>
                {op1 && (
                    <BotonPreguntas
                        texto={op1.texto}
                        onClick={() => props.onRespuesta(op1.esCorrecto)}
                        EsCorrecto={op1.esCorrecto}
                    />
                )}
                {op2 && (
                    <BotonPreguntas
                        texto={op2.texto}
                        onClick={() => props.onRespuesta(op2.esCorrecto)}
                        EsCorrecto={op2.esCorrecto}
                    />
                )}
                {op3 && (
                    <BotonPreguntas
                        texto={op3.texto}
                        onClick={() => props.onRespuesta(op3.esCorrecto)}
                        EsCorrecto={op3.esCorrecto}
                    />
                )}
            </div>
        </div>
    );
}
