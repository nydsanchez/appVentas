import { useState, useEffect } from "react";
//import axios from "axios"; // ⬅️ Descomentado para llamadas API
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { mockProductos } from "../api/productos";

// ⬅️ Importamos el nuevo componente modal wrapper
import ProductoModal from "../components/ProductoModal";

const API_URL = "http://192.168.10.100:8080/api/productos";

const EMPTY_PRODUCT = {
  id: null,
  nombre: "",
  descripcion: "",
  precio: 0,
  stock: 0,
};

function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ⬅️ Activamos manejo de error

  // Estados para controlar el modal
  const [displayModal, setDisplayModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // --- LÓGICA DE CARGA (Usando mock para el ejemplo, pero lista para axios) ---
  useEffect(() => {
    // Descomenta esta sección si quieres usar AXIOS de inmediato
    /*const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error("Error al obtener la lista de productos:", err);
        setError("Error al cargar los datos. Usando mock data.");
        setProducts(mockProductos);
        setLoading(false);
      }
    };
    getProducts();*/

    // Usando Mock Data temporalmente
    setTimeout(() => {
      setProducts(mockProductos);
      setLoading(false);
    }, 500);
  }, []);

  // --- LÓGICA DE MODAL Y FORMULARIO ---

  // 1. Abre el modal en modo Edición
  const openEditDialog = (product) => {
    setProductToEdit({ ...product }); // Clonamos para evitar modificar el estado directamente
    setDisplayModal(true);
  };

  // 2. Abre el modal en modo Creación
  const newProduct = () => {
    setProductToEdit(EMPTY_PRODUCT); // Usa la plantilla vacía
    setDisplayModal(true);
  };

  // 3. Cierra el modal
  const closeEditDialog = () => {
    setDisplayModal(false);
    setProductToEdit(null);
  };

  // 4. Lógica de Guardado (POST/PUT)
  const handleSaveProduct = async (productData) => {
    setLoading(true);
    closeEditDialog(); // Cerramos el modal

    const isEdit = productData.id != null;

    try {
      if (isEdit) {
        // EDICIÓN (PUT/PATCH)
        // const response = await axios.put(`${API_URL}/${productData.id}`, productData);
        // setProducts(products.map((p) => (p.id === productData.id ? response.data : p)));

        // Simulación de Edición (Usando mock)
        setProducts(
          products.map((p) => (p.id === productData.id ? productData : p))
        );
      } else {
        // CREACIÓN (POST)
        // const response = await axios.post(API_URL, productData);
        // setProducts([...products, response.data]);

        // Simulación de Creación (Usando mock)
        const newId = Math.max(...products.map((p) => p.id), 0) + 1;
        const newProduct = { ...productData, id: newId };
        setProducts([...products, newProduct]);
      }
    } catch (err) {
      console.error("Error al guardar el producto:", err);
      setError("Error al guardar el producto. Intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // 5. Lógica de Eliminación (DELETE)
  const handleDelete = async (product) => {
    let isdeleted = confirm(
      `¿Está seguro de eliminar el producto: ${product.nombre || product.id}?`
    );

    if (isdeleted) {
      setLoading(true);
      try {
        // await axios.delete(`${API_URL}/${product.id}`);
        // Filtramos la lista para quitar el producto eliminado
        setProducts(products.filter((p) => p.id !== product.id));
      } catch (err) {
        console.error("Error al eliminar el producto:", err);
        setError("Error al eliminar el producto. Verifique la conexión.");
      } finally {
        setLoading(false);
      }
    }
  };

  // --- RENDERING ---

  // Columna de Acciones (llama a las funciones de control)
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="p-d-flex p-jc-end">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-1"
          onClick={() => openEditDialog(rowData)} // ⬅️ Edición
          tooltip="Ver Detalles / Editar"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => handleDelete(rowData)} // ⬅️ Eliminación
          tooltip="Eliminar Producto"
        />
      </div>
    );
  };

  const header = (
    <div className="p-d-flex p-jc-between p-ai-center u-margin-bottom-small u-margin-top-small u-bg-white">
      <h2 className="p-m-0">Productos</h2>
      <Button
        label="Nuevo producto"
        className="p-button-outlined p-button-info p-mr-1 p-2 mt-2"
        style={{ borderRadius: "6px" }}
        onClick={newProduct} // ⬅️ Creación
      />
    </div>
  );

  if (error) {
    return (
      <Card
        title="⚠️ Error de Conexión"
        className="p-shadow-3 p-card-danger p-p-4 p-text-center container"
      >
        <p className="p-text-bold">{error}</p>
        <p>Los datos mostrados son simulados.</p>
      </Card>
    );
  }

  return (
    <>
      <Card className="p-shadow-1 p-p-5 u-margin-top-medium u-padding-side-small">
        <DataTable
          value={products}
          header={header}
          dataKey="id"
          loading={loading}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          filterDisplay="row"
          className="tabla-full-width"
          emptyMessage="No se han registrado productos."
        >
          {/* ... Columnas existentes ... */}
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

          <Column
            header="Acciones"
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "10rem" }}
            className="text-center"
          />
        </DataTable>
      </Card>

      {/* ⬅️ Renderizado Condicional del Modal */}
      {productToEdit && (
        <ProductoModal
          isVisible={displayModal}
          productData={productToEdit} // Datos iniciales (vacíos o para edición)
          onHide={closeEditDialog}
          onSave={handleSaveProduct} // Función POST/PUT
        />
      )}
    </>
  );
}

export default Productos;
