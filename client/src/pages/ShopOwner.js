import React from 'react';
import OwnerCard from '../components/OwnerCard';
import OwnerSearchBar from '../components/OwnerSearchBar';
import OpenOrders from '../components/OpenOrders';
import CompletedOrders from '../components/CompletedOrders';
import '../components/styles/ownerorderlist.css';

const ShopOwner = () => {
  return (
    <>
      <OwnerCard />
      <OwnerSearchBar />
      <OpenOrders />
      <CompletedOrders />
    </>
  );
};

export default ShopOwner;
