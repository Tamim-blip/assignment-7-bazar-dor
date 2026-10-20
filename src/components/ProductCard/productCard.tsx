import TProduct from '@/type/type';
import Link from 'next/link';
import React from 'react';

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

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <Link href={`/productDietels/${product.id}`}>
        <div className="bg-base-200 p-4 rounded-2xl">
          <div className="flex gap-3 items-center">
            <p className="text-3xl">{product.image}</p>

            <div>
              <p className="font-semibold text-base text-base-content">
                {product.nameBn}
              </p>

              <p className="text-sm text-base-content/60 mt-1">
                প্রতি {unitBn[product.unit] || product.unit}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end mt-5">
            <div>
              <p className="text-sm text-base-content/60 mb-1">
                আজকের দাম
              </p>

              <p className="text-xl font-bold">
                ৳{product.today.toLocaleString('bn-BD')}
              </p>
            </div>

            <div
              className={`flex items-center gap-1 text-sm font-semibold rounded-lg px-2 py-1 ${
                product.change.dir === 'up'
                  ? 'text-red-600 bg-red-500/10'
                  : product.change.dir === 'down'
                    ? 'text-green-600 bg-green-500/10'
                    : 'text-base-content/60 bg-base-300/50'
              }`}
            >
              <span>
                {product.change.dir === 'up'
                  ? '▲'
                  : product.change.dir === 'down'
                    ? '▼'
                    : '−'}
              </span>

              <span>
                {product.change.pct.toLocaleString('bn-BD')}%
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;