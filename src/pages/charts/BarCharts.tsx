import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months =["January","February","March","April","May","June","July","August","September","October","November","December"];
const BarCharts = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        
        <section>
          <BarChart
            data_1={[400, 660, 299, 789, 678, 777]}
            data_2={[556, 667, 899, 565, 454, 456]}
            title_1="Products"
            title_2="Users"
            bg_1={`hsl(260,50%,30%)`}
            bg_2={`hsl(360,90%,90%)`}
          />
          
          <h2>Top Selling Products and Top Customers</h2>
  
        </section>
        <section>
         <div className="orderChart">
         <BarChart
          horizontal={true}
            data_1={[400, 660, 299, 789, 678, 777,787,364,488,4378,899,3833]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bg_1={`hsl(180,40%,50%)`}
            bg_2={``}
            labels={months}
          />
         </div>
         
           <h2>Orders Throughout the Year</h2>
           
        </section>
       
      </main>
    </div>
  );
};

export default BarCharts;
