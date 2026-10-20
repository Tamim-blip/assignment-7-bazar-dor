
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-base-300 mt-8 sm:mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 py-6 sm:py-8 md:py-10 px-4 sm:px-5">

                <p className="text-sm sm:text-base text-base-content wrap-break-word">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>

                <p className="text-sm sm:text-base text-base-content wrap-break-word md:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>

            </div>
        </div>
    );
};

export default Footer;