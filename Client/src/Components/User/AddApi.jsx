import axios from "axios";

const Url = '';

const Add = async(data)=>{
   
    try {

       return await axios.post('http://localhost:3000/add' , data)

        
    } catch (error) {
        console.log(error)
    }

}

export default Add