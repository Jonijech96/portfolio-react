import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";
import profileImg from "../assets/fotoPerfil.png";

const AboutMe = () => {
  const isAboveMediumScreens = useMediaQuery("(mn-width: 1060px)");

  return (
    <section id="about-me" className="pt-10 pb-24 ">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red"> ME</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            itaque repellendus molestiae doloremque!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src={profileImg}
                alt="skills"
                className="z-10 shadow-profile w-72"
              />
            </div>
          ) : (
            <img
              src={profileImg}
              alt="skills"
              className="z-10 shadow-profile w-96"
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32"></div>
    </section>
  );
};

export default AboutMe;
