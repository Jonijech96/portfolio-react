import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(mn-width: 1060px)");

  return (
    <section id="habilidades" className="pt-10 pb-24 ">
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
            MIS{" "}
            <span className="dark:text-light-red text-red">HABILIDADES</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={skillsImage} alt="skills" className="z-10" />
            </div>
          ) : (
            <img src={skillsImage} alt="skills" className="z-10" />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                FRONTEND
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <img alt="close-icon" src="../assets/html-icon.svg" width={50} />
            <img alt="close-icon" src="../assets/css-icon.svg" width={50} />
            <img
              alt="close-icon"
              src="../assets/javascript-icon.svg"
              width={50}
            />
            <img alt="close-icon" src="../assets/react-icon.svg" width={50} />
            <img alt="close-icon" src="../assets/redux-icon.svg" width={50} />
            <img
              alt="close-icon"
              src="../assets/tipescript-icon.svg"
              width={50}
            />
            <img
              alt="close-icon"
              src="../assets/bootstrap-icon.svg"
              width={50}
            />
            <img
              alt="close-icon"
              src="../assets/tailwind-icon.svg"
              width={50}
            />
            <img alt="close-icon" src="../assets/sass-icon.svg" width={50} />
          </div>
        </motion.div>
        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                BACKEND
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 " />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <img alt="close-icon" src="../assets/node-icon.svg" width={50} />
            <img alt="close-icon" src="../assets/express-icon.svg" width={50} />
            <img
              alt="close-icon"
              src="../assets/sequelize-icon.svg"
              width={50}
            />
            <img
              alt="close-icon"
              src="../assets/postgres-icon.svg"
              width={50}
            />
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">OTROS</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <img alt="close-icon" src="../assets/github-icon.svg" width={50} />
            <img alt="close-icon" src="../assets/git-icon.svg" width={50} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
