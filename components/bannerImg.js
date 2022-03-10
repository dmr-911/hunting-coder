import React from 'react';
import Image from 'next/image';
const BannerImg = () => {
    return (
        <div className="md:container border-solid border-1 border-red-300 flex justify-center">
            <Image className="rounded" src="/coder.jpg" height={120} width={150}></Image>
        </div>
    );
};

export default BannerImg;