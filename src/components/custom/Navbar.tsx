'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { navbarLinks } from '@/data/navbarLinks';
import logo from '../../../public/LogoR2.png';
import Image from 'next/image';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`h-[100px] bg-transparent fixed top-0 w-full z-50 p-6 flex justify-between items-center gap-6 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent text-white'}`}>
            <div>
                <Image src={logo} alt="R2R" width={100} height={100} />
            </div>
            <NavbarMobile />
            <div className='hidden md:flex items-center gap-4'>
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
        </div>
    );
}

export default Navbar;
