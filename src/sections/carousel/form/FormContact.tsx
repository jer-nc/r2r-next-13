'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { contactSchema } from './contactSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const FormContact = () => {

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            city: "",
            zone: "",
            details: "",
        },
    })

    function onSubmit(values: z.infer<typeof contactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 p-8 bg-white rounded-lg border">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-gray-900'>Nombre <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-gray-900'>Email <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input placeholder="Correo electrónico" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-gray-900'>Teléfono <span className='text-red-500'>*</span></FormLabel>
                            <FormControl>
                                <Input type='number' placeholder="+ 34" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-900'>Ciudad <span className='text-red-500'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu ciudad" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-gray-900'>Zona <span className='text-red-500'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu zona" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Detalles</FormLabel>
                            <FormControl>
                                <Textarea className='resize-none h-[200px]' placeholder="Comentario opcional" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant='primary' className='py-6 w-full'>Contactar</Button>
            </form>
        </Form>
    )
}

export default FormContact