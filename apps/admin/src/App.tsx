import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import CreateVariant from "./pages/CreateVariant";
import CreateCategory from "./pages/CreateCategory";
import Categories from "./pages/Categories";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}> 
          <Route path="/" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
          <Route path="/product/new" element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          } />
          <Route path="/variant/new" element={
            <ProtectedRoute>
              <CreateVariant />
            </ProtectedRoute>
          } />
          <Route path="/category/new" element={
            <ProtectedRoute>
              <CreateCategory />
            </ProtectedRoute>
          } />
          <Route path="/categories" element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
