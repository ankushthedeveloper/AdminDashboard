import { Column } from 'react-table';
import TableHoc from './TableHoc';


interface DataType{
    id:string,
    amount:number,
    discount:number,
    quantity:number,
    status:string
} 


const columns:Column<DataType>[]=[
    {
        Header: "Id",
        accessor: "id",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Status",
        accessor: "status",
    }
]

// so TableHoc is a function which returns a JsX , so we need to call the function 
const DashboardTable = ({data=[]}:{data:DataType[]}) => {
  return TableHoc<DataType>(columns,
    data,
   "TransactionBox",
   "Top Transactions")()
  
}

export default DashboardTable