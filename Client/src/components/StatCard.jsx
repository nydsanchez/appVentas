import { Card } from "primereact/card";

function StatCard({ children }) {
  return (
    <Card className="shadow-2 p-text-center u-pm" style={{ height: "100%" }}>
      {children}
    </Card>
  );
}

export default StatCard;
