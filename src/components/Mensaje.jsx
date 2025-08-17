import { useState } from "react";

const Mensaje = ({ amigo }) => {
  const [msj, setMsj] = useState("");
  const mostrarMensaje = () => {
    setMsj("from changed state");
  };

  return (
    <div>
      Hello World {amigo} {msj}!
      <br />
      <button className="btn btn-danger" onClick={mostrarMensaje}>
        Click Me
      </button>
    </div>
  );
};

export default Mensaje;
