import axios from "axios";


const Add = async(data)=>{
   
    try {

       return await axios.post('/add' , data)

        
    } catch (error) {
        console.log(error)
    }

}

export default Add