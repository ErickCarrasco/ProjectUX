import React from 'react';

import ProductListing  from './feature/product-listing';

import data from './data/products.json';

export default function Storemain(props){
    return <div>
        <h2>Store</h2>
        <ProductListing products={data.products} />
    </div>
}