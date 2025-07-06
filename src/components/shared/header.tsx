'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About me' },
        { href: '/projects', label: 'Projects' },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="z-50 absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[640px] bg-[#0C0E23] border border-[#272A3C] rounded-2xl px-6 py-4 shadow-md backdrop-blur-sm">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-[#BEC1DD] font-medium">
                {links.map(({ href, label }) => (
                    <li key={href} className="relative">
                        <Link
                            href={href}
                            className={`transition-colors duration-200 hover:text-white ${pathname === href ? 'text-white' : ''
                                }`}
                        >
                            {label}
                        </Link>
                        {pathname === href && (
                            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white rounded-full" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
