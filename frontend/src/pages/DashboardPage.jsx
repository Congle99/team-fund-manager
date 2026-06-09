import MainLayout from "../layouts/MainLayout";

function DashboardPage() {
  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>Total Fund</h3>
          <p>0 VND</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h3>Members</h3>
          <p>0</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;