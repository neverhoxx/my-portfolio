import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";

import ukrpic1 from "../../../images/ukraine.svg";
import locationpic from "../../../images/locationpic.svg";
import schoolpic from "../../../images/school.svg";
import languagepic from "../../../images/language.svg";
import stackpic from "../../../images/stackpic.svg";
import telegrampic from "../../../images/telegram.svg";

import { DiReact, DiNodejs, DiPython, DiPostgresql, DiWordpress, } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiThreedotjs, } from 'react-icons/si';

export default function Facts() {

    return (
        <div className="pb-[130px] pt-[50px]">
            <h1 data-aos="fade-up" className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12">
                Quick <span className="text-[#CBACF9]">Facts</span>
            </h1>
            <Container className='flex flex-wrap justify-between gap-5 recent-project-adaptive'>
                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >

                    <Image className="select-none max-w-[98px] max-h-[98px]" src={ukrpic1} alt="Ukraine picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Nationality:
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            <span className="flag-icon flag-icon-ua mr-1"></span>Ukrainian
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >

                    <Image className="select-none max-w-[98px] max-h-[98px]" src={locationpic} alt="Location picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Based in:
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            <span className="flag-icon flag-icon-ee mr-1"></span>Tallinn, Estonia
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >

                    <Image className="select-none max-w-[98px] max-h-[98px]" src={schoolpic} alt="School picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Studying at:
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            <Link target="_blank" href="https://tptlive.ee" className="underline">Tallinn Polytechnic School</Link>
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >

                    <Image className="select-none max-w-[98px] max-h-[98px]" src={languagepic} alt="Languages picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Languages:
                        </h1>
                        <div className="flex flex-wrap gap-4 items-center text-[#BEC1DD] text-[16px]">
                            <span className="flex items-center gap-2">
                                <span className="flag-icon flag-icon-gb"></span> English
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="flag-icon flag-icon-ee"></span> Estonian
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="flag-icon flag-icon-ua"></span> Ukrainian
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="flag-icon flag-icon-ru"></span> Russian
                            </span>
                        </div>

                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >
                    <Image className="select-none max-w-[98px] max-h-[98px]" src={stackpic} alt="Stack picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">Stack:</h1>

                        <ul className="text-[16px] exp-p-adaptive text-[#BEC1DD] flex gap-2 flex-wrap">
                            <li className="flex items-center gap-2">
                                <DiReact size={20} color="#61dafb" />
                                React
                            </li>
                            <li className="flex items-center gap-2">
                                <SiNextdotjs size={20} color="white" />
                                Next.js
                            </li>
                            <li className="flex items-center gap-2">
                                <DiNodejs size={20} color="#3C873A" />
                                Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <DiPython size={20} color="#3572A5" />
                                Python
                            </li>
                            <li className="flex items-center gap-2">
                                <DiPostgresql size={20} color="#336791" />
                                PostgreSQL
                            </li>
                            <li className="flex items-center gap-2">
                                <SiTailwindcss size={20} color="#38B2AC" />
                                Tailwind CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <DiWordpress size={20} color="#21759B" />
                                WordPress
                            </li>
                            <li className="flex items-center gap-2">
                                <SiThreedotjs size={20} color="#FFFFFF" />
                                Three.js
                            </li>
                            <li className="flex items-center gap-2">
                                GSAP
                            </li>
                            <li className="flex items-center gap-2">
                                <SiTypescript size={20} color="#3178C6" />
                                TypeScript
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="max-w-[600px] w-full min-h-[211px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-start p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >

                    <Image className="select-none max-w-[98px] max-h-[98px]" src={telegrampic} alt="Telegram logo" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">

                            Telegram Bots:
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD] flex gap-1">

                            Yes! With Python<DiPython size={24} color="#3572A5" />
                        </p>
                    </div>

                </div>
            </Container>
        </div>
    );
}
