import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DashBoard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
