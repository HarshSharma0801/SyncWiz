import ReadUsers from "./ReadApi";
import React , {useState , useEffect ,useCallback} from "react";
import Layout from "./table";

const GetUsers = ()=>{

  const [User,SetUsers] = useState([])

  useEffect(()=>{
    console.log("Effect is running");
    Users()
   
   },[])

    const Users =   useCallback(async ()=>{
      const data = await ReadUsers() 
      SetUsers(data.data) 
  },[User]) 




   

    return(
            <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <h1 className="p-5 text-green-500">Refresh After Updating or Deleting</h1>

          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-black-900 bg-gray-100 uppercase border-b border-gray-600">
                  {/* <th class="px-4 py-3">ID</th> */}
                  <th class="px-4 py-3">Name</th>
                  <th class="px-4 py-3">GitHub Username</th>
                  <th class="px-4 py-3">Your Message</th>

                </tr>
              </thead>
              <tbody class="bg-white">

                {User &&
                  User.map((data) => (
                   <Layout key={data.id}  name={data.name}  Github={data.githubUsername} msg={data.YourQuote} id={data._id} />
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