const Layout = (props) => {
  return (
    <tr class="text-gray-700">
      <td class="px-4 py-3 border">
        <div class="flex items-center text-sm">
          <div>
            <p class="font-semibold text-black">{props.name}</p>
          </div>
        </div>
      </td>

      <td class="px-4 py-3 text-ms font-semibold border text-black">
        {props.email}
      </td>

      <td class="px-4 py-3 text-sm border">{props.phone}</td>

      <td class="px-4 py-3 text-sm border">{props.description}</td>

      <td class="px-4 py-3 text-sm border">
        <button className="w-24 bg-blued text-black rounded-md hover:bg-blueded">Edit</button>
      </td>
      <td class="px-4 py-3 text-sm border">
        <button className="w-24 bg-red-500 text-black rounded-md hover:bg-redded">Delete</button>
      </td>
    </tr>
  );
};
export default Layout;
