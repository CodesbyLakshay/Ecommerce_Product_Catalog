import { useEffect,useState } from 'react';
import ProductList from './ProductList';
import './App.css'

function App() {

const[products , setProducts] = useState([]);
const[categories , setCategories] = useState([]);
const[selectedCategory , setSelectedCategory] = useState(null);
const[searchTerm , setSearchTerm] = useState("");
const[sortOrder , setSortOrder] = useState("ascending");

useEffect(() => {
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));

    fetch('http://localhost:8080/api/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
    },[]);
  return (
   <div className='container'>
       <h1 className='my-4'>Product Catalog</h1>
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
