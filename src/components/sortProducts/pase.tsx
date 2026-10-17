'use client'
import React, { useState } from 'react';
import ProductCard from '../ProductCard/productCard';
import TProduct from '@/type/type';

const SortedPage = ({product} : {product : TProduct[]}) => {

    const [sortBy, setSortBy] = useState<"বেশি দাম" | "কম দাম" | "সমান দাম" | "ডিফল্ট" >("ডিফল্ট")
    return (
        <div>
            
                <div className='flex justify-end bg-base-200 p-5 rounded-2xl mb-5'>
                    <fieldset className="fieldset">
<div className='flex gap-3'>
      <div>
        <legend className="fieldset-legend">সাজান</legend>
      </div>
  <div>
    <select defaultValue="Pick a browser" className="select">
    <option disabled={true}>ডিফল্ট</option>
    <option value={"বেশি দাম"}>বেশি দাম</option>
    <option value={"কম দাম"}>কম দাম</option>
    <option value={"সমান দাম"}>সমান দাম</option>
  </select>
  </div>
</div>
 
</fieldset>
               
            </div>

            <p className='text-sm text-base-content my-3'>মোট {product.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
            <div className=' grid grid-cols-3 gap-3'>
           {
            product.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
           }
        </div>
        </div>
    );
};

export default SortedPage;