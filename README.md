# App Ventas

> **Versión 1.0 — Frontend con Vite-React-PrimeReact**  
Este repositorio contiene el código del Frontend para el Módulo de Ventas por Clientes.
El frontend está desarrollado con React y utiliza PrimeReact y PrimeFlex para los componentes y estilos.

---


## 🛠️ Tecnologías utilizadas (Frontend)

El proyecto utiliza las siguientes dependencias clave:

| Dependencia | Uso |
| :--- | :--- |
| **React** | Biblioteca principal para la interfaz de usuario. |
| **PrimeReact & PrimeFlex** | Componentes UI y utilidades de estilo. |
| **Axios** | Cliente HTTP para el consumo de la API REST del backend. |
| **react-router-dom** | Manejo de rutas y navegación. |
| **chart.js, react-chartjs-2, chartjs-plugin-datalabels** | Utilizado para la visualización de datos en el Dashboard (Módulo de Ventas). |
| **react-modal** | Componente para la gestión de modales (formularios de CRUD). |

---

## ⚠️ Estado del Proyecto (Frontend - 75% de Avance)
El desarrollo del frontend se encuentra en un 75% de avance. La integración con el Backend (Spring Boot) está configurada a través de Axios, pero actualmente los datos se obtienen de mocks locales mientras finaliza el desarrollo del backend.

### Módulos Implementados (con datos mock)
- Módulo de Productos (CRUD): Implementado el listado, creación, edición y eliminación de productos, consumiendo datos mock. Se utilizan formularios para crear y actualizar datos.
- Listado de Clientes: Implementado el módulo para listar clientes.
- Módulo de Ventas (Dashboard): Presentación de información clave de manera amigable, utilizando chart.js para visualización:
  - 3 productos más vendidos.
  - Cliente que generó el mayor ingreso.
  - Ingreso total generado en el último mes.

### 🚧 Tareas Pendientes y Mejoras

- Integración Real con Backend: Reemplazar los mocks de datos por el consumo real de la API REST con operaciones CRUD  una vez que el backend esté finalizado.
- Estilización/Responsividad: Mejorar la adaptación a diferentes dispositivos (no es 100% responsive) y perfeccionar la estética y estilización de los formularios en los modales.
- Roles y Autenticación: Implementar la lógica de Inicio de Sesión para probar y aplicar los roles a nivel de frontend (Administrador con acceso total y Operador con acceso solo al CRUD de Productos ).
- Funcionalidad de Exportación de datos.
- Posiblemente una Bitácora de cambios  (sujeta a implementación en el backend)

## 💻 Ejecución del Frontend (React)
1. Prerrequisitos
Asegúrate de tener instalado Node.js y npm (o yarn).

2. Instalación de Dependencias
Navega a la carpeta del Client e instala las dependencias:

```bash
npm install
```
3. Ejecución
Inicia el servidor de desarrollo de React:
```
npm run dev
```
---

## 🚀 **Demo en vivo**
🔗 [Ver sitio publicado en render](https://appventas.onrender.com)

