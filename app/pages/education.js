"use client";
import { useRef, useEffect } from "react";
import Image from "next/image"; // Add this line
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { education } from "../constants"; // if in same folder

const EducationCard = ({ education }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: "#1d1836",
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={education.date}
        dateClassName="text-white text-bold"
        iconStyle={{ background: education.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <Image // Changed <img> to <Image>
                    src={education.icon}
                    alt={education.company_name}
                    className="w-[70%] h-[70%] object-contain"
                    width={100} // Added width
                    height={100} // Added height
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
            <p className="text-secondary text-[16px] font-semibold m-0">
                {education.company_name}
            </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {education.points.map((point, index) => (
                <li
                    key={`education-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Education = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div id="education" ref={sectionRef} className="pt-10 pb-20">
            <motion.div
                initial="hidden"
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
            >
                <p className="text-center text-2xl uppercase tracking-wide text-purple-600">What I have Studied so far</p>
            </motion.div>

            <motion.div
                initial="hidden"
                animate={mainControls}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
            >
                <h2 className="text-center text-white text-6xl font-bold mt-4 ">Education</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {education.map((edu, index) => (
                        <EducationCard key={index} education={edu} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;