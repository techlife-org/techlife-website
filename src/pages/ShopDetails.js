import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Common/Breadcrumb';

const ShopDetails = () => {
  const { id } = useParams();
  return (
    <div className="shop-details-page">
      <Breadcrumb title="Product Details" items={[{ label: 'Shop', link: '/shop' }, { label: 'Product Details' }]} />
      <div className="space">
        <div className="container">
          <h2>Product Details - {id}</h2>
          <p>Product details content will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;