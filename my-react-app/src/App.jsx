import { useState, useEffect } from "react";
import CustomForm from "./components/form";
import { Typography, Table } from "antd";

function App() {
  const [users, setUsers] = useState([]);
  const { Title } = Typography;

  //Fetch All Users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "http://localhost/Test/backend/routes/getUsers.php"
        );
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);
  //Table Columns
  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phoneNumber", key: "phoneNumber" },
  ];

  //Renders the app UI
  return (
    <div className="flex flex-col justify-start gap-5">
      <Title>Users</Title>

      {/* Show users available in the database */}

      {users.length > 0 ? (
        <Table
          dataSource={users}
          columns={columns}
          rowKey={(record) => record.id || record.email}
        />
      ) : (
        <p>Loading or no users found.</p>
      )}
      {/* Form to add users to the database */}
      <CustomForm />
    </div>
  );
}

export default App;
