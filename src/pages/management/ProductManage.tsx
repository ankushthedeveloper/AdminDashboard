
import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManage = () => {
    
  const [name,setname] =useState<string>("Puma Shoes")
    const [price,setprice] =useState<number>(6000)
    const [stock,setstock] =useState<number>(3000)
    const[photo,setphoto] =useState<string>(img)

    const [nameUpdate,setnameUpdate] =useState<string>("Puma Shoes")
    const [priceUpdate,setpriceUpdate] =useState<number>(6000)
    const [stockUpdate,setstockUpdate] =useState<number>(3000)
    const[photoUpdate,setphotoUpdate] =useState<string>(img)

    const changeImageHandler=(e:ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
  const file:File |undefined=e.target.files?.[0];
  const reader:FileReader=new FileReader();

  if(file){
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      if(typeof reader.result==="string") setphotoUpdate(reader.result);
    }
  }
    }
    const SubmitHandler=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setphoto(photoUpdate);
      setprice(priceUpdate);
      setstock(stockUpdate);
      setname(nameUpdate);
    }
    
    
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="ProductManage">
        <section>
        <strong>ID_367eryg78d7</strong>
        <img src={photo} alt="Product Image" />
        <p>{name}</p>
        <p>$${price}</p>
        {stock>0?<span className="green">{stock} Available</span>:<span className="red">Not Available</span>}
        </section>
     <article>
        <form action="" onSubmit={SubmitHandler}>
            <h2>Manage Product </h2>
            <div>
           <label>Name</label>
           <input type="text" 
           required
           placeholder="Name" 
           value={nameUpdate}
           onChange={(e)=>setnameUpdate(e.target.value)}/>
           </div>

           <div>
           <label>Price</label>
           <input type="number" 
           required
           placeholder="Price" 
           value={priceUpdate}
           onChange={(e)=>setpriceUpdate(Number(e.target.value))}/>
           </div>

           <div>
           <label>Stock</label>
           <input type="number" 
           required
           placeholder="Stock" 
           value={stockUpdate}
           onChange={(e)=>setstockUpdate(Number(e.target.value))}/>
           </div>

           <div>
           <label >Photo</label>
           <input type="file" 
           required
           placeholder="Product Image" 
           
           onChange={changeImageHandler}/>
           </div> 
           {
            photo? <img src={photoUpdate} alt="New Product Image" /> : null
           }
           <button type="submit" >Update Product</button>
        </form>
     </article>

      </main>
    </div>
  );
};



export default ProductManage;