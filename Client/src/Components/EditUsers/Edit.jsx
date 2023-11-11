import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import getUser from "./EditApi";
import Update from "./UpdateApi";

const Edit =()=>{

    const [userData, setUserData] = useState({

      name: '',
    githubUsername: '',
    YourQuote: '',
      });


    const [info,Setinfo] = useState({});

    const Navigate = useNavigate();

    const {id} = useParams();


  useEffect(()=>{
   GetUsers();
  },[])
  

  const GetUsers = async ()=>{
    const res = await getUser(id)
    Setinfo(res.data);
  } 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(userData);
        Update(userData , id) ;
      
    
    
        setUserData({
          name: '',
          githubUsername: '',
          YourQuote: '',
        });
        setTimeout(()=>{
          Navigate("/Read")

        },1000)
      };

   useEffect(()=>{
    setUserData(info);

   },[info])




     

return(

    <div className="max-w-md mx-auto mt-8">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={ userData.name}
          onChange={handleChange}
          required
        />
      </div>
       
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        GitHub Username

        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Github"
            type="text"
            placeholder="GitHub Username"
            name="githubUsername"
            value={userData.githubUsername}
            onChange={handleChange}
            required
          />
      </div>
   
   
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Quote
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quote"
            type="text"
            placeholder="Your Quote"
            name="YourQuote"
            value={userData.YourQuote}
            onChange={handleChange}
            required
          />
      </div>
  
 
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" 
        >
          Edit User
        </button>
      </div>
    </form>
  </div>
)
}

export default Edit