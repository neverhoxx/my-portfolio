'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ContactForm() {
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleFileRemove = () => {
        setFileName(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (

        <div
            className="shadow-xl p-6 sm:p-8 w-full max-w-xl select-none rounded-3xl border border-[#272A3C]"
            style={{ background: 'linear-gradient(180deg, #04071D 0%, #0C0E23 100%)' }}
        >
            <h2 className="text-3xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-2">
                Shall we discuss <span className='text-[#CBACF9]'>your project?</span>
            </h2>
            <p className="mb-6 text-center text-sm sm:text-base exp-p-adaptive text-[#bec1dd98]">
                Leave your contact information! Take the first step in growing your business!
            </p>
            <p className='text-red-900 text-[14px] mb-6 text-center'>Dont work rn. Write to <Link className="underline" href="https://wa.me/+37253645159" target="_blank">Whatsapp</Link> or Email</p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="border border-[#272A3C] rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#cbacf98a]"
                    />
                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="border border-[#272A3C] rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#cbacf98a]"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="border border-[#272A3C] rounded-xl p-3 w-full sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#cbacf98a]"
                    />
                </div>

                <textarea
                    placeholder="Идеи и комментарии"
                    className="w-full border border-[#272A3C] rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#cbacf98a]"
                ></textarea>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="consent" className="w-5 h-5 border border-[#272A3C] rounded-xl accent-[#272A3C]" />
                    <label htmlFor="consent" className="text-sm text-[#bec1dd98]">
                        Consent to the processing of personal data
                    </label>
                </div>

                <div>
                    <label className="flex flex-col items-start">
                        <span className="mb-2 text-sm text-[#bec1dd98]">Attach file</span>
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            className="cursor-pointer file:cursor-pointer block w-full text-sm text-[#bec1dd98] file:mr-4 file:py-2 file:px-8 file:rounded-2xl file:border file:border-[#272A3C] file:text-sm file:font-semibold file:bg-[#06091F] file:text-[#bec1dd] hover:file:opacity-70"
                        />
                    </label>

                    {fileName && (
                        <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
                            <p className="text-sm text-[#bec1dd98] break-all">You choosed: {fileName}</p>
                            <Button
                                type="button"
                                onClick={handleFileRemove}
                                className="text-red-700 hover:underline text-sm cursor-pointer"

                            >
                                Remove file
                            </Button>
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full text-white font-semibold px-[30px] py-[20px] hover:opacity-70 transition rounded-2xl border border-[#272A3C] cursor-pointer"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                >
                    Contact me
                </Button>
            </form>
        </div>
    );
}
