'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NotFound() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div
            className="flex h-screen justify-center items-center flex-col text-center px-4"
            data-aos="fade-up"
        >
            <h1 className="text-8xl font-bold text-[#CBACF9] mb-4">404</h1>
            <p className="text-xl text-[#BEC1DD] mb-6">Page not found</p>
            <a
                href="/"
                className="text-[#CBACF9] text-sm border border-[#CBACF9] px-5 py-2 rounded-full transition-all hover:bg-[#000] hover:text-black"
            >
                Back to home
            </a>
        </div>
    );
}
