import React, { useState } from 'react'
import './Modal.css'

const Modal = ({filteredData}) => {

// pagination
const total = 20;
const[currentpage,setcurrentpage]=useState(1);

const[recordperpage,setrecordperpage]=useState(4);

const Lastindex=currentpage * recordperpage;
const Firstindex= Lastindex-recordperpage;
const currentitem = filteredData?.slice(Firstindex,Lastindex);
const totalpage = Math.ceil(total/recordperpage);

const handleprev = () => {
setcurrentpage((prev)=>Math.max(prev-1,1))
}
const handlenext = () => {
    setcurrentpage((prev)=>Math.min(prev+1,totalpage))
    }

    const handlepage = (pageNM) => {
setcurrentpage(pageNM);
    }

    // product
    const handlemore=(product)=>{
        console.log(product);
    }

  return (
    <div className='modal'>
      
{
    currentitem.map(product => (
      <div key={product.id} className='product'>
        <img src={product.image} alt={product.title} />

        <h3>{product.title}</h3>
        <p>${product.price}</p>
    <button className='seemore' onClick={()=>handlemore(product)} >See More</button> 
      </div>
    ))
}


<div className='pagination'>
    <button className='btn' onClick={handleprev} >Prev</button>
    {Array.from({length: totalpage}, (_, index) => (
        <button className='btn' onClick={()=>handlepage(index+1)} >{index+1}</button>
    ))}
    <button className='btn' onClick={handlenext} >Next</button>
</div>

    </div>
  )
}

export default Modal
