import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, name }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{name}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.JPG`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="dark:text-light-red text-red">PRO</span>YECTOS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Estos son mis principales proyectos, si quieres averiguar mis demas
          proyectos te recomiendo visitar mi github😉
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <Project
            title="Project 1"
            name="E-commerce"
            description="Chakra UI, Tailwind, React, Redux"
          />
          <Project title="Project 2" name="Pokedex" description="Sass, React" />
          <Project title="Project 3" name="CRUD" description="Chakra Ui" />

          {/* ROW 2 */}
          <Project
            title="Project 4"
            name="RickMorty Location"
            description="React"
          />
          <Project
            title="Project 5"
            name="Kumbia Fusion"
            description="Html, Javascript, Css"
          />
          <Project
            title="Project 6"
            name="Box Generator"
            description="Html, Css, Javascript"
          />

          {/* ROW 3 */}
          <Project
            title="Project 7"
            name="Clima api"
            description="React, Css"
          />
          <Project
            title="Project 8"
            name="E-commerce2"
            description="Html, Javascript, Css"
          />
          <Project
            title="Project 9"
            name="LandingPage"
            description="Html, Css"
          />
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
