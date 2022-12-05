import { useState, useEffect } from "react";

function ServicioCard({ name, id, description, eliminarServicio }) {
  const [editar, setEditar] = useState(false);
  const [servicio, setServicio] = useState(name);
  const [descripcion, setDescription] = useState(description);
  const [nombre, setNombre] = useState(servicio);
  const [detalles, setDetalles] = useState(descripcion);
  function editarServicio() {
    setEditar(true);
  }
  function cancelarEdicion() {
    setEditar(false);
  }

  function editarNombre(e) {
    setNombre(e.target.value);
  }
  function editarDescripcion(e) {
    setDetalles(e.target.value);
  }
  function enviarCambios(e) {
    e.preventDefault();
    setServicio(nombre);
    setDescription(detalles);
    setEditar(false);
  }
  useEffect(() => {
    setServicio(name);
    setDescription(description);
  }, []);

  return (
    <>
      {editar ? (
        <form
          className="flex flex-col px-3 pt-3 border-2 border-black h-80 rounded-md "
          onSubmit={enviarCambios}
        >
          <input
            className="text-2xl border-2 p-1"
            type="text"
            value={nombre}
            onChange={editarNombre}
          />
          <textarea
            className="h-full border-2 p-1"
            value={detalles}
            onChange={editarDescripcion}
          ></textarea>
          <div className="flex justify-around border-t-2 p-2 ">
            <button type="submit">Grabar</button>
            <button type="button" onClick={cancelarEdicion}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col px-3 pt-3 border-2 border-black h-80 justify-between rounded-md">
          <div className="flex flex-col gap-3 p-3">
            <h2 className="text-2xl">{servicio}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="flex justify-around border-t-2 p-2 ">
            <button
              className="align-middle"
              type="button"
              onClick={editarServicio}
            >
              Editar
            </button>
            <button
              className="flex justify-center items-center"
              type="button"
              onClick={() => eliminarServicio(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ServicioCard;
