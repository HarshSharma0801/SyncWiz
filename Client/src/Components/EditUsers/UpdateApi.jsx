import axios from "axios";


const Update = async(data , id)=>{


try {

    return await axios.post(`/edit/${id}` , data)
    
} catch (error) {
    console.log(error)
}

}

export default Update