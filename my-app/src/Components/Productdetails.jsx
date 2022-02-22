import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
export const Productdetails = () => {
    let {id} = useParams();
    const [detail,setDetail] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3000/product/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
          
                console.log(res.name)
                setDetail(res);
            
        })
        .catch((err)=>{
            console.log(err);
        })

    },[id])
   // {console.log(detail.name)}
  return (
      <>
   
     <div>
     <h1> Product Name : {detail.name}</h1>
     <h5>Product Price : {detail.price}</h5>
         </div> 
    </>
  )
}
