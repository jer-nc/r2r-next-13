import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cardData } from './data'

const HowItWorksSection = () => {
    return (
        <div id='pasos' className='bg-gradient-to-r from-blue-700 to-green-400 h-full w-full py-12'>
            <div className='mx-auto max-w-[1300px] h-full px-4'>
                <div className='h-full justify-center items-center space-y-6'>
                    <h1 className='text-2xl font-semibold text-white'>¿Cómo funciona?</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {cardData.map((card, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-lg'>{card.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksSection