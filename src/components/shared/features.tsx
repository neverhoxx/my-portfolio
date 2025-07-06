'use client';

import { Container } from "./container";

import boximage from "../../images/box.png";
import boximage2 from "../../images/box2.png";
import boximage3 from "../../images/box3.png";
import boximage4 from "../../images/box4.png";
import boximage5 from "../../images/box5.png";
import boximage6 from "../../images/box6.png";

import { Button } from "../ui/button";
import Image from "next/image";

import email from "../../images/Card.svg";
import checkmark from "../../images/check-mark.svg";


import { useState } from 'react';

export default function Features() {
    const [copied, setCopied] = useState(false);
    const textToCopy = 'web.yehor.kiiakh@gmail.com';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Copy error', err);
        }
    };

    return (
        <Container>
            <div className='flex flex-col flex-auto-1 py-[50px] gap-[18.5px]' >
                <div data-aos="fade-up" className="flex flex-wrap gap-[15px]">
                    <div className="basis-[689px] grow shrink min-h-[541px] rounded-[23px] bg-cover bg-center bg-no-repeat flex py-[60px] items-end px-10 tracking-[0.06em] relative"
                        style={{ backgroundImage: `url(${boximage.src})` }}
                    >
                        <h1 className="max-w-[500px] text-[32px] font-bold adaptive-h1">
                            Collaboration is key — I work closely with clients, turning ideas into polished digital experiences.
                        </h1>

                        <p className="absolute bottom-1 right-3 !text-[#C1C2D3] text-[10px] select-none opacity-50">
                            Photo by Renat Usmanov on Figma
                        </p>
                    </div>
                    <div className="basis-[521px] grow shrink min-h-[541px] flex flex-col gap-[15px]">
                        <div className="h-1/2 rounded-[23px] bg-cover bg-center bg-no-repeat flex py-[40px] items-start px-10 "
                            style={{ backgroundImage: `url(${boximage2.src})` }}
                        >
                            <h1 className="max-w-[411px] text-[32px] font-bold adaptive-h1">
                                I’m very flexible with time zone communications
                            </h1>
                        </div>
                        <div className="h-1/2 rounded-[23px] bg-cover bg-center bg-no-repeat flex flex-col py-[60px] items-start justify-center pl-10"
                            style={{ backgroundImage: `url(${boximage3.src})` }}
                        >
                            <h2 className="text-[14px] !text-[#C1C2D3] font-normal">
                                Always evolving
                            </h2>
                            <h1 className="max-w-[400px] text-[32px] font-bold adaptive-h1">
                                My current tech stack
                            </h1>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="flex flex-wrap gap-[15px]">
                    <div className="basis-[351px] grow shrink min-h-[390px] flex flex-col gap-[15px]">
                        <div className="h-1/2 rounded-[23px] bg-cover bg-center bg-no-repeat flex py-[29px] pl-[28px] pr-[22px] items-start"
                            style={{ backgroundImage: `url(${boximage4.src})` }}
                        >
                            <h1 className="max-w-[301px] text-2xl font-bold adaptive-h1">
                                Tech enthusiast with a passion for development.
                            </h1>
                        </div>
                        <div className="h-1/2 rounded-[23px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
                            style={{ backgroundImage: `url(${boximage5.src})` }}
                        >
                            <h1 className="max-w-[241px] text-2xl font-bold adaptive-h1">
                                Start your project with me.
                            </h1>

                            <Button
                                className="mt-[12px] px-[30px] py-[25px] text-[14px] leading-[1.2] flex items-center gap-2 rounded-2xl border border-[#272A3C] cursor-pointer select-none"
                                style={{
                                    background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                                }}
                                onClick={handleCopy}
                            >
                                {copied ? <Image className='h-[14px] w-[14px]' src={checkmark} alt="Copy" /> : <Image className='' src={email} alt="Copy" />}

                                {copied ? 'Copied!' : 'Copy my email address'}

                            </Button>
                        </div>
                    </div>
                    <div className="basis-[859px] grow shrink min-h-[390px] rounded-[23px] bg-cover bg-center bg-no-repeat flex flex-col py-[60px] items-start justify-center px-10"
                        style={{ backgroundImage: `url(${boximage6.src})` }}
                    >
                        <h2 className="text-[14px] !text-[#C1C2D3] font-normal">
                            Innovative Solutions
                        </h2>
                        <h1 className="max-w-[500px] text-[32px] font-bold adaptive-h1">
                            Crafting digital landscapes where creativity meets code.
                        </h1>
                    </div>
                </div>
            </div>
        </Container >
    );
}