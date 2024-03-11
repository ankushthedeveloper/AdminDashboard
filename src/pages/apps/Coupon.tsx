import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";


const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(0);
  const [prefix, setPrefix] = useState<string>("");
  const [numberIncluded, setNumberIncluded] = useState<boolean>(false);
  const [charactersIncluded, setCharactersIncluded] = useState<boolean>(false);
  const [symbolIncluded, setSymbolIncluded] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copytext = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const generateCoupon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!charactersIncluded && !numberIncluded && !symbolIncluded)
      return alert("Please Select One At Least");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (charactersIncluded) entireString += allLetters;
      if (numberIncluded) entireString += allNumbers;
      if (symbolIncluded) entireString += allSymbols;

      const randomNum: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="appContainer" style={{position:"relative"}}>
        <h1>Coupon</h1>
        <section  style={{height:"70vh" , position:"absolute" ,top:"12rem" ,left:"30vw"}}>
          <form className="couponForm" onSubmit={generateCoupon}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => {
                setPrefix(e.target.value);
              }}
            />
            <input type="number" 
            max={25}
            min={8}
            onChange={(e)=>setSize(Number(e.target.value))}/>
        

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={numberIncluded}
                onChange={() => {
                  setNumberIncluded((prev) => !prev);
                }}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={charactersIncluded}
                onChange={() => {
                  setCharactersIncluded((prev) => !prev);
                }}
              />
              <span>Characters</span>

              <input
                type="checkbox"
                checked={symbolIncluded}
                onChange={() => {
                  setSymbolIncluded((prev) => !prev);
                }}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate Coupon</button>
          </form>

          {coupon && <code>{coupon} <span onClick={()=>copytext(coupon)}>{isCopied?"Copied":"Copy"}</span></code>}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
