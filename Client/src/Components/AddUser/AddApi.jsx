import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Add = async(data)=>{
    // const Navigate = useNavigate();

    try {

     await axios.post('/add' , data).then(res=>{
        if(res){
            console.log(res);

            return(res);
            // Navigate("/Read")
        }
     })

        
    } catch (error) {
        console.log(error)
    }

}

export default Add