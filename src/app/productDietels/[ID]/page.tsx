
import BaseUrl from '@/Api/BaseUrl';
import TProduct from '@/type/type';
import React from 'react';

const DietelsPage = async ({params}: 
    {params: Promise<{ ID: string }>;
}) => {


  const { ID } = await params;

  const res = await fetch(`${BaseUrl}/products/${ID}`);
  const data: TProduct = await res.json();


  const Market = data.markets;

  const lowestPrice = [...Market].sort((a, b) => a.min - b.min)[0];

   const highestPrice = [...Market].sort((a, b) => b.max - a.max)[0];
    
   const average = (lowestPrice.min + highestPrice.max)/2

   const increase = data.today - data.yesterday
   const decrease = data.yesterday - data.today

  const formatPrice = (price: number) =>
    price.toLocaleString('bn-BD');


  const unitBn: Record<string, string> = {
  kg: 'কেজি',
  liter: 'লিটার',
  litre: 'লিটার',
  dozen: 'ডজন',
  piece: 'টি',
  pcs: 'টি',
  gram: 'গ্রাম',
  ml: 'মিলিলিটার',
};

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
   
<div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-base-300 p-5 sm:p-6 rounded-2xl border border-base-content/5">

  {/* Product information */}
  <div className="flex gap-4 items-center min-w-0">
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-base-100 text-4xl">
      {data.image}
    </div>

    <div className="min-w-0">
      <p className="text-xl font-bold text-base-content">
        {data.nameBn}
      </p>

      <p className="text-sm text-base-content/60 mt-1">
        প্রতি {unitBn[data.unit] || data.unit} · {data.categoryNameBn}
      </p>

      <div
        className={`flex flex-wrap items-center gap-1.5 mt-3 text-sm font-medium ${
          data.change.dir === 'up'
            ? 'text-red-600'
            : data.change.dir === 'down'
              ? 'text-green-600'
              : 'text-base-content/60'
        }`}
      >
        <span>
          {data.change.dir === 'up'
            ? '▲'
            : data.change.dir === 'down'
              ? '▼'
              : '−'}
        </span>

        <span>
          {data.change.dir === 'up'
            ? 'গতকালের তুলনায় দাম বেড়েছে'
            : data.change.dir === 'down'
              ? 'গতকালের তুলনায় দাম কমেছে'
              : 'গতকালের তুলনায় দাম অপরিবর্তিত'}
        </span>

        {data.change.dir !== 'flat' && (
          <span>
            · {formatPrice(
              data.change.dir === 'up' ? increase : decrease
            )} টাকা
          </span>
        )}
      </div>
    </div>
  </div>

  {/* Today's price */}
  <div className="shrink-0 bg-base-100 rounded-2xl p-4 sm:px-6 text-center sm:min-w-44">
    <p className="text-sm text-base-content/60">
      আজকের দাম
    </p>

    <p className="text-3xl font-extrabold text-base-content mt-1">
      ৳{formatPrice(data.today)}
    </p>

    <p className="text-xs text-base-content/50 mt-1">
      প্রতি {unitBn[data.unit] || data.unit}
    </p>

    <div
      className={`inline-flex items-center justify-center gap-1 mt-3 rounded-full px-3 py-1 text-sm font-semibold ${
        data.change.dir === 'up'
          ? 'text-red-600 bg-red-500/10'
          : data.change.dir === 'down'
            ? 'text-green-600 bg-green-500/10'
            : 'text-base-content/60 bg-base-300'
      }`}
    >
      <span>
        {data.change.dir === 'up'
          ? '▲'
          : data.change.dir === 'down'
            ? '▼'
            : '−'}
      </span>

      <span>
        {data.change.pct.toLocaleString('bn-BD')}%
      </span>
    </div>
  </div>

</div>


      

      <div className="bg-base-200 rounded-2xl p-5">

        <p className="text-xl font-semibold mb-5">দামের সারসংক্ষেপ</p>

       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

  {/* Lowest price */}
  <div className="bg-white rounded-2xl border border-green-100 p-5 shadow-sm">
    <p className="text-sm text-gray-500 mb-2">
      সর্বনিম্ন দাম
    </p>

    <p className="text-2xl font-bold text-green-700">
      {formatPrice(lowestPrice.min)} টাকা
    </p>

    <p className="text-sm text-gray-500 mt-2">
      সবচেয়ে কম দামের বাজার
    </p>

    <p className="font-medium text-gray-800">
      {lowestPrice.market}
    </p>
  </div>

  {/* Highest price */}
  <div className="bg-white rounded-2xl border border-red-100 p-5 shadow-sm">
    <p className="text-sm text-gray-500 mb-2">
      সর্বাধিক দাম
    </p>

    <p className="text-2xl font-bold text-red-600">
      {formatPrice(highestPrice.max)} টাকা
    </p>

    <p className="text-sm text-gray-500 mt-2">
      সবচেয়ে বেশি দামের বাজার
    </p>

    <p className="font-medium text-gray-800">
      {highestPrice.market}
    </p>
  </div>

  {/* Average price */}
  <div className="bg-white rounded-2xl border border-green-100 p-5 shadow-sm">
    <p className="text-sm text-gray-500 mb-2">
      গড় দাম
    </p>

    <p className="text-2xl font-bold text-green-700">
      {formatPrice(Math.round(average))} টাকা
    </p>

    <p className="text-sm text-gray-500 mt-2">
      প্রতি {unitBn[data.unit] ||data.unit} এর হিসাবে
    </p>
  </div>

</div>
        <h2 className="text-xl font-semibold mb-5">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বাধিক</th>
                <th>গড়</th>
              </tr>
            </thead>

            <tbody>
              {Market.map((market, ind) => {
                const average = (market.min + market.max) / 2;

                return (
                  <tr key={`${market.market}-${ind}`}>
                    <td className="font-medium">
                      {market.market}
                    </td>

                    <td>{market.division}</td>

                    <td>
                      {formatPrice(market.min)} টাকা
                    </td>

                    <td>
                      {formatPrice(market.max)} টাকা
                    </td>

                    <td className="font-semibold  text-black">
                      {formatPrice(Math.round(average))} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DietelsPage;
