import { useEffect, useState } from "react";
//import axios from "axios";
//import { Card } from "primereact/card";
import DataVentas from "./DataVentas";
import { mockVentas } from "../api/ventas";

const API_URL = "http://192.168.10.100:8080/api/reportes/resumen";

function Dashboard() {
  const [ventaData, setVentaData] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  /*useEffect(() => {
    const getDataVentas = async () => {
      try {
        const response = await axios.get(API_URL);
        setVentaData(response.data);
      } catch (err) {
        console.error("Error al obtener la lista de clientes:", err);
        setError(
          "Error al cargar los datos. Verifique que el backend esté corriendo."
        );
      }
    };

    getDataVentas();
  }, []);

  if (error) {
    return (
      <Card
        title="Error de Conexión"
        className="p-shadow-3 p-card-danger p-p-4 p-text-center container"
      >
        {error}
      </Card>
    );
  }*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setVentaData(mockVentas);
      // setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {ventaData.length > 0 ? (
        ventaData.map((item, index) => <DataVentas item={item} key={index} />)
      ) : (
        <p>Cargando datos de ventas...</p>
      )}
    </div>
  );
}

export default Dashboard;
