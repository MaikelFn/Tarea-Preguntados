import { useState } from "react";
import Inicio from "./Paginas/Inicio";
import Juego from "./Paginas/Juego";
import Historial from "./Paginas/Historial";

/**
 * Componente raiz de la aplicacion.
 * Controla la navegacion interna por estado entre:
 * - inicio
 * - juego
 * - historial
 */
function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [nombre, setNombre] = useState("");

  // Actualiza la pantalla visible segun la opcion seleccionada.
  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  if (paginaActual === "inicio") {
    return (
      <Inicio
        nombre={nombre}
        setNombre={setNombre}
        cambiarPagina={cambiarPagina}
      />
    );
  }

  if (paginaActual === "juego") {
    return <Juego nombre={nombre} cambiarPagina={cambiarPagina} />;
  }

  if (paginaActual === "historial") {
    return <Historial cambiarPagina={cambiarPagina} />;
  }

  return null;
}

export default App;