'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../images/arrow-top.svg";

export default function ScrollTopBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 w-[48px] h-[48px] flex items-center justify-center rounded-full border border-[#272A3C] bg-[#0C0E23]/70 backdrop-blur-md hover:bg-[#1a1e35] transition-colors duration-200 cursor-pointer shadow-lg"
                    aria-label="Scroll to top"
                >
                    <Image src={arrow} alt="Scroll to top" width={20} height={20} />
                </button>
            )}
        </>
    );
}
