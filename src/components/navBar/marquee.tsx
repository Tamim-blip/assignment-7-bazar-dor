
import BaseUrl from '@/Api/BaseUrl';
import TProduct from '@/type/type';
import React from 'react';
import MarqueeText from 'react-marquee-text';


const units: Record<string, string> = {
  kg: 'কেজি',
  litre: 'লিটার',
  l: 'লিটার',
  dozen: 'ডজন',
  dz: 'ডজন',
  piece: 'পিস',
  pieces: 'পিস',
  pcs: 'পিস',
  pc: 'পিস',
};

const Marquee = async () => {
  const res = await fetch(
    `${BaseUrl}/products`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch product prices');
  }

  const data: TProduct[] = await res.json();

  return (
    <div className="overflow-hidden bg-base-300 py-2">
      <MarqueeText direction="right" duration={15}>
        {data.map((product) => {
          const unit =
            units[product.unit.toLowerCase()] ?? product.unit;

          return (
            <div
              key={product.id}
              className="mx-6 flex items-center gap-2 whitespace-nowrap"
            >
              <span>{product.categoryIcon}</span>

              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>

              <span className="font-bold text-gray-900">
                ৳{product.today.toLocaleString('bn-BD')}/{unit}
              </span>

              <span
                className={
                  product.change.dir === 'up'
                    ? 'font-medium text-red-600'
                    : product.change.dir === 'down' ? 'font-medium text-green-600'  : 'font-medium'
                }
              >
                {product.change.dir === 'up' ? '▲' : product.change.dir === "down" ? '▼' : "-"}
                {product.change.pct.toLocaleString('bn-BD')}%
              </span>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
