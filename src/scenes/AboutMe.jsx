import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skills-image.png";
import profileImg from "../assets/fotoPerfil.png";

const AboutMe = () => {
  const isAboveMediumScreens = useMediaQuery("(mn-width: 1060px)");

  return (
    <section id="sobre-mi" className="pt-10 pb-24 ">
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
            SOBRE <span className=" dark:text-light-red text-red"> MI</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Hola 👋🏽! Mi nombre es Jonathan Chorolque Y Soy Desarrolador Web. Me
            considero una persona proactiva, responsable y disciplinada. Me
            apasiona aprender cada dia un poco mas de la programacion ya sea
            especializandome mas en un lenguaje o practicar uno nuevo🤓. me
            gusta el Futbol y la Natacion y los deportes en general aunque
            actualmente paso mas tiempo sentado en una silla frente a una
            pantalla😅. Espero te guste mi portafolio👦🏽.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src={profileImg}
                alt="skills"
                className="z-10 dark:shadow-light shadow-profile w-72"
              />
            </div>
          ) : (
            <img
              src={profileImg}
              alt="skills"
              className="z-10 dark:shadow-light shadow-profile w-96"
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
