import { Card } from "primereact/card";
//import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TopProductsChart({ topProductos = [] }) {
  // 1. PREPARACIÓN DE DATOS PARA EL GRÁFICO
  const chartData = {
    labels: topProductos.map((prod) => prod.productoNombre.split(" ")[0]),
    datasets: [
      {
        label: "Unidades Vendidas",
        data: topProductos.map((prod) => prod.totalVendido),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Top 3 Productos Vendidos" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Cantidad" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <Card className="shadow-2 pt-4" style={{ height: "100%" }}>
      {topProductos.length > 0 ? (
        <div
          style={{ height: "30rem", width: "100%" }}
          className="u-margin-top-medium "
        >
          <Chart
            type="bar"
            data={chartData}
            options={{
              ...chartOptions,
              maintainAspectRatio: false,
            }}
          />
        </div>
      ) : (
        <p className="p-text-center">No hay datos de ventas para el gráfico.</p>
      )}
    </Card>
  );
}

export default TopProductsChart;
