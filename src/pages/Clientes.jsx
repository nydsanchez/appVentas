import { useState, useEffect } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";

const API_URL = "http://192.168.10.100:8080/api/clientes";
const mockClients = [
  { id: 101, name: "Juan Pérez", email: "juan.perez@corp.com", totalVentas: 5 },
  { id: 102, name: "María García", email: "maria.g@corp.com", totalVentas: 12 },
  { id: 103, name: "Carlos López", email: "carlos.l@corp.com", totalVentas: 3 },
  { id: 104, name: "Ana Rodríguez", email: "ana.r@corp.com", totalVentas: 7 },
  { id: 105, name: "Luis Hernández", email: "luis.h@corp.com", totalVentas: 9 },
  {
    id: 106,
    name: "Laura Martinez",
    email: "laura.m@corp.com",
    totalVentas: 6,
  },
  { id: 107, name: "David Sánchez", email: "david.s@corp.com", totalVentas: 4 },
];

function Clientes() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await axios.get(API_URL);
        setClients(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener la lista de clientes:", err);
        setError(
          "Error al cargar los datos. Verifique que el backend esté corriendo."
        );
      }
    };

    getClients();
  }, []);

  const header = (
    <div className="p-d-flex p-jc-between p-ai-center">
      <h5 className="p-m-0">Listado de Clientes</h5>
    </div>
  );

  if (error) {
    return (
      <Card
        title="Error de Conexión"
        className="p-shadow-3 p-card-danger p-p-4 p-text-center"
      >
        {error}
      </Card>
    );
  }

  return (
    <Card className="p-shadow-1 container">
      <DataTable
        value={clients}
        header={header}
        dataKey="id"
        loading={loading}
        // === Puntos de Evaluación ===
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        filterDisplay="row" // Habilita los filtros en cada columna
        // ============================
        tableClassName="w-full"
        emptyMessage="No se encontraron clientes."
      >
        <Column field="id" header="ID" sortable />
        <Column
          field="nombre"
          header="Nombre"
          sortable
          filter
          filterPlaceholder="Buscar por nombre"
        />
        <Column
          field="correo"
          header="Correo"
          sortable
          filter
          filterPlaceholder="Buscar por correo"
        />
        <Column field="telefono" header="Teléfono" />
        <Column field="direccion" header="Dirección" />
      </DataTable>
    </Card>
  );
}

export default Clientes;
