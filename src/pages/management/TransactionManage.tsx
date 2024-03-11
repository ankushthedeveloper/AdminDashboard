import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const OrderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "no3ioiff3pjop",
    quantity: 4,
    price: 2000,
  },
];
const TransactionInfo = () => {
  const [order, setorder] = useState<OrderType>({
    name: "Ankush",
    address: "123 white street",
    city: "Banglore",
    country: "India",
    state: "Karnatka",
    pincode: 160222,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    tax: 100,
    total: 5100,
    OrderItems,
    shippingCharges: 0,
    _id: "33r33f4g",
  });

  const {
    tax,
    total,
    _id,
    subtotal,
    status,
    pincode,
    state,
    country,
    city,
    address,
    name,
    shippingCharges,
    discount,
  } = order;

  const processHandler = () => {
    setorder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="ProductManage">
        <section>
          <h2>Order Items</h2>

          {order.OrderItems.map((i) => (
            <ProductCard
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              photo={i.photo}
              _id={i._id}
            />
          ))}
        </section>
        <article className="shipping-info-card tcard" style={{backgroundColor:"whitesmoke" }}>
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name:{name}</p>
          <p>Address:{`${address} ,${city},${state},${country},${pincode}`}</p>

          <h5>Amount Info</h5>
          <p>subtotal: {subtotal} Rs</p>
          <p>Shipping Charges: {shippingCharges} Rs</p>
          <p>Tax: {tax} Rs</p>
          <p>Discount: {discount} Rs</p>
          <p>Total: {total} Rs</p>

          <h5>Status Info</h5>
          <p>
            Status:
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button className="shippingBtn" onClick={processHandler}>Process Order</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="productTransactionCard">
      <img src={photo} alt="Product" />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        {" "}
        {price}X{quantity}=${price * quantity} Rs
      </span>
    </div>
  );
};
export default TransactionInfo;
