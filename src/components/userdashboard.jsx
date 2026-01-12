import { useState } from "react";
import UserDetails from "./userdetails";

function UserDashboard() {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", age: 28, role: "Engineer", address: "123 Main St", email: "alice@example.com" },
        { id: 2, name: "Bob", age: 35, role: "Manager", address: "456 Market St", email: "bob@example.com" },
        { id: 3, name: "Charlie", age: 40, role: "CEO", address: "789 Broadway", email: "charlie@example.com" }
    ]);

    return (
        <div>
            <h1>User Dashboard</h1>
            {users.map(abc => (
                <UserDetails key={abc.id} abc={abc} />
            ))}
        </div>
    );
}

export default UserDashboard;