import TopProductsChart from "./TopProductsChart";
import StatCard from "./StatCard";

function DataVentas({ item }) {
  if (!item) return null;

  const { topProductos = [], clienteTop = {}, ingresoUltimoMes = 0 } = item;

  return (
    <div className="p-p-2 mt-6">
      <h2 className="p-col-12 p-text-center m-8">Resumen de Ventas</h2>

      <div className="data-ventas-grid">
        <div className="chart-col p-p-2">
          <TopProductsChart topProductos={topProductos} />
        </div>

        <div className="stats-col">
          <div className="stat-item ">
            <StatCard title="Cliente">
              <h3 className="p-text-hg p-text-truncate pt-2">
                {clienteTop?.clienteNombre || "N/A"}
              </h3>
              <p className="p-text-hg u-center-text">
                {clienteTop?.totalIngresos || "N/A"}
              </p>

              <p className="p-text-h u-center-text">total de compras</p>
            </StatCard>
          </div>
          <div className="stat-item ">
            <StatCard title="Mes">
              <h3 className="p-text-hg">${ingresoUltimoMes.toFixed(0)}</h3>
              <p className="p-text-h p-m-0">Ingreso total del mes</p>
            </StatCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataVentas;
