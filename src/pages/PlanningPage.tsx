
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {MaterialReactTable} from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import { parseExcelFile } from "../utils/dataParser";
import "../styles/global.css";

interface Store {
  id: number;
  label?: string;
  city: string;
  state: string;
}

const PlanningPage: React.FC = () => {
  const stores: Store[] = useSelector((state: RootState) => state.stores.stores);
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    if (stores.length > 0) {
      setRowData(
        stores.map((store) => ({
          ID: store.id.toString(),
          Label: store.label || "N/A",
          City: store.city,
          State: store.state,
        }))
      );
    }
  }, [stores]);

  const columns: MRT_ColumnDef<any>[] = [
    { accessorKey: "ID", header: "ID" },
    { accessorKey: "Label", header: "Label" },
    { accessorKey: "City", header: "City" },
    { accessorKey: "State", header: "State" },
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const parsedData = await parseExcelFile(file);
      console.log("Parsed Data:", parsedData);
      setRowData(parsedData as any);
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Planning Data</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4" />
      <MaterialReactTable columns={columns} data={rowData} enablePagination enableSorting />
    </div>
  );
};

export default PlanningPage;







