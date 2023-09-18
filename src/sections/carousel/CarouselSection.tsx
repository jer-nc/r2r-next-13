'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from './images';
import Image from 'next/image';

const CarouselSection = () => {
    return (
        <div className=' h-full w-full py-10 mt-28'>
            <div className='mx-auto max-w-[1300px] h-full px-4'>
                <div className='h-full justify-center items-center space-y-6'>
                    <h1 className='text-4xl font-semibold text-center'>Revalorizaciones hechas</h1>
                    <div className='grid grid-cols-1 gap-6'>
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            className='rounded-lg'
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <Image width={1000} height={600} className='h-[600px] object-cover rounded-lg' src={image} alt={`Imagen ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselSection;
