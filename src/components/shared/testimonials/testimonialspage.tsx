import { Container } from "@/components/shared/container";
import Link from "next/link";
import Image from "next/image";
import { reviews } from "@/data/testimonials";

export default function TestimonialsPage() {
    const leftReviews = reviews.slice(0, Math.ceil(reviews.length * 0.4));
    const rightReviews = reviews.slice(Math.ceil(reviews.length * 0.4));

    return (
        <Container className="pt-30 flex flex-col lg:flex-row gap-4">
            <div data-aos="fade-up" className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-[18px] font-semibold -tracking-tighter text-[#CBACF9]">
                    - TESTIMONIALS
                </h2>
                <h1 className="text-5xl tracking-[-2px] font-bold leading-tight mb-4 max-w-[720px]">
                    Hear what <span className="text-[#CBACF9]">our clients</span> say
                </h1>
                <p className="text-[#BEC1DD] text-[20px] mb-6">
                    Don’t just take our word for it. Here are a few (of many) reviews of{" "}
                    <Link href="/projects" className="underline">
                        My work
                    </Link>
                </p>

                {leftReviews.map((review, i) => (
                    <div
                        key={i}
                        className="w-full px-6 py-6 rounded-2xl border border-[#272A3C]"
                        style={{
                            background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)",
                        }}
                    >
                        <div className="mb-3 flex justify-between items-center">
                            <Link href="" className="w-[130px] h-8 block">
                                <Image
                                    src={review.companypic}
                                    alt="Company logo"
                                    width={130}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>

                            <p className="text-[#BEC1DD] text-[14px] leading-relaxed opacity-60">
                                #{review.type}
                            </p>
                        </div>

                        <p className="mb-6 text-[#BEC1DD] text-[18px] leading-relaxed">
                            “{review.text}”
                        </p>
                        <div className="text-[16px] font-semibold">{review.name}</div>
                        <div className="text-[14px] text-gray-400">{review.position}</div>
                    </div>
                ))}
            </div>

            <div data-aos="fade-down" className="w-full lg:w-1/2 flex flex-col gap-4">
                {rightReviews.map((review, i) => (
                    <div
                        key={i}
                        className="w-full px-6 py-6 rounded-2xl border border-[#272A3C]"
                        style={{
                            background: "linear-gradient(180deg, #161A31 0%, #06091F 100%)",
                        }}
                    >
                        <div className="mb-3 flex justify-between items-center">
                            <Link href="" className="w-[130px] h-8 block">
                                <Image
                                    src={review.companypic}
                                    alt="Company logo"
                                    width={130}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>

                            <p className="text-[#BEC1DD] text-[14px] leading-relaxed opacity-60">
                                #{review.type}
                            </p>
                        </div>
                        <p className="mb-6 text-[#BEC1DD] text-[18px] leading-relaxed">
                            “{review.text}”
                        </p>
                        <div className="text-[16px] font-semibold">{review.name}</div>
                        <div className="text-[14px] text-gray-400">{review.position}</div>
                    </div>
                ))}
            </div>
        </Container>


    );
}
