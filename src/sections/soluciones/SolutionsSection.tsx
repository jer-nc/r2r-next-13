import { Button } from '@/components/ui/button'
import React from 'react'
import solutions from '../../../public/solutions.svg'
import Image from 'next/image'

const SolutionsSection = () => {
    return (
        <div className='bg-white h-[700px] w-full py-8'>
            <div className='mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-12 h-full px-4'>
                <div className='h-full flex flex-col justify-center items-center space-y-6'>
                    <h1 className='text-2xl font-semibold '>¿Quiere tener el inquilino ideal?</h1>
                    <p className='text-xl font-semibold '>¡Revalorice su vivienda y aumente su rentabilidad, despreocupese de los problemas de el alquiler tradicional!</p>
                    <p className='text-md '>En Room Squared  le ofrecemos la oportunidad de revalorizar su inmueble, aumentar su rentabilidad hasta un 50% y olvidarse de toda la gestión. Garantizamos la maxima tranquilidad y comodidad al propietario.</p>
                    <Button variant='primary' size='lg'>¿Quiere tener al inquilino ideal?</Button>
                </div>
                <div className=' h-full flex justify-start items-center'>
                    <Image src={solutions} alt="test" className='h-36 md:h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default SolutionsSection