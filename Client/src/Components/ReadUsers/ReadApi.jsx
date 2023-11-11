import axios from "axios";


const ReadUsers = async()=>{
   
    try {

       return await axios.get('http://localhost:3000/read')

        
    } catch (error) {
        console.log(error)
    }

}

export default ReadUsers