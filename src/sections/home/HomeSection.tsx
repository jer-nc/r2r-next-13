import { Button } from '@/components/ui/button'
import React from 'react'
import header from '../../../public/header-1.jpg'

const HomeSection = () => {
    // url image: https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    const backgroundImageUrl = 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div id='home' className='relative md:h-[100vh] w-full py-6 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            {/* Agregamos un div adicional para el overlay */}
            <div className='absolute inset-0  bg-gradient-to-r from-black via-black/50 to-transparent opacity-80'></div>
            <div className='mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-6 h-full px-4'>
                <div className='mt-14 md:mt-0 h-full flex flex-col justify-center items-center space-y-6 text-white relative z-10'>
                    <h1 className='text-2xl font-semibold drop-shadow-xl'>
                        En Room Squared, nos encargamos del alquiler de su vivienda y de toda la gestion.</h1>
                    <p className='drop-shadow-xl'>

                        Somos especialistas en la gestion de propiedades y en maximizar la rentabilidad de la misma, nos encargamos de todo para que no tengas que preocuparte de nada.
                    </p>
                    <Button variant='primary' size='lg'>Contacta con nosotros</Button>
                </div>
                <div className=' h-full flex justify-start items-center py-6'>
                    <video className='w-full'></video>
                </div>
            </div>
        </div>
    )
}

export default HomeSection