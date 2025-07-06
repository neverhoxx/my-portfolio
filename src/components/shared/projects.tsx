import { Container } from "./container";
import Image from "next/image";

import cardphoto from "../../images/Card1.png";
import cardphoto2 from "../../images/Card2.png";
import cardphoto3 from "../../images/Card3.png";
import cardphoto4 from "../../images/Card4.png";

import Link from "next/link";

import reactlogo from "../../images/react-logo.svg";
import jslogo from "../../images/js-logo.svg";
import csslogo from "../../images/css-logo.svg";
import nodejslogo from "../../images/nodejs-logo.svg";
import emailjslogo from "../../images/emailjs-logo.png";
import arrow from '../../images/Arrow.svg';

export default function RecentProjects() {
    return (
        <div className='pt-[100px] pb-[150px]'>
            <h1 data-aos="fade-up" className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12">
                A small selection of <span className="text-[#CBACF9]">recent projects</span>
            </h1>
            <Container className="flex flex-wrap justify-between gap-5 recent-project-adaptive">
                <div
                    className="max-w-[600px] w-full max-h-[618px] h-full rounded-3xl py-9 px-6 border border-[#272A3C]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >
                    <div className="max-w-[552px] w-full h-auto mb-9 select-none">
                        <Image
                            src={cardphoto}
                            alt="Voltamp"
                            className="w-full h-auto object-cover rounded-[23px]"
                        />
                    </div>
                    <h1 className="font-bold text-[28px]">
                        Voltamp OÜ - Home page
                    </h1>
                    <p className="text-[#BEC1DD] text-[20px]">
                        Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-[2px] md:gap-0 select-none">
                        <ul className="relative flex justify-between h-[50px] w-full md:w-[210px] md:justify-start">
                            <li className="md:absolute md:left-0 md:z-10 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={reactlogo} alt="React Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[40px] md:z-20 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={jslogo} alt="JS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[80px] md:z-30 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={csslogo} alt="CSS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[120px] md:z-40 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={nodejslogo} alt="Node.js Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[160px] md:z-50">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={emailjslogo} alt="EmailJS Logo" />
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href="https://voltamp.ee"
                            className="flex items-center text-[20px] text-[#CBACF9] gap-2 justify-center md:justify-start"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Check Live Site
                            <Image className="pt-[4px]" src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>

                <div
                    className="max-w-[600px] w-full max-h-[618px] h-full rounded-3xl py-9 px-6 border border-[#272A3C]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >
                    <div className="max-w-[552px] w-full h-auto mb-9 select-none">
                        <Image
                            src={cardphoto2}
                            alt="Voltamp"
                            className="w-full h-auto object-cover rounded-[23px]"
                        />
                    </div>
                    <h1 className="font-bold text-[28px]">
                        Yoom - Video Conferencing App
                    </h1>
                    <p className="text-[#BEC1DD] text-[20px]">
                        Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-[2px] md:gap-0 select-none">
                        <ul className="relative flex justify-between h-[50px] w-full md:w-[210px] md:justify-start">
                            <li className="md:absolute md:left-0 md:z-10 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={reactlogo} alt="React Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[40px] md:z-20 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={jslogo} alt="JS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[80px] md:z-30 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={csslogo} alt="CSS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[120px] md:z-40 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={nodejslogo} alt="Node.js Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[160px] md:z-50">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={emailjslogo} alt="EmailJS Logo" />
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href=""
                            className="flex items-center text-[20px] text-[#CBACF9] gap-2 justify-center md:justify-start"
                        >
                            Check Live Site
                            <Image className="pt-[4px]" src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>

                <div
                    className="max-w-[600px] w-full max-h-[618px] h-full rounded-3xl py-9 px-6 border border-[#272A3C]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >
                    <div className="max-w-[552px] w-full h-auto mb-9 select-none">
                        <Image
                            src={cardphoto3}
                            alt="Voltamp"
                            className="w-full h-auto object-cover rounded-[23px]"
                        />
                    </div>
                    <h1 className="font-bold text-[28px]">
                        AI Image SaaS - Canva Application
                    </h1>
                    <p className="text-[#BEC1DD] text-[20px]">
                        A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-[2px] md:gap-0 select-none">
                        <ul className="relative flex justify-between h-[50px] w-full md:w-[210px] md:justify-start">
                            <li className="md:absolute md:left-0 md:z-10 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={reactlogo} alt="React Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[40px] md:z-20 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={jslogo} alt="JS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[80px] md:z-30 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={csslogo} alt="CSS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[120px] md:z-40 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={nodejslogo} alt="Node.js Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[160px] md:z-50">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={emailjslogo} alt="EmailJS Logo" />
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href=""
                            className="flex items-center text-[20px] text-[#CBACF9] gap-2 justify-center md:justify-start"
                        >
                            Check Live Site
                            <Image className="pt-[4px]" src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>

                <div
                    className="max-w-[600px] w-full max-h-[618px] h-full rounded-3xl py-9 px-6 border border-[#272A3C]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >
                    <div className="max-w-[552px] w-full h-auto mb-9 select-none">
                        <Image
                            src={cardphoto4}
                            alt="Voltamp"
                            className="w-full h-auto object-cover rounded-[23px]"
                        />
                    </div>
                    <h1 className="font-bold text-[28px]">
                        Animated Apple Iphone 3D Website
                    </h1>
                    <p className="text-[#BEC1DD] text-[20px]">
                        Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-[2px] md:gap-0 select-none">
                        <ul className="relative flex justify-between h-[50px] w-full md:w-[210px] md:justify-start">
                            <li className="md:absolute md:left-0 md:z-10 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={reactlogo} alt="React Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[40px] md:z-20 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={jslogo} alt="JS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[80px] md:z-30 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={csslogo} alt="CSS Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[120px] md:z-40 md:mr-0">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={nodejslogo} alt="Node.js Logo" />
                                    </div>
                                </Link>
                            </li>
                            <li className="md:absolute md:left-[160px] md:z-50">
                                <Link
                                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#272A3C]"
                                    href=""
                                    style={{
                                        background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)',
                                    }}
                                >
                                    <div className="w-[24px] h-[24px]">
                                        <Image className="object-cover" src={emailjslogo} alt="EmailJS Logo" />
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <Link
                            href=""
                            className="flex items-center text-[20px] text-[#CBACF9] gap-2 justify-center md:justify-start"
                        >
                            Check Live Site
                            <Image className="pt-[4px]" src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>


            </Container>

        </div>
    );
}