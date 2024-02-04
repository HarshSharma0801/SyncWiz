
import HomePage from "./Components/Pages/Home";
import MatchAllRoute from "./Components/Pages/MatchAllRoute";
import { Route, Routes } from "react-router-dom";
import AddUserForm from "./Components/AddUser/Add";
import GetUsers from "./Components/ReadUsers/Read";
import Navbar from "./Components/Pages/Navbar";
import Edit from "./Components/EditUsers/Edit";
import axios from "axios";
function App() {


  // axios.defaults.baseURL = 'https://syncwiz-backend.onrender.com';
  axios.defaults.baseURL = 'http://localhost:5000';

  return (
    <>
    <Routes>
     
      <Route path="/" element={<HomePage/>} />
      
    </Routes>

    <Navbar/>

    <Routes>
 
    <Route path="/AddUser" element={<AddUserForm/>} />
      <Route path="/Read" element={<GetUsers/>} />
      <Route path="/Edit/:id" element={<Edit/>} />

     
      

      <Route path="*" element={<MatchAllRoute />} />
    </Routes>
  
    





      
      
    </>
  );
}

export default App;
