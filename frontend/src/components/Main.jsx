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

  // const products = [
  //   {
  //     id: 1,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 3,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 4,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 5,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 6,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 7,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  //   {
  //     id: 8,
  //     img: 'https://s3-alpha-sig.figma.com/img/3827/a861/8e3bdd44423a5c03aaf7ad84853c7303?Expires=1685923200&Signature=NGLuJiz2tf~0NSEpNVtAX7~k5Bsz94XAS3R-xxMqb1r42XfmQxEEieUVPRVHnA97vfgJud8uAApHN84OYOSlhKy9whB7MWfZbTlM8GPQJgryiLENVjKVQ1LllLMXgQPrRpvmjsQryM2EACT8ODrEu-XAqWyG1FVp-gtkArZpJHwHQdL7koqQzNAS-Dex22ZMjYloAkws1gnlp6ON2ARKOqoLfobqYSITKdcj~PIaypt1N8Y4l86lxL1WK-FOtcssSuXEi4Ow3QTAf6AnqS4SFlNJTL1q-ygnj98~RPSDjPnrsQ0WtBlG5HuDgohlNzCgiUT68iTSR-~1ZUnKIM~CJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  //     name: 'Adidas Converse',
  //     price: 1200,
  //   },
  // ];

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
                <img src={product.img} alt="" className="product-img" />
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
