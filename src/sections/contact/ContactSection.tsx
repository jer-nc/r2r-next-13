import React from 'react'
import FormContact from '../carousel/form/FormContact'

const ContactSection = () => {
    return (
        <div className=' h-full w-full py-10'>
            <div className='mx-auto max-w-[1300px] h-full px-4'>
                <div className='h-full justify-center items-center space-y-6'>
                    <h1 className='text-4xl font-semibold text-center'>Contacta con nosotros</h1>
                    <p className='text-muted-foreground text-center'>Estamos a su disposición para responder cualquier pregunta, no dudes en contactarnos.</p>
                    <div className='grid grid-cols-1 gap-6 max-w-[650px] mx-auto pt-8'>
                        <FormContact />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection