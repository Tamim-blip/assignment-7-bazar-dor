import BaseUrl from '@/Api/BaseUrl';
import SortedPage from '@/components/sortProducts/pase';
import TProduct from '@/type/type';
import React from 'react';

const CategoryProducts = async ({
    params
}: {
    params: Promise<{ categoryID: string }>
}) => {
    const { categoryID } = await params;

    const res = await fetch(
        `${BaseUrl}/products?category=${categoryID}`,
        { cache: "force-cache" }
    );

    const data: TProduct[] = await res.json();

    const oneProduct = data[0];

    return (
        <div className="container mx-auto w-full px-3 sm:px-4">
            <div className="flex flex-col min-[400px]:flex-row gap-3 sm:gap-4 items-start min-[400px]:items-center p-4 sm:p-5 rounded-2xl my-5 sm:my-8 lg:my-10 bg-base-200 min-w-0">

                <p className="text-5xl sm:text-6xl lg:text-7xl shrink-0">
                    {oneProduct.categoryIcon}
                </p>

                <div className="min-w-0">
                    <p className="font-bold text-xl sm:text-2xl wrap-break-word">
                        {oneProduct.categoryNameBn}
                    </p>

                    <p className="text-xs sm:text-sm text-base-content wrap-break-word">
                        {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>

            </div>

            <SortedPage product={data} />
        </div>
    );
};

export default CategoryProducts;