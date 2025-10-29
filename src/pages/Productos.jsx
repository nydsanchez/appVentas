import { useState, useEffect } from "react";
//import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { mockProductos } from "../api/productos";

const API_URL = "http://192.168.10.100:8080/api/productos";

function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  /*useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener la lista de productos:", err);
        setError(
          "Error al cargar los datos. Verifique que el backend esté corriendo."
        );
      }
    };

    getProducts();
  }, []);*/

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProductos);
      setLoading(false);
    }, 500);
  }, []);

  const header = (
    <div className="p-d-flex p-jc-between p-ai-center u-margin-bottom-small u-margin-top-small u-bg-white">
      <h2 className="p-m-0">Productos</h2>
    </div>
  );

  /* if (error) {
    return (
      <Card
        title="Error de Conexión"
        className="p-shadow-3 p-card-danger p-p-4 p-text-center container"
      >
        {error}
      </Card>
    );
  }*/
  return (
    <Card className="p-shadow-1 p-p-5 u-margin-top-medium u-padding-side-small">
      <DataTable
        value={products}
        header={header}
        dataKey="id"
        loading={loading}
        // === Puntos de Evaluación ===
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        filterDisplay="row" // Habilita los filtros en cada columna
        // ============================

        className="tabla-full-width"
        emptyMessage="No se han registrado productos."
      >
        <Column field="id" header="ID" sortable className="text-center" />
        <Column
          field="nombre"
          header="Nombre"
          sortable
          filter
          filterPlaceholder="filtrar por producto"
        />
        <Column
          field="descripcion"
          header="Descripción"
          sortable
          filter
          filterPlaceholder="Buscar por descripcion del producto"
        />
        <Column
          field="precio"
          header="Precio Unitario"
          sortable
          filter
          filterPlaceholder="filtrar por precio"
          className="text-center"
        />
        <Column
          field="stock"
          header="Stock"
          sortable
          filter
          filterPlaceholder="filtrar por cantidad"
          className="text-center"
        />
      </DataTable>
    </Card>
  );
}

export default Productos;
