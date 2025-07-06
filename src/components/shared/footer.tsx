'use client';

import Image from "next/image";
import Link from "next/link";

import { Container } from "./container";
import { Button } from "../ui/button";

import arrow from "../../images/Arrow.svg";
import footergrid from "../../images/grid-pattern.png"

import instagramlogo from "../../images/instagram-logo.svg";
import githublogo from "../../images/github-logo.svg";
import whatsapplogo from "../../images/whatsapp.svg";

import { useRouter } from "next/navigation"

export default function Footer() {
    const router = useRouter()

    const handleContactClick = () => {
        router.push('/contact')
    }
    return (
        <div
            className='pt-[100px] pb-[57px] bg-contain bg-center bg-repeat-y w-full'
            style={{ backgroundImage: `url(${footergrid.src})` }}
            data-aos="fade-up"
        >
            <Container className="flex flex-col items-center justify-center">
                <h1 className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12 max-w-[720px]">
                    Let's build something <span className="text-[#CBACF9]">great together</span>
                </h1>
                <p className="text-[#BEC1DD] text-[16px] mb-[30px] text-center max-w-[520px]">
                    Have a project in mind or need help with your website? I’d like to hear about it. Let’s connect and bring your ideas to life.
                </p>


                <Button
                    className="mt-[30px] mb-[113px] px-[40px] py-[30px] text-[18px] leading-[1.2] flex items-center gap-4 rounded-2xl border border-[#272A3C] cursor-pointer select-none max-w-[239px]"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                    onClick={handleContactClick}
                    aria-label="Contact Me Now"
                >
                    Contact Me Now
                    <Image className='pt-[4px]' src={arrow} alt="arrow" />
                </Button>

                <div className="flex justify-between w-full items-center flex-wrap gap-5 footer-adaptive select-none">
                    <p className="text-[14.38px] font-thin">
                        Copyright ©2025 Yehor Kiiakh
                    </p>

                    <ul className="flex justify-between w-[160px]">
                        <Link href="https://www.instagram.com/estoniawebdevelopment/" target="_blank">
                            <li
                                className="rounded-[8px] border border-[#272A3C] w-10 h-10 flex items-center justify-center"
                                style={{
                                    boxShadow: "inset 0 0 8px 0.82px rgba(255, 255, 255, 0.12)"
                                }}
                            >
                                <Image src={instagramlogo} alt="Instagram" className="w-6 h-6" />
                            </li>
                        </Link>

                        <Link href="https://github.com/web-yehorkiiakh" target="_blank">
                            <li
                                className="rounded-[8px] border border-[#272A3C] w-10 h-10 flex items-center justify-center"
                                style={{
                                    boxShadow: "inset 0 0 8px 0.82px rgba(255, 255, 255, 0.12)"
                                }}
                            >
                                <Image src={githublogo} alt="Github" className="w-6 h-6" />
                            </li>
                        </Link>

                        <Link href="https://wa.me/+37253645159" target="_blank">
                            <li
                                className="rounded-[8px] border border-[#272A3C] w-10 h-10 flex items-center justify-center"
                                style={{
                                    boxShadow: "inset 0 0 8px 0.82px rgba(255, 255, 255, 0.12)"
                                }}
                            >
                                <Image src={whatsapplogo} alt="Instagram" className="w-6 h-6" />
                            </li>
                        </Link>
                    </ul>
                </div>
            </Container>

        </div>
    );
}
