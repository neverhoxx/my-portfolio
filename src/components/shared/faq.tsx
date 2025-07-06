import { Container } from "./container";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
    return (
        <Container className="py-20 relative">
            <h1 data-aos="fade-down" className="text-6xl tracking-[-2px] font-bold mt-6 mb-6 leading-tight adaptive-h1-hero">
                Answers to the <span className='text-[#CBACF9]'>most frequently asked questions</span>
            </h1>

            <Accordion className="w-[80%] adaptive-faq" type="single" collapsible>
                <AccordionItem
                    className="rounded-t-2xl border border-[#272A3C] p-5"
                    value="item-1"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                >
                    <AccordionTrigger className="cursor-pointer select-none">WHAT SHOULD I DO IF I DON'T HAVE A TECHNICAL REQUIREMENT?</AccordionTrigger>
                    <AccordionContent className="bg-[#161A31] rounded-2xl border border-[#272A3C] p-5">
                        You can safely leave a request ✉️ on my website or by writing to me by email without having a ready-made technical task. After discussing the details of the project and identifying your needs taking into account all your wishes, I will draw it up for you as part of the website development. ☝️ If the technical task is drawn up clearly and in detail, I will understand the tasks set before us. This means that the result will satisfy both you and me.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="border border-[#272A3C] p-5 cursor-pointer"
                    value="item-2"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                >
                    <AccordionTrigger className="cursor-pointer select-none">DO YOU PROVIDE TECHNICAL SUPPORT AFTER THE WEBSITE IS DEVELOPED?</AccordionTrigger>
                    <AccordionContent className="bg-[#161A31] rounded-2xl border border-[#272A3C] p-3">
                        Of course ✅ Moreover, I am not limited by time frames, but provide project support indefinitely. You can contact me at any time after the development of your site for any adjustments or for advice.
                        <br />
                        <br />
                        <span className="text-red-700">! IMPORTANT</span>: technical support involves troubleshooting website elements or functionality that were provided for in the terms of reference. ☝️ If after the development of the site you want to add new visual or functional elements - this is considered a separate front of work, which is also estimated separately.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="rounded-b-2xl border border-[#272A3C] p-5 cursor-pointer"
                    value="item-3"
                    style={{
                        background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)"
                    }}
                >
                    <AccordionTrigger className="cursor-pointer select-none">CAN YOU DO JUST A DESIGN FOR MY SITE?</AccordionTrigger>
                    <AccordionContent className="bg-[#161A31] rounded-2xl border border-[#272A3C] p-3">
                        No problem ✅ I do both individual types of work, such as: design, layout, integration with CMS, writing or translating text, and comprehensive development of turnkey websites. When implementing a separate stage of work, I will contact your specialists and discuss all technical issues ☝️ so that their further work is as comfortable and productive as possible. To discuss your task, write to me ✏️ or leave a request.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <p
                className="
                            [writing-mode:vertical-rl]
                            absolute
                            select-none
                            font-black
                            text-[150px]
                            top-1/2
                            -translate-y-1/2
                            right-0
                            text-transparent
                            [-webkit-text-stroke:4px_#CBACF9]
                            text-center
                            adaptive-p-faq
                          "
            >
                FAQ
            </p>
        </Container>
    );
}