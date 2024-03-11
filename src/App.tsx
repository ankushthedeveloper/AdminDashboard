import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/Loader";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages//management/NewProduct"));
const ProductManage = lazy(() => import("./pages/management/ProductManage"));
const TransactionInfo = lazy(() => import("./pages/management/TransactionManage"));


const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch")) ;
const Coupon = lazy(() => import("./pages/apps/Coupon")) ;
const Toss = lazy(() => import("./pages/apps/Toss")) ;


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* {Charts} */}

          <Route path="/admin/charts/bar" element={<BarCharts />} />
          <Route path="/admin/charts/pie" element={<PieCharts />} />
          <Route path="/admin/charts/line" element={<LineCharts />} />

          {/* {Apps} */}

          <Route path="/admin/apps/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/apps/coupon" element={<Coupon />} />
          <Route path="/admin/apps/toss" element={<Toss />} />

          {/* {Management-Routes} */}
          <Route path="/admin/products/new-product" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManage />} />
          <Route path="/admin/transaction/:id" element={<TransactionInfo />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
