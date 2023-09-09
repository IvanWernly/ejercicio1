import { useEffect, useState } from "react";
import { obtenerProductos } from "../Service/productoService";
import { Producto } from './Producto';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
    });
  }, []);
  return (
    <div>
      {productos.map(producto =>
        <Producto key={producto.id} producto={producto} />
      )}
    </div>
  );
}
