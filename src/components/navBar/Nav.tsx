import React from 'react';


import Image from 'next/image';

const NavBarPage = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle : "full"
    })
    return (
        <div className='flex justify-between container  mx-auto mt-5'>
            <div className='flex gap-3'>
                <Image className='bg-green-600 p-2 rounded-2xl' src='/logo-icon.png' alt = 'nav logo' height={50} width={50}></Image>
                <div>
                    <h2 className='font-bold text-2xl'>বাজার দর</h2>
                <p className='text-base-content'>{date}</p>
                </div>

            </div>

            <div className='flex gap-2'>
                <button className='btn'>সাইন ইন</button>
                <button className='btn btn-success'>সাইন আপ</button>
            </div>
            
        </div>
    );
};

export default NavBarPage;