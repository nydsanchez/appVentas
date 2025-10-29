import Modal from "react-modal";
import ProductForm from "./ProductForm"; // ⬅️ Importa el formulario

Modal.setAppElement("#root"); // Ajusta al ID de tu contenedor principal

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    borderRadius: "6px",
    maxWidth: "550px",
    width: "90%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const ProductoModal = ({ isVisible, productData, onHide, onSave }) => {
  const isEditing = productData && productData.id;
  const modalTitle = isEditing ? "Editar Producto" : "Crear Nuevo Producto";

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={onHide}
      style={customStyles}
      contentLabel={modalTitle}
    >
      <div className="p-p-3" style={{ borderBottom: "1px solid #ccc" }}>
        <h3 className="p-m-0">{modalTitle}</h3>
      </div>

      {/* Pasa todas las props necesarias al formulario */}
      <ProductForm
        initialData={productData}
        onSubmitForm={onSave}
        onCancel={onHide}
      />
    </Modal>
  );
};

export default ProductoModal;
