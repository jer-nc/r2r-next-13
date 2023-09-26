import React from 'react'
import { Instagram, Whatsapp, Message } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/LogoR2.png';

const Footer = () => {

    // whatsapp:  https://wa.me/message/IEJ64XUTZM2SE1 
    // instagram: https://www.instagram.com/roomtorentspain.es/
    return (
        <div className='bg-gray-100 h-full w-full py-10'>
            <div className='mx-auto max-w-[1300px] h-full px-4'>
                <div className='h-full justify-center items-center space-y-6'>
                    <div className='flex justify-center'>
                        <Image src={logo} alt="R2R" width={100} height={100} />

                    </div>
                    <p className='text-muted-foreground text-center text-sm'>© Room Squared 2023. All rights reserved.</p>
                    <div className='flex justify-center gap-12 py-4 max-w-[650px] mx-auto text-gray-600'>
                        {/* <FormContact /> */}

                        <a href="https://www.instagram.com/roomtorentspain.es/" target='_blank'>
                            <Instagram variant="Bold" />
                        </a>

                        <a href="https://wa.me/message/IEJ64XUTZM2SE1">
                            <Whatsapp variant="Bold" />
                        </a>
                        <a href="">
                            <Message variant="Bold" />
                        </a>


                    </div>
                    <div className='flex justify-center'>
                        <Link href='#' className='text-muted-foreground text-center text-sm'>Aviso legal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer