import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Transactions from "../pages/Transactions"
import Groups from "../pages/Groups"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="groups" element={<Groups />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}