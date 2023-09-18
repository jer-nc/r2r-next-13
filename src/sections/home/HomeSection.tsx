import { Button } from '@/components/ui/button'
import React from 'react'

const HomeSection = () => {
    // url image: https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    const backgroundImageUrl = 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    return (
        <div id='home' className='relative md:h-[100vh] w-full py-6 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        {/* Agregamos un div adicional para el overlay */}
        <div className='absolute inset-0  bg-gradient-to-r from-black via-black/50 to-transparent opacity-80'></div>
        <div className='mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-6 h-full px-4'>
            <div className='mt-14 md:mt-0 h-full flex flex-col justify-center items-center space-y-6 text-white relative z-10'>
                <h1 className='text-2xl font-semibold drop-shadow-xl'>¡Revalorice su vivienda y aumente su rentabilidad, despreocúpese de los problemas del alquiler tradicional!</h1>
                <p className='drop-shadow-xl'>En RoomToRent le ofrecemos la oportunidad de revalorizar su inmueble y aumentar su rentabilidad hasta un 60%. Garantizamos la máxima tranquilidad y comodidad al propietario.</p>
                <Button variant='primary' size='lg'>Valorar mi propiedad</Button>
            </div>
            <div className=' h-full flex justify-start items-center py-6'>
                <video className='w-full'></video>
            </div>
        </div>
    </div>
    )
}

export default HomeSection