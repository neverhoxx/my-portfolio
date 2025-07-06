'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';

import arrow from "../images/Arrow.svg";

export function AboutProjectPageClient({ project }: { project: any }) {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <Container className="flex pt-40 lg:flex-row gap-4 relative">
            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="top-0 left-0 sticky">
                    <p className="select-none font-black text-[80px] text-transparent [-webkit-text-stroke:1px_#CBACF9] adaptive-p-faq opacity-50">
                        About project
                    </p>

                    <h1 className="text-2xl text-[#CBACF9] lg:text-3xl font-bold mt-1 leading-tight adaptive-h1-hero">
                        Liked?
                    </h1>

                    <Button
                        className="mt-[10px] px-[40px] py-[30px] text-[18px] leading-[1.2] flex items-center gap-4 rounded-2xl border border-[#272A3C] cursor-pointer select-none hover:text-[#CBACF9]"
                        style={{
                            background: 'linear-gradient(180deg, #161A31 0%, #06091F 100%)',
                        }}
                        onClick={handleContactClick}
                    >
                        Leave request or ask me
                        <Image className="pt-[4px]" src={arrow} alt="arrow" />
                    </Button>
                </div>
            </div>

            <div data-aos="fade-down" className="w-full lg:w-1/2 flex flex-col ">
                {project.about.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 text-[#BEC1DD] leading-relaxed text-[18px]">
                        {paragraph}
                    </p>
                ))}

                <p className="mt-4 mb-2">
                    <span className="font-bold text-[18px] select-none">Website type: </span>
                    Corporate website
                </p>

                <p className="mb-2">
                    <span className="font-bold text-[18px] select-none">Goal: </span>
                    Full-cycle development of the company’s website — from design to implementation and SEO
                </p>

                <Link
                    target="_blank"
                    href="https://voltamp.ee"
                    className="underline text-[20px] max-w-25 select-none !text-white hover:text-[#CBACF9]"
                >
                    voltamp.ee
                </Link>
            </div>
        </Container>
    );
}
