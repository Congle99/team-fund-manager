import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;