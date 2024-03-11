import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userimg from "../assets/userfinal.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import { PieChart } from "../components/Charts";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for Data, Users, docs .." />
          <FaRegBell />
          <img src={userimg} alt="" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            heading="Revenue"
            percents={60}
            amount={true}
            value={340000}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            heading="Users"
            percents={-10}
            value={5000}
            color="rgb(0 198 202)"
          />
          <WidgetItem
            heading="Transactions"
            percents={80}
            value={23000}
            color="grey"
          />
          <WidgetItem
            heading="Revenue"
            percents={30}
            value={1000}
            color="purple"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[200, 282, 89, 766, 123, 456, 645]}
              data_2={[260, 182, 892, 64, 233, 899, 880]}
              title_1="Revenue"
              title_2="Transaction"
              bg_1="rgb(0,115,255)"
              bg_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="dashboardCategories">
            <h2>Inventory </h2>
            {data.categories.map((c) => (
              <CategoryItem
                key={c.heading}
                heading={c.heading}
                value={c.value}
                color={`hsl(${c.value * 4}, ${c.value}%, 50%)`}
              />
            ))}
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <PieChart
              labels={["female", "male"]}
              data={[43, 23]}
              backgroundColor={["hsl(342,56%,82%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            
            />
            <BiMaleFemale />
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface widgetProps {
  heading: string;
  value: number;
  percents: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  percents,
  color,
  amount = false,
  value,
}: widgetProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percents > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percents}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percents}%{" "}
        </span>
      )}
      {/* color:{color} */}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
            ${color} ${(Math.abs(percents) / 100) * 360}deg ,
            rgba(255,255,255) 0)`,
      }}
    >
      <span style={{ color: "black" }}>{percents}% </span>
    </div>
  </article>
);

interface categoryItemProps {
  heading: string;
  value: number;
  color: string;
}
const CategoryItem = ({ heading, value, color }: categoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>

    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
      <span>{value}%</span>
    </div>
  </div>
);
export default Dashboard;
