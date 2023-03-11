import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../assets/fotoPerfil.png";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Typewriter from "typewriter-effect";
import CV from "../assets/CV.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="inicio"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 ">
            <img
              src={profileImg}
              alt="profile"
              className="dark:shadow-light shadow-profile  hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px] animate-profileAnimate "
            />
          </div>
        ) : (
          <img
            src={profileImg}
            alt="profile"
            className="dark:shadow-light shadow-profile animate-profileAnimate hover:filter hover:saturate-200 transition duration-500 z-10 w-4/5 max-w-[400px] md:max-w-[600px] "
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Jonathan E. Chorolque
          </p>
          <p className="text-3xl mt-3 font-playfair z-10 text-center md:text-start ">
            Soy{" "}
          </p>
          <div className="text-3xl font-playfair text-center md:text-start">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            href={CV}
            download
          >
            Descargar CV
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contacto"
          >
            <div className="bg-slate-100 dark:bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Contactame
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="brightness-0 dark:filter-none">
            <SocialMediaIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
