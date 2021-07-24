import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const DUMMY_USERS = [
  {
    name: "Ai",
    age: 31,
    id: "e1",
  },
  {
    name: "Kevin",
    age: 35,
    id: "e2",
  },
  {
    name: "Gavin",
    age: 37,
    id: "e3",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (userFromAddUser) => {
    setUsers((prevUsers) => {
      return [userFromAddUser, ...prevUsers];
    });
  };

  return (
    <div>
      <h1>VIP List</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
