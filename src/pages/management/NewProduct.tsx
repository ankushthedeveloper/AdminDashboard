
import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
    const [name,setname] =useState<string>("")
    const [price,setprice] =useState<number>()
    const [stock,setstock] =useState<number>()
    const[photo,setphoto] =useState<string>()
    const changeImageHandler=(e:ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
  const file:File |undefined=e.target.files?.[0];
  const reader:FileReader=new FileReader();

  if(file){
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      if(typeof reader.result==="string") setphoto(reader.result);
    }
  }
    }
  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="ProductManage">
     <article>
        <form action="">
            <h2>New Product</h2>
            <div>
           <label >Name</label>
           <input type="text" 
           required
           placeholder="Name" 
           value={name}
           onChange={(e)=>setname(e.target.value)}/>
           </div>

           <div>
           <label >Price</label>
           <input type="number" 
           required
           placeholder="Price" 
           value={price}
           onChange={(e)=>setprice(Number(e.target.value))}/>
           </div>

           <div>
           <label >Stock</label>
           <input type="number" 
           required
           placeholder="Stock" 
           value={stock}
           onChange={(e)=>setstock(Number(e.target.value))}/>
           </div>

           <div>
           <label >Photo</label>
           <input type="file" 
           required
           placeholder="Product Image" 
           
           onChange={changeImageHandler}/>
       </div>
           <button type="submit">Add Product</button>
        </form>
     </article>
     <section>
       <img src={photo} alt="New Product Image" />

    </section>
      </main>
    </div>
  );
};
export default NewProduct;
