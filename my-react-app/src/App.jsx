import { useState, useEffect } from "react";
import CustomForm from "./components/form";
import { Typography, List } from "antd";

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

  //Renders the app UI
  return (
    <div className="flex flex-col justify-start gap-5">
      <Title>Users</Title>

      {/* Show users available in the database */}

      {users.length > 0 ? (
        <List
          bordered
          dataSource={users}
          renderItem={(user) => (
            <List.Item>
              {user.firstName} {user.lastName}
            </List.Item>
          )}
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
