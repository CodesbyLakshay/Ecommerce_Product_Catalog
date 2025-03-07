import { useEffect,useState } from 'react';
import ProductList from './ProductList';
import './App.css'

function App() {

const[products , setProducts] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
    },[]);
  return (
   <div className='container'>
       <div>
           {products.length ? (
               //display products
               <ProductList products={products} />
               ) : (
               <p>No products found</p>)}
       </div>

   </div>
  )
}

export default App
