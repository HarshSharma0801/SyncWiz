import axios from "axios";


const ReadUsers = async()=>{
   
    try {

       return await axios.get('/read')

        
    } catch (error) {
        console.log(error)
    }

}

export default ReadUsers