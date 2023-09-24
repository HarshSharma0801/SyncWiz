import axios from "axios"


const getUser = async (id)=>{
  
try {

    return await axios.get(`http://localhost:3000/edit/${id}`)
    

} catch (error) {
    console.log(error)
}
 

}

export default getUser