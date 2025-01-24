import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {

  // data
  const[data,setdata]=useState([]);

  // Search
  const[search,setsearch]=useState('');
  console.log(search);


  // API
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(product=>{setdata(product)
console.log(product)}
)
},[])

  // filter data
  const filteredData=data.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
     
      

<h1>Welcome to our Store</h1>
<div className='input'>
<input type='text' value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search for products'/>
</div>

<Modal filteredData={filteredData} />
    </div>
  )

}

export default App;
