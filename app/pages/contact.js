"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import Confetti from "react-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faComment,
    faPaperPlane,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

// Placeholder definitions for styles and slideIn.
const styles = {
    sectionSubText: "text-gray-800 text-lg",
    sectionHeadText: "text-gray-900 font-bold text-3xl",
};

const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
        },
    },
});

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const App = () => {
    return (
        <div
            id="contact"
            className="min-h-screen flex items-center justify-center p-4 font-inter"
        >
            <ContactCard />
        </div>
    );
};

const ContactCard = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    const isMobile = windowDimension.width < 768;

    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill all fields before submitting. ⚠️", {
                duration: 3000,
                position: "bottom-right",
            });
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: "Contact Us",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message sent successfully!", {
                duration: 3000,
                position: "bottom-right",
            });
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
            formRef.current.reset();
        } catch (error) {
            console.error("Email sending error:", error);
            toast.error("Something went wrong. Please try again.", {
                duration: 3000,
                position: "bottom-right",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleConfettiComplete = useCallback(() => {
        setShowConfetti(false);
    }, []);

    const motionVariants = isMobile
        ? fadeIn
        : slideIn("left", "tween", 0.2, 1);

    return (
        <motion.div
            variants={motionVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-4xl p-6 sm:p-10 rounded-xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/contactbg.jpg')" }}
        >
            <Toaster />
            {showConfetti && (
                <Confetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    recycle={false}
                    numberOfPieces={windowDimension.width > 768 ? 200 : 100}
                    onConfettiComplete={handleConfettiComplete}
                />
            )}
            <div className={`text-black text-2xl ${styles.sectionSubText}`}>
                    Get In Touch
                <div>+91-8505802998</div>
            </div>
            <h2
                className={`text-5xl sm:text-6xl font-extrabold text-black text-center mb-12 ${styles.sectionHeadText}`}
            >
                Contact.
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                        <label
                            htmlFor="name"
                            className="text-black text-bold text-lg font-medium mb-2 flex items-center space-x-2 opacity-90"
                        >
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <span>Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-5 py-3 bg-[#1A032D] border border-transparent rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-base sm:text-lg"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label
                            htmlFor="email"
                            className="text-black text-lg font-medium mb-2 flex items-center space-x-2 opacity-90"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            <span>Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-5 py-3 bg-[#1A032D] border border-transparent rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-base sm:text-lg"
                            placeholder="Your email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="text-black text-lg font-medium mb-2 flex items-center space-x-2 opacity-90"
                    >
                        <FontAwesomeIcon icon={faComment} size="lg" />
                        <span>Message</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        className="w-full px-5 py-3 bg-[#1A032D] border border-transparent rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-base sm:text-lg resize-y"
                        placeholder="Hey Jayesh, love the website! I'd like to chat about some opportunities you might like! 👋"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-8 py-3 bg-[#8c3ce0] text-white font-semibold rounded-lg shadow-md hover:bg-[#7220c8] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:focus:ring-offset-[#2A054F] disabled:bg-[#5C1A99] transition-all duration-300 text-lg"
                    >
                        {loading ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        ) : (
                            <span className="flex items-center">
                                Send Message
                                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                            </span>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default App;
