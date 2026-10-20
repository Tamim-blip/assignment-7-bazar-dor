
'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HeroBanner = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const date = new Date().toLocaleDateString('bn-BD', {
            dateStyle: 'full',
        });

        setDate(date);
    }, []);

    return (
        <div className="container mx-auto mt-6 sm:mt-10 lg:mt-15 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 bg-base-300 p-4 sm:p-6 lg:p-8 rounded-2xl">

            {/* Banner Content */}
            <div className="w-full min-w-0 mt-2 sm:mt-3 md:mt-5">

                <p className="bg-green-100 p-2 rounded-2xl w-fit max-w-full text-center text-sm sm:text-base text-green-600 wrap-break-word">
                    {date}
                </p>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-snug">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base text-base-content leading-7">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <button className="btn btn-success mt-6 sm:mt-8 w-full sm:w-auto">
                    সব পণ্য দেখুন
                </button>

            </div>

            {/* Banner Image */}
            <div className="w-full md:w-2/5 shrink-0 flex justify-center">
                <Image
                    src="/bazar-hero.png"
                    alt="Hero img"
                    height={400}
                    width={400}
                    priority
                    className="w-full max-w-70 sm:max-w-85 md:max-w-full h-auto object-contain"
                />
            </div>

        </div>
    );
};

export default HeroBanner;
