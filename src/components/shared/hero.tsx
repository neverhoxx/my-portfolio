'use client';

import Image from 'next/image';
import spotlightleft from '../../images/spotlight-left.png';
import spotlightright from '../../images/spotlight-right.png';
import gridpattern from '../../images/grid-pattern.png';

import arrow from '../../images/Arrow.svg';

import { Button } from '../ui/button';
import { Container } from './container';

import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter()

    const handleContactClick = () => {
        router.push('/projects')
    }

    return (
        <div
            className="relative min-h-screen w-full flex flex-col bg-repeat"
            style={{ backgroundImage: `url(${gridpattern.src})` }}
        >
            <div className="absolute left-0 z-0 select-none">
                <Image src={spotlightleft} alt="Spotlight left" />
            </div>
            <div className="absolute right-0 z-0 select-none">
                <Image src={spotlightright} alt="Spotlight right" />
            </div>

            <Container className="flex-1 flex items-center pt-[116px]">
                <div className="relative z-10 w-full flex flex-col items-center">
                    <h2 data-aos="fade-down" className="font-light text-sm tracking-widest uppercase">
                        Code. Design. Deliver.
                    </h2>
                    <h1 data-aos="fade-down" className="text-6xl tracking-[-2px] font-bold text-center mt-6 leading-tight adaptive-h1-hero">
                        I turn complex ideas into smooth, <span className='text-[#CBACF9]'>fast digital experiences</span>
                    </h1>
                    <p data-aos="fade-up" className="mt-[30px] text-[#E4ECFF] text-center max-w-[700px] adaptive-p-hero">
                        Hi, I’m Yehor Kiiakh — a web developer based in Estonia. I build responsive and performant web apps with React, Next.js, Python and modern tools.

                        <br />
                        <br />

                        <span data-aos="fade-up" className='text-[#CBACF9] font-bold'>From idea to delivery in 48 hours to 1 week.</span>
                    </p>

                    <Button
                        data-aos="fade-up"
                        className="mt-[30px] px-[40px] py-[30px] text-[18px] leading-[1.2] flex items-center gap-4 rounded-2xl border border-[#272A3C] cursor-pointer select-none"
                        style={{
                            background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                        }}
                        onClick={handleContactClick}
                    >
                        See my works
                        <Image className='pt-[4px]' src={arrow} alt="arrow" />
                    </Button>
                </div>
            </Container >
        </div >
    );
}
