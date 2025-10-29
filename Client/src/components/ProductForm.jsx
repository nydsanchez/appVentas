import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// Acepta datos iniciales, la función de envío, y la función de cancelación.
function ProductForm({ initialData, onSubmitForm, onCancel }) {
  const [formData, setFormData] = useState(initialData);

  // Sincroniza el estado interno cuando cambian los initialData (Editar/Nuevo)
  useEffect(() => {
    // Es crucial clonar el objeto y manejar el caso null
    setFormData(initialData ? { ...initialData } : {});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Convertir a número para campos de precio y stock
    if (name === "precio" || name === "stock") {
      newValue = parseFloat(value) || 0;
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función del padre para manejar la lógica POST/PUT
    onSubmitForm(formData);
  };

  // Determinar si es edición para el título del botón
  const isEditing = formData && formData.id;

  return (
    <div className="p-p-4">
      <form
        onSubmit={handleSubmit}
        className="p-fluid p-formgrid p-grid"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <div className="p-field p-col-12">
          <label htmlFor="nombre">Nombre del producto</label>
          <InputText
            id="nombre"
            name="nombre"
            value={formData.nombre || ""}
            onChange={handleChange}
            placeholder="Ej. Laptop"
          />
        </div>

        <div className="p-field p-col-12">
          <label htmlFor="precio">Precio</label>
          <InputText
            id="precio"
            name="precio"
            type="number"
            value={formData.precio || 0}
            onChange={handleChange}
            placeholder="Ej. 1200"
          />
        </div>

        <div className="p-field p-col-12">
          <label htmlFor="stock">Stock</label>
          <InputText
            id="stock"
            name="stock"
            type="number"
            value={formData.stock || 0}
            onChange={handleChange}
            placeholder="Stock disponible"
          />
        </div>

        {/* Agregando el campo de descripción faltante en tu formulario, pero presente en tu DataTable */}
        <div className="p-field p-col-12">
          <label htmlFor="descripcion">Descripción</label>
          <InputText
            id="descripcion"
            name="descripcion"
            value={formData.descripcion || ""}
            onChange={handleChange}
            placeholder="Breve descripción"
          />
        </div>

        <div className="p-field p-col-12 p-d-flex p-jc-end p-mt-4">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            type="button"
            className="p-button-secondary p-mr-2"
            onClick={onCancel} // Llama a la función de cancelación
          />
          <Button
            label={isEditing ? "Guardar Cambios" : "Crear Producto"}
            icon="pi pi-check"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
