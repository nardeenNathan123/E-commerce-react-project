import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import ProductList from "./ProductList";
import sale1 from '../sale1.jpeg'
import sale2 from '../sale2.jpeg'
import sale3 from '../sale3.jpeg'
function Home(){

    return (
        <div>
          <div className="container">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={sale2} className="d-block w-100" alt="..." style={{ width: '100%', height: '500px' }} />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img src={sale2} className="d-block w-100" alt="..." style={{ width: '100%', height: '500px' }} />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img src={sale3} className="d-block w-100" alt="..." style={{ width: '100%', height: '500px' }} />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h1 className='text-center mt-5'>Welcome to our store</h1>
            <ProductList></ProductList>
          </div>
        </div>
      );
    }      



export default Home;