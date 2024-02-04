import axios from "axios";


const Update = async(data , id)=>{


try {
      data._id = id ;
    return await axios.post(`/edit/${id}` , data).then(res=>{
        if(res){
            console.log(res.data)
        }
    })
    
} catch (error) {
    console.log(error)
}

}

export default Update