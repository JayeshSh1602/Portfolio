"use client";
import React from 'react';
import Image from 'next/image'; // Import the Image component

const Skills = () => {
    return (
        <div id='skills'>
            <div className="max-w-5xl mx-auto px-6 text-center pt-4">
                <h1 className="inline-block px-16 py-3 border-2 border-purple-700 text-white text-xl font-bold tracking-widest">
                    SKILLS
                </h1>
            </div>
            <div className="max-w-3xl mx-auto px-6 mt-8">
                <h2 className="font-semibold text-white text-2xl mb-6 relative -left-6">
                    USING NOW:
                </h2>

                <div className="grid grid-cols-4 gap-12 place-items-center mb-12">
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">JavaScript</p>
                    </div>
                     <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">React</p>
                    </div>
                     <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">Next.js</p>
                    </div>
                       <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">Node.js</p>
                    </div>
                       <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width={64} height={64} style={{ filter: "invert(1)" }}/>
                        <p className="mt-2 text-center text-white text-m">Express.js</p>
                    </div>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">Tailwind CSS</p>
                    </div>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">MongoDB</p>
                    </div>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">GitHub</p>
                    </div>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" alt="OAuth" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">OAuth</p>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 mt-8">
                <h2 className="font-semibold text-white text-2xl mb-6 relative -left-6">
                    LEARNING:
                </h2>

                <div className="grid grid-cols-4 gap-12 place-items-center mb-12">
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">TypeScript</p>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 mt-8">
                <h2 className="font-semibold text-white text-2xl mb-6 relative -left-6">
                    OTHER SKILLS:
                </h2>

                <div className="grid grid-cols-4 gap-12 place-items-center mb-12">
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">Java</p>
                    </div>
                    <div>
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="w-16 h-16 mx-auto" width={64} height={64} />
                        <p className="mt-2 text-center text-white text-m">C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;