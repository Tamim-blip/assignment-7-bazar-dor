import BaseUrl from '@/Api/BaseUrl';
import ProductCard from '@/components/ProductCard/productCard';
import TProduct from '@/type/type';
import React from 'react';

const CategoryProducts = async({params}: { params: Promise<{ categoryID: string }> }) => {
    const {categoryID} = await params
     const res = await fetch(`${BaseUrl}/products?category=${categoryID}`)
     const data : TProduct[] = await res.json()
     console.log(data)
    return (
        <div className='container mx-auto grid grid-cols-3 gap-3'>
           {
            data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
           }
        </div>
    );
};

export default CategoryProducts;