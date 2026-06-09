import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function MainLayout() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <header className="h-14 bg-white shadow flex items-center px-4">
          <h1 className="font-semibold">Dashboard</h1>
        </header>

        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>

      </div>
    </div>
  )
}