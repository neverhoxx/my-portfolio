'use client';

import { useRouter } from "next/navigation";

import { Container } from "../container";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

import landingico from "../../../images/landing-icon.svg";
import caseico from "../../../images/case.svg";
import cartico from "../../../images/cart-ico.svg";
import adminico from "../../../images/admin-ico.svg";
import personico from "../../../images/person-ico.svg";
import telegramico from "../../../images/telegram-svgrepo-com.svg";
import designico from "../../../images/design-ico.svg";
import nextjsico from "../../../images/nextjs-ico.svg";
import arrow from "../../../images/Arrow.svg";


export default function AboutFeatures() {
    const router = useRouter()

    const handleContactClick = () => {
        router.push('/contact')
    }

    return (
        <Container className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
            <div data-aos="fade-down" className="w-full lg:w-1/2 relative">
                <h1 className="text-5xl lg:text-6xl tracking-[-2px] font-bold mt-6 mb-6 leading-tight adaptive-h1-hero">
                    What can <span className="text-[#CBACF9]">I build</span>
                </h1>
                <p className="mt-[30px] text-[#E4ECFF] max-w-[700px] adaptive-p-hero">
                    I create high-quality web solutions — from landing pages and online stores to full-stack apps and custom APIs. Whether it’s a simple portfolio or a complex admin panel, I’ve got it covered.
                </p>
                <div className="top-0 left-0 sticky">
                    <p
                        className="
                            select-none
                            font-black
                            text-[80px]
                            top-0
                            left-0
                            text-transparent
                            [-webkit-text-stroke:1px_#CBACF9]
                            
                            adaptive-p-faq

                            opacity-25
                            
                          "
                    >
                        MY SERVICES
                    </p>

                    <h1 className="text-2xl text-[#CBACF9] lg:text-3xl font-bold mt-1 leading-tight adaptive-h1-hero">
                        How fast?
                    </h1>

                    <Button
                        className="mt-[10px] px-[40px] py-[30px] text-[18px] leading-[1.2] flex items-center gap-4 rounded-2xl border border-[#272A3C] cursor-pointer select-none"
                        style={{
                            background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                        }}
                        onClick={handleContactClick}
                    >
                        Leave request or ask me
                        <Image className='pt-[4px]' src={arrow} alt="arrow" />
                    </Button>
                </div>



            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap gap-3 justify-center select-none">
                <Link
                    href=""
                    className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                    data-aos="fade-down"
                >
                    <Image className="w-16 h-16" src={landingico} alt="Landing Icon" />
                    <p className=" text-[#CBACF9] mt-4 text-lg font-semibold">Landing pages</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Fast and effective one-page websites for any purpose.</p>
                </Link>

                <Link data-aos="fade-down" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={caseico} alt="Business Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Business sites</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Professional websites to showcase your services or brand.</p>
                </Link>

                <Link data-aos="fade-down" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={cartico} alt="Store Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Online stores</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Functional and user-friendly eCommerce solutions.</p>
                </Link>

                <Link data-aos="fade-down" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={adminico} alt="Admin Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Control/admin panels</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Custom dashboards for data management and control.</p>
                </Link>

                <Link data-aos="fade-up" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={personico} alt="Portfolio Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Portfolio sites</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Personal websites to highlight your skills and work.</p>
                </Link>

                <Link data-aos="fade-up" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={telegramico} alt="Telegram Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Telegram bots</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Automation tools and integrations for Telegram users.</p>
                </Link>

                <Link data-aos="fade-up" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={designico} alt="Design Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Modern Web Design</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Clean and responsive UI design in Figma & code.</p>
                </Link>

                <Link data-aos="fade-up" href="" className="flex flex-col max-w-[250px] w-full min-h-[200px] p-5 rounded-2xl" style={{ background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)" }}>
                    <Image className="w-16 h-16" src={nextjsico} alt="Next.js Icon" />
                    <p className="text-[#CBACF9] mt-4 text-lg font-semibold">Full-fledged web app</p>
                    <p className="text-[#A0A3BD] text-sm mt-2">Scalable web applications with full frontend/backend logic.</p>
                </Link>

            </div>
        </Container>

    );
}