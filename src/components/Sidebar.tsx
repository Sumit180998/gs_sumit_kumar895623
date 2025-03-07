
import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">G Synergy</h1>
      <ul>
        <li><Link to="/store" className="block py-2">Store</Link></li>
        <li><Link to="/sku" className="block py-2">SKU</Link></li>
        <li><Link to="/planning" className="block py-2">Planning</Link></li>
        <li><Link to="/chart" className="block py-2">Charts</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
