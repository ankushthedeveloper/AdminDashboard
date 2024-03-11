import  { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const Toss = () => {
    const [angle,setAngle] =useState<number>(0)

    const flipcoin=()=>{
        if(Math.random()>0.5) setAngle((prev)=>prev+180)
        else setAngle(prev=>prev+360)
    
    }
  return (
    <div className="AdminContainer">
    <AdminSidebar />
    <main className="appContainer">
     <h1>Toss the coin</h1>
     <section>
        <article className='tossCoin' 
        onClick={flipcoin}
        style={{transform:`rotateY(${angle}deg)`}}>
            <div> </div>
            <div> </div>
        </article>
     </section>
    </main>
  </div>
  )
}

export default Toss