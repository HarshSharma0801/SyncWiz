import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import getUser from "./EditApi";
import Update from "./UpdateApi";

const Edit =()=>{

    const [userData, setUserData] = useState({

        name: '' ,
        phone: '' ,
        email: '' ,
        description: '' 

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
        Navigate("/Read")
    
    
        setUserData({
          name: '',
          phone: '',
          email: '',
          description: '',
        });
      };

   useEffect(()=>{
    setUserData(info);

   },[info])


   console.log(userData)


     

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
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
      </div>
   
   
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
          name="description"
          value={userData.description}
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