import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { cardData } from './data'
import { UserTick, Buildings2, Like1 } from "iconsax-react";
import why from '../../../public/town.svg'
import Image from 'next/image';

const PorqueSection = () => {
    return (
        <div className='h-full bg-gray-50 w-full py-12'>
            <div className='mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-12 h-full px-4 '>
             
                <div className='h-full flex flex-col justify-center items-center space-y-6'>
                    <h1 className='text-2xl font-semibold'>¿Por qué elegirnos?</h1>
                    {cardData.map((card, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className='flex gap-4 items-center'>
                                    {
                                        card.icon === 'user' && (

                                            <UserTick variant='Bold' />

                                        )
                                    }
                                    {
                                        card.icon === 'building' && (

                                            <Buildings2 variant='Bold' />

                                        )
                                    }
                                    {
                                        card.icon === 'like' && (

                                            <Like1 variant='Bold' />

                                        )
                                    }
                                    <CardTitle>{card.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-lg'>{card.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className='h-full flex justify-start items-center'>
                    <Image src={why} alt="test" className='h-36 md:h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default PorqueSection