import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const value=useSelector((state:RootState)=>state.auth.isAuthenticated)


  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/store">
        <img src={logo} alt="G Synergy Logo" className="h-10" />
      </Link>
      <h1 className="text-xl font-bold">G Synergy Dashboard</h1>
      {value? <button
        className="bg-red-500 px-4 py-2 rounded"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>:<div></div>}
     
    </header>
  );
};

export default Header;
