import Image from 'next/image';
import React from 'react';

const HeroBanner = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle : "full"
    })
    return (
        <div className='container mx-auto bg-base-300 p-5 rounded-2xl mt-15 flex justify-between '>
            <div className='mt-5'>
                <p className='bg-green-100 p-1 rounded-2xl w-60 text-center text-green-600'>{date}</p>
                <h1 className='text-4xl font-bold mt-3'>আজকের বাজারের দাম এক নজরে</h1>
                <p className='mt-8 text-base-content'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className='btn btn-success mt-8'>সব পণ্য দেখুন</button>

            </div>

            <Image src={'/bazar-hero.png'} alt='Hero img' height={400} width={400}>

            </Image>
            
        </div>
    );
};

export default HeroBanner;