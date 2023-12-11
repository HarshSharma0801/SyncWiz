import axios from "axios";


const Delete = async (id)=>{

   const sentdata = {
    id:id
   }
    try {

     await axios.post("/delete" , sentdata)


    } catch (error) {
        console.log(error)
    }
}

export default Delete