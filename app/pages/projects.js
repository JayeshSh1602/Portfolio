"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const invertIcon = false;

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    source_code_link,
    live_project_link,
    animate,
    invertIcon,
}) => {
    return (
        <motion.div variants={animate}>
            <Tilt
                tiltMaxAngleX={45}
                tiltMaxAngleY={45}
                scale={1}
                transitionSpeed={450}
                className="bg-pink-900 p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
                        >
                            <Image
                                src="/github.png"
                                alt="source code"
                                width={30}
                                height={30}
                                objectFit="contain"
                                className={`rounded-2xl ${invertIcon ? "invert" : ""}`}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-emerald-100 font-semibold text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <p key={index} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>

                {live_project_link && (
                    <a
                        href={live_project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mt-3 bg-[#221c1e] text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_5px_rgba(255,105,180,0.8)]
">
                            Live Project
                        </button>
                    </a>
                )}
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const mainControls = useAnimation();
    const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);
        }
    }, []);

    return (
        <>
            <div ref={ref} className="relative z-10 container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <p className={`${styles.sectionSubText} text-2xl !text-purple-600`}>
                        Innovative Creations
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <h2 className={`${styles.sectionHeadText} !text-white`}>Projects.</h2>
                </motion.div>

                <motion.div className="mt-10">
                    <div
                        className={`${isMobile
                            ? "grid grid-cols-1 gap-8 place-items-center"
                            : "flex flex-wrap justify-center gap-7"
                            }`}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={`project-${index}`}
                                animate={isMobile ? {} : fadeIn("up", "spring", index * 0.5, 0.75)}
                                {...project}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Works;
