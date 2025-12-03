import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./UserList";
import UserDetails from "./UserDetails";
import NewUserForm from "./UserForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/new" element={<NewUserForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}
