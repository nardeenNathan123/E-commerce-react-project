
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../redux/actions';


function FavoritesPag() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (productId) => {

    dispatch(removeFromFavorites(productId));
  };

  return (
    <div className="container mt-5">
      {favorites.length === 0 ? (
        <h1 className="text-center">Your favorites are empty</h1>
      ) : (
        <div className="container">
          <div className="row">
            {favorites.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card">
                  <img
                    className="w-100"
                    style={{ height: '400px', maxWidth: '100%', borderRadius: '5px' }}
                    src={`https://cdn.dummyjson.com/product-images/${product.id}/${product.id == 6 ? '4' : '1'}.jpg`}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center">{product.title}</h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn mb-3 btn-outline-danger"
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      style={{ marginLeft: '10px' }}
                    >
                      Remove from Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

}

export default FavoritesPag;
