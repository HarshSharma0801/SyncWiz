import React , {useState , useEffect ,useCallback} from "react";
import Layout from "./table";
import axios from "axios";
const GetUsers = ()=>{

  const [User,SetUsers] = useState([])
  const ReadUsers = async()=>{
   
    try {

       return await axios.get('/read').then(res=>{
        const isJSON = (str) => {
          try {
            JSON.parse(str);
            return true;
          } catch (e) {
            return false;
          }
        };
        if(res){
          console.log(res.data.data)
          if(isJSON(res.data.data)){
            
            const main = JSON.parse(res.data.data).map(rt=>{
              return {...rt , _id:rt._id.$oid        }
            })
            SetUsers(main) 
          }
          else{
            SetUsers(res.data.data) 

          }
        }
       })

        
    } catch (error) {
        console.log(error)
    }

}
  useEffect(()=>{
    console.log("Effect is running");
    ReadUsers()
   
   },[])





   

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