import React,{useEffect, useState} from 'react'  
export default function Clean() {
    const [count, setCount]=useState(0)
    const [Number, setNumber] = useState(1000)
    useEffect(()=>{
        var a=setInterval(()=>{
            console.log("Adfar")
        },3000)
        return ()=>{
            clearInterval(a);
        };
    }, []);
  return (
    <div>
      {/* <h1>Adfar Rasheed</h1> */}
      <h1>coun : {count}</h1>
      <button onClick={()=>setCount(count+1)}>+++++</button>
    </div>
  );
}
