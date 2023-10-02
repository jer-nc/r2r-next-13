'use client'
import React, { useState } from 'react'
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
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

const FormContact = () => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

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

    async function onSubmit(values: z.infer<typeof contactSchema>) {
        const lambdaUrl = process.env.NEXT_PUBLIC_LAMBDA_URL;
        console.log(values);
        // console.log(lambdaUrl);

        try {
            if (lambdaUrl) {
                const response = await fetch(lambdaUrl, {
                    method: "POST",
                    body: JSON.stringify(values),
                }).then(res => res.json())
                    .then(data => console.log(data))
                    .then(() => {
                        setLoading(false)
                        form.reset()
                        handleShowToaster()
                    })
                    .catch(err => console.log(err))
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleShowToaster = () => {
        toast({
            title: "Mensaje enviado correctamente",
            description: "Nos pondremos en contacto contigo lo antes posible.",
        })
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
                                <Input disabled={loading} placeholder="Nombre" {...field} />
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
                                <Input disabled={loading} placeholder="Correo electrónico" {...field} />
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
                                <Input disabled={loading} type='number' placeholder="+ 34" {...field} />
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
                                    <Input disabled={loading} placeholder="Tu ciudad" {...field} />
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
                                    <Input disabled={loading} placeholder="Tu zona" {...field} />
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
                                <Textarea disabled={loading} className='resize-none h-[200px]' placeholder="Comentario opcional" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {
                    !loading ? <Button type="submit" variant='primary' className='py-6 w-full'>Enviar</Button> : (
                        <Button disabled type="submit" variant='primary' className='py-6 w-full'>
                            Enviando...
                        </Button>
                    )
                }
            </form>
            <Toaster />
        </Form>
    )
}

export default FormContact