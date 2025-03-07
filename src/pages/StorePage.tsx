
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addStore, removeStore } from "../redux/storeSlice";
import {MaterialReactTable} from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface Store {
  id: number;
  name: string;
  city: string;
  state: string;
}

const StorePage: React.FC = () => {
  const stores = useSelector((state: RootState) => state.stores.stores);
  const dispatch = useDispatch();

  const columns: MRT_ColumnDef<any>[] = [
    { accessorKey: "id", header: "ID", size: 80 },
    { accessorKey: "name", header: "Store Name" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "state", header: "State" },
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }) => (
        <IconButton color="error" onClick={() => dispatch(removeStore(row.original.id))}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Store Management</h2>
      <MaterialReactTable columns={columns} data={stores} enablePagination enableSorting />
      <button
        className="bg-orange-500 text-white px-4 py-2 mt-4 flex items-center"
        onClick={() => dispatch(addStore({ id: stores.length + 1, name: "New Store", city: "Unknown", state: "Unknown" }))}
      >
        <AddIcon className="mr-2" />
        Add Store
      </button>
    </div>
  );
};

export default StorePage;
