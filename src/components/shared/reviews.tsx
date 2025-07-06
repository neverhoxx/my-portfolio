'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Container } from "./container";

import Autoplay from "embla-carousel-autoplay";
import { reviews } from "@/data/testimonials";

export default function Reviews() {
    return (
        <Container className="pb-[174px]">
            <h1 data-aos="fade-up" className="text-5xl tracking-[-2px] font-bold text-center leading-tight adaptive-h1-hero mb-12">

                Kind words from <span className="text-[#CBACF9]">satisfied clients</span>
            </h1>
            <Carousel
                className="w-full max-w-[910px] mx-auto"
                data-aos="fade-up"
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent className="w-full gap-6 select-none">
                    {reviews.map((review, index) => (
                        <CarouselItem
                            key={index}
                            className="w-full"
                        >
                            <div
                                className="p-10 w-full rounded-2xl bg-gradient-to-b from-[#04071D] to-[#0C0E23] shadow-lg text-white exp-card-adaptive"
                            >
                                <p className="text-[20px] mb-6 leading-relaxed">
                                    “{review.text}”
                                </p>
                                <div className="text-[16px] font-semibold">
                                    {review.name}
                                </div>
                                <div className="text-[14px] text-gray-400">
                                    {review.position}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="adaptive-arrows" />
                <CarouselNext className="adaptive-arrows" />
            </Carousel>
        </Container>
    );
}
