import axios from "axios";


const Update = async(data , id)=>{


try {

    return await axios.post(`http://localhost:3000/edit/${id}` , data)
    
} catch (error) {
    console.log(error)
}

}

export default Update