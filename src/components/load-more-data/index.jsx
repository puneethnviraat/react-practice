import React from 'react';

const LoadMoreData = () => {
  const url = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`;

  return <div>LoadMoreData</div>;
};

export default LoadMoreData;
