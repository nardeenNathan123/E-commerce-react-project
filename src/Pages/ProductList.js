import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './movie.css';
import { addToFavorites, removeFromFavorites } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
  const [products, setProducts]= useState([]);
  const [searchval ,setSearchval] =useState('');
  const [selectedCategory, setSelectedCategory]= useState('');
  const [currentPage , setCurrentPage]=useState(1);
  const [postsPerPage, setPostsPerPage]= useState(6);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products );
      })
      .catch(error => console.error( error));
  }, []); 
const lastPostIndex =currentPage*postsPerPage;
const firstPostIndex=lastPostIndex-postsPerPage;
const currentPosts = products.slice(firstPostIndex,lastPostIndex);

  const handleSearch = (e) => {
    setSearchval(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchval.toLowerCase()) &&
    (selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase())
  );


  const uniqueCategories = [...new Set(products.map(product => product.category))];
 
  const isFavorite = (productId) => favorites.some((favpro) => favpro.id === productId);

  const handleFavoriteToggle = (product) => {
    if (isFavorite(product.id)) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5 mb-5">
          <input 
            type="text"
            placeholder="Search by title"
            className="form-control"
            value={searchval}
            onChange={handleSearch}
          />
          </div>
          
          <div className="col-6 mt-5 mb-5">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        </div>
        
        <div className="row justify-content-around">
          {filteredProducts.map(product => (
            
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{ height: '600px' }}>
  <div className="card carde">
    <Link to={`/product/${product.id}`} className="text-decoration-none">
      <img className="card-img-top" src={product.images[0]} alt={product.title} style={{ height: '350px' }} />
    </Link>
    <div className="card-body">
      <h5 className="card-title text-center">{product.title}</h5>
      <p className="card-text text-center">{product.category}</p>
    </div>
    <div className="d-flex justify-content-center">
      <Link to={`/product/${product.id}`} className="btn btn-outline-primary mb-5 w-40">Buy Now</Link>
      <button className="btn mb-5 w-40"
                    onClick={() => handleFavoriteToggle(product)}
                    style={{ marginLeft: '10px' }}
                  > 
                    {isFavorite(product.id) ? <h5>❤️</h5> : <h5>💔</h5>}</button>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
      
    </>
  );
}
export default ProductList;