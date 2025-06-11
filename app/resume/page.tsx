"use client";

import { icons } from "lucide-react";
import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. I have experience in both front-end and back-end development, utilizing modern technologies to build efficient and scalable solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Destinyyy",
    },
    {
      fieldName: "Email",
      fieldValue: "lethiendinh123@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 38 983 2067",
    },
    {
      fieldName: "Nationality",
      fieldValue: "",
    },
    {
      fieldName: "Location",
      fieldValue: "Ho Chi Minh City, Vietnam",
    },

    {
      fieldName: "Experience",
      fieldValue: "3 years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have worked on various projects, ranging from small websites to large-scale applications. My experience includes both front-end and back-end development, with a focus on creating user-friendly interfaces and efficient server-side logic.",
  items: [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions",
      position: "Front-End Developer",
      duration: "Jan 2021",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Front-End Developer",
      company: "Creative Agency",
      position: "Front-End Developer",
      duration: "Jun 2019 - Dec 2020",
      description:
        "Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Worked closely with designers to ensure a seamless user experience.",
    },
    {
      title: "Full Stack Developer",
      company: "Tech Solutions",
      position: "Front-End Developer",
      duration: "Jan 2021 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Front-End Developer",
      company: "Creative Agency",
      position: "Front-End Developer",
      duration: "Jun 2019 - Dec 2020",
      description:
        "Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Worked closely with designers to ensure a seamless user experience.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I hold a Engineer's  degree in Software Engineer from the Industrial of Ho Chi Minh City. My education has provided me with a solid foundation in programming principles, software development methodologies, and problem-solving skills.",
  items: [
    {
      insitution: "Online Course Platform",
      degree: "Full Stack Developer",
      duration: "2020 - 2021",
    },
    {
      insitution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      insitution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
      insitution: "Online Course",
      degree: "Web Development Bootcamp",
      duration: "2023",
    },
    {
      insitution: "Online Course",
      degree: "JavaScript Mastery",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have a diverse skill set that includes both front-end and back-end technologies. I am proficient in HTML, CSS, JavaScript, and various frameworks and libraries such as React, Node.js, and Express. I also have experience with database management using MongoDB.",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      title: "CSS 3",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:-items-start gap-1 cursor-pointer"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:-items-start gap-1 cursor-pointer"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.insitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group cursor-pointer">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="About"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className=" text-white/60">{item.fieldName}</span>
                        <span className="text-base">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
