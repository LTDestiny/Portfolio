"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using the latest technologies.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for iOS and Android platforms.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces and experiences.",
    href: "",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description:
      "Implementing effective online marketing strategies to boost your business.",
    href: "",
  },
];

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
