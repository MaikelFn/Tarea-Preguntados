import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => {
        console.log("Respuesta:", data);
      });
  }, []);

  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;