import { Container } from "./container";
import Link from "next/link";

export default function Approach() {
    return (
        <Container className="">
            <h1 data-aos="fade-up" className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12">
                The Way <span className="text-[#CBACF9]">I Build</span>
            </h1>

            <div data-aos="fade-down" className="flex flex-wrap justify-center gap-8 mt-[60px] select-none">
                <div
                    className="max-w-[387px] w-full min-h-[500px] h-full rounded-3xl border border-[#272A3C] flex flex-col items-center justify-center p-[10px]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                >
                    <div
                        className="text-[#CBACF9] px-5 py-3 mb-[14px] border border-[#272A3C] rounded-[11px]"
                        style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    >
                        Phase 1
                    </div>
                    <h1 className="text-[32px] font-bold text-center mb-5">
                        Planning & Research
                    </h1>
                    <p className="text-[16px] text-[#E4ECFF] text-center">
                        Before writing code, I dive into understanding the project's goals and audience. I explore tech requirements, sketch ideas, and define a clear structure to work efficiently.
                    </p>
                </div>

                <div
                    className="max-w-[387px] w-full min-h-[500px] h-full rounded-3xl border border-[#272A3C] flex flex-col items-center justify-center p-[10px]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                >
                    <div
                        className="text-[#CBACF9] px-5 py-3 mb-[14px] border border-[#272A3C] rounded-[11px]"
                        style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    >
                        Phase 2
                    </div>
                    <h1 className="text-[32px] font-bold text-center mb-5">
                        Design & Development
                    </h1>
                    <p className="text-[16px] text-[#E4ECFF] text-center">
                        I build responsive and accessible UIs using <Link href="react" className="underline">React</Link>, <Link href="nextjs" className="underline">Next.js</Link>, and <Link href="tailwind" className="underline">Tailwind</Link>. Every component is coded with scalability and performance in mind, following clean and modern design principles.
                    </p>
                </div>

                <div
                    className="max-w-[387px] w-full min-h-[500px] h-full rounded-3xl border border-[#272A3C] flex flex-col items-center justify-center p-[10px]"
                    style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                >
                    <div
                        className="text-[#CBACF9] px-5 py-3 mb-[14px] border border-[#272A3C] rounded-[11px]"
                        style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
                    >
                        Phase 3
                    </div>
                    <h1 className="text-[32px] font-bold text-center mb-5">
                        Testing & Delivery
                    </h1>
                    <p className="text-[16px] text-[#E4ECFF] text-center">
                        I test on multiple devices, fix bugs, and polish animations and details. Once everything is stable, I deploy the project and connect it to a custom domain.
                    </p>
                </div>
            </div>
        </Container>
    );
}