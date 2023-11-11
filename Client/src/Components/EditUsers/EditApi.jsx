import axios from "axios"


const getUser = async (id)=>{
  
try {

    return await axios.get(`/edit/${id}`)
    

} catch (error) {
    console.log(error)
}
 

}

export default getUser