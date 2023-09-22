import ReadUsers from "./ReadApi";
import React , {useState , useEffect} from "react";
import Layout from "./table";

const GetUsers = ()=>{

    const [User,SetUsers] = useState([])

    useEffect(()=>{
     Users()
    },[User])
  
    const Users = async ()=>{
        const data = await ReadUsers() 
        SetUsers(data.data)
    }

    return(
            <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-black-900 bg-gray-100 uppercase border-b border-gray-600">
                  {/* <th class="px-4 py-3">ID</th> */}
                  <th class="px-4 py-3">Name</th>
                  <th class="px-4 py-3">email</th>
                  <th class="px-4 py-3">phone</th>
                  <th class="px-4 py-3">description</th>

                </tr>
              </thead>
              <tbody class="bg-white">

                {User &&
                  User.map((data) => (
                   <Layout key={data.id}  name={data.name}  email={data.email} phone={data.phone} description={data.description} />
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </section>
    )

}

export default GetUsers