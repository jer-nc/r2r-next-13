import React from 'react'
import { Button } from '../ui/button';
import { navbarLinks } from '@/data/navbarLinks';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {MenuIcon} from 'lucide-react'

const NavbarMobile = () => {

    return (

        <>
            <Popover >
                <PopoverTrigger className='md:hidden' asChild>
                    <Button variant='ghost' size='icon'>
                        <MenuIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 md:hidden mr-4">
                    
            <div className='grid  md:hidden items-center gap-4'>
                {navbarLinks.map((link, index) => {
                    if (link.type === 'link') {
                        return (
                            <a key={index} href={link.href} style={{ scrollBehavior: 'smooth' }} className='scroll-smooth'>
                                {link.title}
                            </a>
                        );
                    } else if (link.type === 'button') {
                        return (
                            <Button variant='primary' size='lg' key={index} onClick={() => window.location.href = link.href}>
                                {link.title}
                            </Button>
                        );
                    }
                    return null;
                })}
            </div>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default NavbarMobile