import Image from 'next/image';

import gridpattern from '../../../images/grid-pattern.png';
import arrow from '../../../images/Arrow.svg';
import mypic from '../../../images/my-pic.jpg'

import { Button } from '../../ui/button';
import { Container } from '../container';



export default function AboutHero() {
    return (
        <div
            className="relative min-h-screen w-full flex flex-col bg-repeat"
            style={{ backgroundImage: `url(${gridpattern.src})` }}

        >
            <Container className="flex-1 flex justify-between items-center pt-[130px] flex-wrap-reverse gap-5">
                <div className="w-full pr-10 max-w-[700px]">
                    <h1 data-aos="fade-down" className='text-6xl tracking-[-2px] font-bold mt-6 leading-tight adaptive-h1-hero'>
                        Who <span className='text-[#CBACF9]'>I Am</span>
                    </h1>

                    <p data-aos="fade-up" className='mt-[30px] text-[#E4ECFF] adaptive-p-hero'>
                        Hi, I'm Yehor Kiiakh — a Ukrainian full-stack developer currently living in Estonia and studying at Tallinn Polytechnic School.

                        I specialize in building fast, responsive, and functional websites using modern technologies like React, Next.js, Node.js, and Tailwind CSS. I also create custom Telegram bots with Python, automate tasks, and deploy complete web solutions to production.

                        I'm open to all kinds of web-related work — from landing pages and online stores to dashboards, admin panels, and full-stack apps.

                    </p>
                </div>
                <div data-aos="fade-up" className="select-none max-w-[416px] max-h-[416px] min-w-[300px] ">
                    <Image src={mypic} alt='My picture' className='rounded-full' />
                </div>

            </Container >
        </div >
    );
}
