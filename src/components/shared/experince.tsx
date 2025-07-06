import { Container } from "./container";
import Image from "next/image";

import expimg1 from "../../images/exp-img1.png";
import expimg2 from "../../images/exp-img2.png";
import expimg3 from "../../images/exp-img3.png";
import expimg4 from "../../images/exp-img4.png";
import Link from "next/link";


export default function Experience() {
    return (
        <div className="pb-[130px]">
            <h1 data-aos="fade-up" className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12">
                My <span className="text-[#CBACF9]">work experince</span>
            </h1>
            <Container className='flex flex-wrap justify-between gap-5 recent-project-adaptive'>
                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-center p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >

                    <Image className="select-none" src={expimg1} alt="Experience picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Frontend Developer – <Link href="done-projects/voltamp" className="underline">voltamp.ee</Link>
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            Designed and built a full production website using <Link href="react" className="underline">React</Link> and <Link href="nodejs" className="underline">Node.js</Link>. The site included responsive layouts, custom animations, and real content integration. Successfully delivered and purchased by a real client.
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-center p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-up"
                >

                    <Image className="select-none" src={expimg2} alt="Experience picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Freelance Developer – <span className="text-[#CBACF9]">Web & CMS</span>
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            Delivered multiple freelance projects including <Link href="wordpress" className="underline">WordPress</Link>-based websites and custom coded pages. Handled everything from design mockups to deployment, focusing on performance and user experience.
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-center p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >

                    <Image className="select-none" src={expimg3} alt="Experience picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Full-Stack Projects – <span className="text-[#CBACF9]">Python & PostgreSQL</span>
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            Developed backend features using <Link href="python" className="underline">Python</Link> and <Link href="postgresql" className="underline">PostgreSQL</Link>. Built secure APIs, user authentication, and data storage systems, integrating them into modern frontend interfaces with <Link href="react" className="underline">React</Link> and <Link href="nextjs" className="underline">Next.js</Link>.
                        </p>
                    </div>

                </div>

                <div
                    className="max-w-[600px] w-full min-h-[190px] h-full rounded-3xl border border-[#272A3C] gap-[30px] flex flex-wrap items-center justify-center p-[35px] exp-card-adaptive"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    data-aos="fade-down"
                >

                    <Image className="select-none" src={expimg4} alt="Experience picture" />

                    <div className="max-w-[371px]">
                        <h1 className="text-[26px] font-bold mb-[12px] exp-h1-adaptive">
                            Frontend Growth – <span className="text-[#CBACF9]">UI Design & Dev</span>
                        </h1>
                        <p className="text-[16px] exp-p-adaptive text-[#BEC1DD]">
                            Constantly improving in frontend development and UI design. Creating modern, accessible layouts using <Link href="figma" className="underline">Figma</Link> and implementing them with <Link href="react" className="underline">React</Link>, <Link href="tailwind" className="underline">Tailwind CSS</Link>, and component libraries like <Link href="shadcn" className="underline">shadcn/ui</Link>.
                        </p>
                    </div>

                </div>
            </Container>
        </div>


    );
}
