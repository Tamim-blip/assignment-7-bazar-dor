'use client';

import React, { useState } from 'react';
import ProductCard from '../ProductCard/productCard';
import TProduct from '@/type/type';

const SortedPage = ({ product }: { product: TProduct[] }) => {
  const [sortBy, setSortBy] = useState<
    'বেশি দাম' | 'কম দাম' | 'সমান দাম' | 'ডিফল্ট'
  >('ডিফল্ট');

  const sortedProducts = [...product].sort((a, b) => {
    if (sortBy === 'বেশি দাম') {
      return b.today - a.today;
    }

    if (sortBy === 'কম দাম') {
      return a.today - b.today;
    }

    if (sortBy === 'সমান দাম') {
      return 0;
    }

    return 0;
  });

  return (
    <div className="w-full min-w-0">
      <div className="flex justify-end bg-base-200 p-3 sm:p-5 rounded-2xl mb-5">
        <fieldset className="fieldset w-full sm:w-auto">
          <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center gap-2 sm:gap-3">
            <legend className="fieldset-legend">সাজান</legend>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | 'বেশি দাম'
                    | 'কম দাম'
                    | 'সমান দাম'
                    | 'ডিফল্ট'
                )
              }
              className="select w-full min-[400px]:w-auto"
            >
              <option value="ডিফল্ট">ডিফল্ট</option>
              <option value="বেশি দাম">বেশি দাম</option>
              <option value="কম দাম">কম দাম</option>
              <option value="সমান দাম">সমান দাম</option>
            </select>
          </div>
        </fieldset>
      </div>

      <p className="text-sm text-base-content my-3">
        মোট {product.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default SortedPage;