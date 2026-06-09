import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* redirect mặc định */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}