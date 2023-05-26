import { useEffect, useState } from 'react';
import Banner from './Banner';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const url = import.meta.env.VITE_REACT_APP_BACKEND_SERVICE_URL;

const Main = () => {
  const [clicked, setClicked] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${url}/products`);
        const data = response.data;
        setProducts(data);
        setIsLoading(false);
        console.log(isLoading, response);
        console.log(url);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [isLoading]);

  const handleClick = (itemId) => {
    console.log(itemId);
    setClicked(itemId);
  };

  return (
    <div className="main">
      <Banner />
      {isLoading ? (
        <>
          {' '}
          <LoadingSpinner />{' '}
        </>
      ) : (
        <>
          <div className="products">
            {products.map((product) => (
              <div
                className={`card ${clicked === product.id ? 'selected' : ''}`}
                key={product.id}
                onClick={() => handleClick(product.id)}
              >
                <img src={product.imageLink} alt="" className="product-img" />
                <div className="product-details">
                  <h5 className="product-name">{product.name}</h5>
                  <p className="product-price">${product.price}</p>
                  <button className="add-btn">Add To cart</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
