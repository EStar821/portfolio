"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-justify">
            Innovative and results-driven <span className="font-semibold text-white">Senior Backend Developer</span> with 10 years of experience architecting scalable, secure, and high-performance systems in
            <span className="font-semibold"> Python, C#, and .NET</span>.
          </li>
          <li className="text-justify">
            Specialized in building transaction-intensive <span className="font-semibold">e-commerce platforms</span> that handle thousands of orders per minute, and compliance-driven <span className="font-semibold"> healthcare solutions</span> designed for data integrity, real-time insights, and patient privacy (<span className="italic">HIPAA, GDPR</span>).
          </li>
          <li className="text-justify">
            Recognized as a <span className="font-semibold">team catalyst</span>—bridging developers, architects, and business stakeholders to deliver clean, maintainable code and on-time releases. Known for transforming complex problems into elegant, measurable solutions that drive both business growth and user trust.
          </li>
          <li className="text-justify">
            Always exploring <span className="font-semibold">new frameworks, cloud-native tools, and best practices to stay ahead of the curve in backend innovation</span>.
          </li>
        </ul>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
