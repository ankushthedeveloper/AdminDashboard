
import { Link, useLocation, Location } from "react-router-dom";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside style={{backgroundColor:location.pathname.includes('/admin/apps/stopwatch')?"aquamarine":"white"}}>
      <h2>uSpace.🛍️</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  );
};

const DivOne=({location}:{location:Location})=>(
    <div>
        <h5>Dashboard</h5>
        <hr />
        <ul>
          <Li
            url="/admin/dashboard"
            Icon={RiDashboardFill}
            text="Dashboard"
            location={location}
          />  
          <Li
            url="/admin/products"
            Icon={RiShoppingBag3Fill}
            text="Products"
            location={location}
            />
                 <Li
            url="/admin/customers"
            Icon={IoIosPeople}
            text="Customers"
            location={location}
            />
            <Li
            url="/admin/transaction"
            Icon={AiFillFileText}
            text="Transactions"
            location={location}/>
        </ul>
      </div>
)

const DivTwo=({location}:{location:Location})=>( <div>
    <h5>Charts</h5>
    <hr />
    <ul>
      <Li
        url="/admin/charts/bar"
        Icon={FaChartBar}
        text="Bar"
        location={location}
      />  
      <Li
        url="/admin/charts/pie"
        Icon={FaChartPie}
        text="Pie"
        location={location}
        />
        <Li
        url="/admin/charts/line"
        Icon={FaChartLine}
        text="Line"
        location={location}/>
    </ul>
  </div>)

const DivThree=({location}:{location:Location})=>( <div>
    <h5>Apps</h5>
    <hr />
    <ul>
      <Li
        url="/admin/apps/stopwatch"
        Icon={FaStopwatch}
        text="Stopwatch"
        location={location}
      />  
      <Li
        url="/admin/apps/toss"
        Icon={FaGamepad}
        text="Toss"
        location={location}
        />
        <Li
        url="/admin/apps/coupon"
        Icon={RiCoupon3Fill}
        text="Coupon"
        location={location}/>
    </ul>
  </div>)
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      // backgroundColor: location.pathname.includes(url)
      //   ? "rgba(0,115,255,0.1":location.pathname.includes
      //   ('/admin/apps/stopwatch')? "rgb(44 104 255 / 67%)":"white",
    }}
  >
    <Link
      to={url}
      style={{ color: location.pathname.includes(url) ? "rgb(0,115,255)" : "" }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
export default AdminSidebar;
