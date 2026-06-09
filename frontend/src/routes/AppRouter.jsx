import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}