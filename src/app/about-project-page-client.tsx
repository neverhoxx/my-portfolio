'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import arrow from '../images/Arrow.svg';

interface Project {
    [x: string]: any;
    slug: string;
}

export function AboutProjectPageClient({ project }: { project: Project }) {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <Container className="flex flex-col lg:flex-row pt-40 lg:pt-40 gap-10 lg:gap-4 px-4">
            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="sticky top-0">
                    <p className="select-none font-black text-[40px] sm:text-[60px] lg:text-[80px] text-transparent [-webkit-text-stroke:1px_#CBACF9] adaptive-p-faq opacity-50 leading-none">
                        About project
                    </p>

                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#CBACF9] font-bold mt-2 leading-tight adaptive-h1-hero">
                        Liked?
                    </h1>

                    <Button
                        className="mt-4 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg flex items-center gap-3 sm:gap-4 rounded-2xl border border-[#272A3C] cursor-pointer select-none hover:text-[#CBACF9] transition-colors duration-300"
                        style={{
                            background: 'linear-gradient(180deg, #161A31 0%, #06091F 100%)',
                        }}
                        onClick={handleContactClick}
                    >
                        Leave request or ask me
                        <Image
                            src={arrow}
                            alt="arrow"
                            className="pt-1"
                            width={20}
                            height={20}
                            priority
                        />
                    </Button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
                {project.about.split('\n\n').map((about: string, index: number) => (
                    <p
                        key={`paragraph-${index}`}
                        className="text-sm sm:text-base lg:text-[18px] text-[#BEC1DD] leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        {about}
                    </p>
                ))}

                <div className="mt-4 space-y-2 text-sm sm:text-base lg:text-[18px]">
                    <p>
                        <span className="font-bold select-none">Website type: </span>
                        Corporate website
                    </p>



                    <p>
                        <span className="font-bold select-none">Goal: </span>
                        Full-cycle development of the company’s website — from design to implementation and SEO
                    </p>



                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.href}
                        className="underline text-white text-base sm:text-lg lg:text-[20px] hover:text-[#CBACF9] select-none transition-colors duration-300"
                    >
                        {project.linktext}
                    </Link>

                </div>
            </div>
        </Container>
    );
}