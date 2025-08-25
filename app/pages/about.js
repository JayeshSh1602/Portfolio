import React from 'react';
import ComputersCanvas from '@/components/canvas/ComputerCanvas';

const About = () => (
  <div id='about' className="w-full min-h-screen flex flex-col items-center justify-start py-8 px-4 md:py-12 md:px-6">
    {/* TOP: Centered Heading */}
    <div className="text-center mb-8 md:mb-16">
      <h3 className="text-xl md:text-2xl uppercase tracking-wide text-purple-600">
        Introduction
      </h3>
      <h1 className="text-4xl md:text-6xl font-bold mt-2 md:mt-4 text-white">
        Overview.
      </h1>
    </div>

    {/* GRID: Left Model + Right Text */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center md:items-stretch w-full max-w-7xl">

      {/* LEFT: 3D Model Box */}
      <div className="flex justify-center order-first md:order-none"> {/* order-first moves it above text on mobile */}
        <div className="w-full max-w-2xl h-[300px] md:h-full flex items-center justify-center overflow-hidden">
          <ComputersCanvas />
        </div>
      </div>

      {/* RIGHT: Intro Text */}
      <div className="text-center md:text-left text-white flex flex-col justify-center"> {/* Changed justify-between to justify-center for mobile stack */}
        <div className="space-y-4 md:space-y-6 text-base md:text-xl leading-relaxed">
          <p>👨‍💻 I'm a Software Engineer with over 4 years of experience in software development and cloud technologies.</p>
          <p>🎓 Currently pursuing my Honours Bachelor of Science in Computer Science at Ontario Tech University—focused on building reliable, scalable software that makes a difference.</p>
          <p>🛠 From full-stack development to cloud-based solutions, I&apos;ve led enterprise-level projects that streamline operations and deliver real impact.</p>
          <p>🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈</p>
          <p>💡 Always curious and constantly learning.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;