import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addSKU, removeSKU } from "../redux/skuSlice";
import {MaterialReactTable} from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const SKUPage: React.FC = () => {
  const skus = useSelector((state: RootState) => state.skus.skus);
  const dispatch = useDispatch();

  const columns: MRT_ColumnDef<any>[] = [
    { accessorKey: "id", header: "ID", size: 80 },
    { accessorKey: "name", header: "SKU Name" },
    { accessorKey: "price", header: "Price", Cell: ({ cell }) => `$${cell.getValue<number>()}` },
    { accessorKey: "cost", header: "Cost", Cell: ({ cell }) => `$${cell.getValue<number>()}` },
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }) => (
        <IconButton color="error" onClick={() => dispatch(removeSKU(row.original.id))}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">SKU Management</h2>
      <MaterialReactTable columns={columns} data={skus} enablePagination enableSorting />
      <button
        className="bg-orange-500 text-white px-4 py-2 mt-4 flex items-center"
        onClick={() => dispatch(addSKU({ id: skus.length + 1, name: "New SKU", price: 100, cost: 50 }))}
      >
        <AddIcon className="mr-2" />
        Add SKU
      </button>
    </div>
  );
};

export default SKUPage;


