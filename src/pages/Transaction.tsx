import  { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Column } from 'react-table';
import TableHoc from '../components/TableHoc';
import { Link } from 'react-router-dom';


interface Datatype {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const arr: Array<Datatype> = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    status: <span className="red">Processing</span>,
    quantity: 3,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },

  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const columns:Column<Datatype>[]=[{
  Header:"User",
  accessor:"user"
},
{
  Header:"Amount",
  accessor:"amount"
},
{
  Header:"Discount",
  accessor:"discount"
},
{
  Header:"Status",
  accessor:"status"
},
{
  Header:"Action",
  accessor:"action"
}]
const Transaction = () => {
  const [data]=useState<Datatype[]>(arr);
  const Table=useCallback(TableHoc<Datatype>
    (columns ,data,"transactionBox","Transactions",true),[]);
  return (
    <div className="AdminContainer">
        <AdminSidebar/>
        <main>
          {Table()}
        </main>
    </div>
  )
}

export default Transaction