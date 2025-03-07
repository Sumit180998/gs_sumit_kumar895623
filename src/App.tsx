// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StorePage from "./pages/StorePage";
import SKUPage from "./pages/SKUPage";
import PlanningPage from "./pages/PlanningPage";
import ChartPage from "./pages/ChartPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex h-screen flex-col">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1 p-4">
                      <Routes>
                        {/* <Route path="/" element={<StorePage />} /> */}
                        <Route path="/store" element={<StorePage />} />
                        <Route path="/sku" element={<SKUPage />} />
                        <Route path="/planning" element={<PlanningPage />} />
                        <Route path="/chart" element={<ChartPage />} />
                      </Routes>
                    </div>
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


