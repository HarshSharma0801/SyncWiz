import axios from "axios";


const Delete = async (id)=>{

   const sentdata = {
    id:id
   }
    try {
        console.log(sentdata)

     await axios.post("http://localhost:3000/delete" , sentdata)


    } catch (error) {
        console.log(error)
    }
}

export default Delete