import BaseUrl from '@/Api/BaseUrl';

import SortedPage from '@/components/sortProducts/pase';
import TProduct from '@/type/type';
import React from 'react';

const CategoryProducts = async({params}: { params: Promise<{ categoryID: string }> }) => {
    const {categoryID} = await params
     const res = await fetch(`${BaseUrl}/products?category=${categoryID}`,{cache: "force-cache"})
     const data : TProduct[] = await res.json()
      
     const oneProduct = data[0]
    return (
        <div className='container mx-auto'>
            <div className='flex gap-4 items-center p-5 rounded-2xl my-10 bg-base-200'>
                <p className='text-7xl'>{oneProduct.categoryIcon}</p>
                <div>
                    <p className='font-bold text-2xl'>{oneProduct.categoryNameBn}</p>
                    <p className='text-sm text-base-content'>{data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
                 </div>
<SortedPage product = {data}></SortedPage>
        </div>
    );
};

export default CategoryProducts;