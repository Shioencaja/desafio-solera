import { useState } from "react";
import { services, categorias } from "../assets/servicios";
import ServicioCard from "./ServicioCard";

function ServiciosContainer() {
  const [servicios, setServicios] = useState(services);
  const [filtro, setFiltro] = useState([]);
  const [filtrando, setFiltrando] = useState(false);

  function eliminarServicio(id) {
    const elimServ = servicios.filter((servicio) => {
      return servicio.id !== id;
    });

    setServicios(elimServ);
  }

  function filtrarCategoria(name) {
    setFiltrando(true);
    setFiltro(name);
  }

  return (
    <div className="flex flex-col justify-center w-full my-10">
      <div className="flex justify-evenly p-5">
        <button className="text-3xl" onClick={() => setFiltrando(false)}>
          Todos
        </button>
        {categorias.map((categoria) => (
          <button
            className="text-3xl"
            key={categoria.id}
            onClick={() => filtrarCategoria(categoria.name)}
          >
            {categoria.name}
          </button>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-1 gap-2 w-full max-w-screen-xl md:grid-cols-3">
          {filtrando
            ? servicios
                .filter((servicio) => servicio.category == filtro)
                .map((servicio) => (
                  <ServicioCard
                    key={servicio.id}
                    name={servicio.name}
                    id={servicio.id}
                    description={servicio.description}
                    eliminarServicio={eliminarServicio}
                  />
                ))
            : servicios.map((servicio) => (
                <ServicioCard
                  key={servicio.id}
                  id={servicio.id}
                  name={servicio.name}
                  description={servicio.description}
                  eliminarServicio={eliminarServicio}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
export default ServiciosContainer;
