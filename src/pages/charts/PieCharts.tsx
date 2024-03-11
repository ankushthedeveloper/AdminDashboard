import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart} from "../../components/Charts";
import {categories} from'../../assets/data.json';

const months =["January","February","March","April","May","June","July","August","September","October","November","December"];
const PieCharts = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="chartContainer">

      <section>
      <h1>Pie and Doughnut Charts</h1>
        <div className="pieChart">
     
          <PieChart labels={["Processing", "Shipped", "Delivered"]} data={[12,9,13]}
          backgroundColor={categories.map(i=>`hsl(${i.value*6},${i.value}%,80%)`)}
          offset={20}
          //[0,0,50]
          />
        </div>
        <h2>Order and Fullfillment Ratio</h2>
      </section>

      <section>
        <div className="pieChart">
          <DoughnutChart labels={categories.map(i=>i.heading)}
           data={categories.map(i=>i.value)}
           backgroundColor={categories.map(i=>`hsl(${i.value*7},${i.value}%,80%)`)}
           cutout={"50%"}
           legends={false}
           offset={20}/>
        </div>
        <h2>Product Categories Ratio</h2> 
      </section>

      
      <section>
        <div className="pieChart">
          <DoughnutChart labels={["In Stock", "Out of Stock"]}
           data={[20,40]}
           backgroundColor={categories.map(i=>`hsl(${i.value*7},${i.value}%,80%)`)}
            offset={20}
           legends={false}
          cutout={"70%"}/>
        </div>
        <h2>Stock Availability</h2> 
      </section>

      <section>
          <div className="pieChart">
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={30}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div className="pieChart">
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={30}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

        <section>
          <div className="pieChart">
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
               legends
              offset={30}
            />
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default PieCharts;
