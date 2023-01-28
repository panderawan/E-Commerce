import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
          voluptatem nemo hic aspernatur atque expedita provident nam quis est,
          aliquam libero? Rerum officia distinctio asperiores unde? Ex nihil
          iste veritatis!
        </p>
      </div>
      <div className='bottom'>
        {error
          ? 'something went wrong'
          : loading
          ? 'Loading'
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
