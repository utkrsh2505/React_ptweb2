import React from 'react';
import { useEffect,useState } from 'react';
import {Link,Outlet} from "react-router-dom";
export const Allproduct = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/product")
        .then((res)=>res.json())
        .then((res)=>{
          
                
                setData(res);
            
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])
  return (
      <>
   
    <div>Allproduct</div>
    <div>
{data.map((item)=>{
    return(
        <div key={item.id}><Link to={`/all_product/${item.id}`}>{item.name}</Link></div>

    )

})}
<Outlet/>
    </div>
    </>
  )
}
