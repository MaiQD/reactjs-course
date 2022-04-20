import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
const defaultUser = [
  {name:"Mike", id: "1"},
  {name:"Josh", id: "2"},
  {name:"Caleb", id: "3"},
  {name:"Henry", id: "4"},
]
function App() {
  const [users, setUsers] = useState(defaultUser);
  const addUserHandler = (user)=>{
    setUsers((pre)=> {
      return [user, ...pre];
    })
  }
  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UserList items={users}/>
    </div>
  );
}

export default App;
