
import LoginPage from "./Components/Login/Login";
import RegisterPage from "./Components/Login/Register";
import HomePage from "./Components/Pages/Home";
import MatchAllRoute from "./Components/Pages/MatchAllRoute";
import { Route, Routes } from "react-router-dom";
import AddUserForm from "./Components/AddUser/Add";
import GetUsers from "./Components/ReadUsers/Read";
import Navbar from "./Components/Pages/Navbar";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<HomePage/>} />
      
    </Routes>

    <Navbar/>

    <Routes>
 
    <Route path="/AddUser" element={<AddUserForm/>} />
      <Route path="/Read" element={<GetUsers/>} />
     
      

      <Route path="*" element={<MatchAllRoute />} />
    </Routes>
  
    





      
      
    </>
  );
}

export default App;
