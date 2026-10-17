"use client"


import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const NavBarPage = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle : "full"
    })
    return (
        <div className='flex justify-between container  mx-auto mt-5'>
            <Link href={'/'}>
            <div className='flex gap-3'>
                <Image className='bg-green-600 p-2 rounded-2xl' src='/logo-icon.png' alt = 'nav logo' height={50} width={50}></Image>
                <div>
                    <h2 className='font-bold text-2xl'>বাজার দর</h2>
                <Suspense fallback= 'loading...'>
                    <p className='text-base-content'>{date}</p>
                </Suspense>
                </div>

            </div>
            </Link>

            <div className='flex gap-2'>
               <Link href={'/sign-in'}>
                <button className='btn'>সাইন ইন</button>
               </Link>
               <Link href={'/sign-up'}>
                <button className='btn btn-success'>সাইন আপ</button>
               </Link>
            </div>
            
        </div>
    );
};

export default NavBarPage;