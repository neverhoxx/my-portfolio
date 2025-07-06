'use client';

import { useState } from "react";

import { projectsList } from "@/data/projects";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsListBlock() {
    const [choosedType, setChoosedType] = useState("developed");

    const developedList = projectsList.filter(project => project.type === "developed");
    const designedList = projectsList.filter(project => project.type === "designed");

    return (
        <div className='mt-10'>
            <div>
                <ul data-aos="fade-down" className="flex justify-center select-none">
                    <li
                        className={`font-bold py-4 px-6 cursor-pointer 
                            ${choosedType === "developed"
                                ? "border-b-2 border-[#CBACF9] text-[#CBACF9]"
                                : "text-[#BEC1DD] hover:border-b-2 hover:border-[#cbacf993]"
                            }`
                        }
                        onClick={() => setChoosedType("developed")}
                    >
                        Developed
                    </li>

                    <li
                        className={`font-bold py-4 px-6 cursor-pointer 
                            ${choosedType === "designed"
                                ? "border-b-2 border-[#CBACF9] text-[#CBACF9]"
                                : "text-[#BEC1DD] hover:border-b-2 hover:border-[#cbacf993]"
                            }`
                        }
                        onClick={() => setChoosedType("designed")}
                    >
                        Designed
                    </li>
                </ul>
            </div>

            <div className="flex flex-wrap justify-between">
                {(choosedType === "developed" ? developedList : designedList).map((project, i) => (
                    <Link data-aos="fade-up" href={project.link} key={i} className="flex flex-col items-center justify-center mt-[57.5px] project-hover">
                        <div className="rounded-full w-[250px] h-[250px]mb-3 select-none project-img-hover">
                            <Image className="" src={project.companypic} alt="Voltamp Picture" />
                        </div>

                        <h1 className="font-bold text-[24px] mb-1 hover:text-[#CBACF9] transition-colors duration-[500ms]">{project.name}</h1>
                        <p className="text-[#E4ECFF] opacity-50 hover:text-[#CBACF9] transition-colors duration-[500ms]">{project.siteType}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
