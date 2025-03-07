import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ChartPage: React.FC = () => {
  const stores = useSelector((state: RootState) => state.stores.stores);

  const data = stores.map((store) => ({
    name: store.name,
    Sales: Math.floor(Math.random() * 10000),
    Profit: Math.floor(Math.random() * 5000),
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sales & Profit Chart</h2>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" />
        <Bar dataKey="Profit" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ChartPage;
