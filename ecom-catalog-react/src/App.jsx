import { useEffect,useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
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

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
};

const handleSortChange = (event) => {
    setSortOrder(event.target.value)
};

const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId ? Number(categoryId): null);
};

const filteredProducts = products
           .filter(product => {
               return(
                   (selectedCategory ? product.category?.id === selectedCategory  : true)
                   &&
                   product.name.toLowerCase().includes(searchTerm.toLowerCase())
                   )
               })
           .sort((a,b) => {
               if(sortOrder=== "asc"){
                   return a.price -b.price;
                   } else{
                       return b.price - a.price
                       }
               });


  return (
   <div className='container'>
       <h1 className='my-4'>Product Catalog</h1>


       <div className='row mb-2'>
           <div className='call-md-5 col-sm-12 mb-2'>
                          <CategoryFilter categories={categories} onSelect={handleCategorySelect}  />
                   </div>

           <div className='col-md-5 col-sm-12 md-2'>
            <input
            type='text'
            className='form-control'
            placeholder='Search for Products'
            onChange={handleSearchChange}>
            </input>
           </div>
           <div className='col-md-4 col-sm-12 mb-2'>
            <select className='form-control' onChange={handleSortChange}>
                <option value= 'asc'>Sort by Price : Low to High</option>
                <option value= 'desc'>Sort by Price : High to low</option>
            </select>
        </div>
       </div>
       <div>
           {filteredProducts.length ? (
               //display products
               <ProductList products={filteredProducts} />
               ) : (
               <p>No products found</p>)}
       </div>

   </div>
  )
}

export default App
