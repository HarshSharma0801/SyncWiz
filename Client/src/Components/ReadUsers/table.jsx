import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Delete from '../../DeleteUser/DeleteApi';

const Layout = (props) => {

  const Navigate = useNavigate()
  const Deleted = async ()=>{
    
    await Delete(props.id);
    console.log(props.id)
    setTimeout(()=>{
      
      Navigate("/Read")

    },1000)

  }


  return (
    <>
    <tr class="text-gray-700">
      <td class="px-4 py-3 border">
        <div class="flex items-center text-sm">
          <div>
            <p class="font-semibold text-black">{props.name}</p>
          </div>
        </div>
      </td>

      <td class="px-4 py-3 text-ms font-semibold border text-gray-600">
        {props.Github}
      </td>

      <td class="px-4 py-3 text-sm border">{props.msg}</td>


      <td class="px-4 py-3 text-sm border">
        <Link to={`/Edit/${props.id}`}>
        <button className="w-24 bg-blued text-black rounded-md hover:bg-blueded" >Edit</button>
        </Link>
      </td>

      <td class="px-4 py-3 text-sm border">
        <button className="w-24 bg-red-500 text-black rounded-md hover:bg-redded" onClick={Deleted}>Delete</button>
      </td>
    </tr>
    </>
    
  );
};
export default Layout;
