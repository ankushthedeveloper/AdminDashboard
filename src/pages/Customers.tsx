import  { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Column } from 'react-table'
import TableHoc from '../components/TableHoc';
import { FaTrash } from 'react-icons/fa';


interface Datatype{
  avatar: ReactElement,
  name: string,
  email: string,
  gender: string,
  role: string,

 
  action:ReactElement
}
const columns:Column<Datatype>[]=[{
  Header:"Avatar",
  accessor:"avatar"

},
{
  Header:"Name",
  accessor:"name"
}
,
{
  Header:"Email",
  accessor:"email"
}
,
{
  Header:"Gender",
  accessor:"gender"
},
{
  Header:"Role",
  accessor:"role"
},
{
  Header:"Action",
  accessor:"action"
}
];


  const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: Array<Datatype> = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash/>
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash/>
      </button>
    ),
  },
];

const Customers = () => {

  const [data]=useState<Datatype[]>(arr);
  const Table=useCallback(TableHoc<Datatype>
    (columns ,data,"CustomerBox","Customers",true),[]);
  return (
    <div className="AdminContainer">
    <AdminSidebar/>
    <main>
      
      {Table()}

    </main>
</div>
  )
}

export default Customers