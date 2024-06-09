import { useEffect } from 'react';
import './style.css';
import { useState } from 'react';

export default function ScrollIndicator() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [width, setWidth] = useState();

  async function getProducts() {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/products?limit=100');
      const data = await res.json();
      setProducts(data.products);
      loading(false);
    } catch (error) {
      console.log('Please try again later');
      setLoading(false);
    }
  }
  function handleScrollEvent() {
    const height =
      document.body.scrollTop || document.documentElement.scrollTop;

    const scrollHeigt =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercentage = (height / scrollHeigt) * 100;
    setWidth(scrollPercentage);
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Getting products list, please wait....!</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>Scroll Indicator</h1>
      <div className="indicator-bar">
        <div className="indicator" style={{ width: `${width}%` }}></div>
      </div>

      <br></br>

      <ul className="products-list">
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}
