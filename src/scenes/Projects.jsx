import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import linkIcon from "../assets/icon-enlace-extern.png";
import githubIcon from "../assets/github-icon.png";
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

const Project = ({ title, description, name, externalLink, githubLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{name}</p>
        <p className="mt-3">{description}</p>
        <div className="flex gap-3">
          <a href={externalLink} target="_blank">
            <img alt="link-icon" src={linkIcon} width={40} />
          </a>
          <a href={githubLink} target="_blank">
            <img alt="github-icon" src={githubIcon} width={40} />
          </a>
        </div>
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
        viewport={{ amount: 0.5 }}
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
        <p className="mt-10 mb-10 font-opensans font-semibold">
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
            externalLink="https://e-commerce-jonathan-chorolque.netlify.app"
            githubLink="https://github.com/Jonijech96/e-commerce-react"
          />
          <Project
            title="Project 2"
            name="Pokedex"
            description="Sass, React"
            externalLink="https://poke-api-jonathan-chorolque.netlify.app/"
            githubLink="https://github.com/Jonijech96/poke-api"
          />
          <Project
            title="Project 3"
            name="CRUD"
            description="Chakra Ui"
            externalLink="https://crudusers-jonathanchorolque.netlify.app"
            githubLink="https://github.com/Jonijech96/crud-api"
          />

          {/* ROW 2 */}
          <Project
            title="Project 4"
            name="RickMorty Location"
            description="React"
            githubLink="https://rickmorty-jonathan-chorolque.netlify.app"
            externalLink="https://mellifluous-mooncake-9db685.netlify.app"
          />
          <Project
            title="Project 5"
            name="Kumbia Fusion"
            description="Html, Javascript, Css"
            externalLink="https://celadon-kitten-a656b1.netlify.app"
            githubLink="https://github.com/Jonijech96/proyectoKumbia"
          />
          <Project
            title="Project 6"
            name="Box Generator"
            description="Html, Css, Javascript"
            externalLink="https://subtle-chaja-e0a66c.netlify.app"
            githubLink="https://github.com/Jonijech96/boxShadowGenerator"
          />

          {/* ROW 3 */}
          <Project
            title="Project 7"
            name="Clima api"
            description="React, Css"
            externalLink="https://lucky-pegasus-836b1c.netlify.app/"
            githubLink="https://github.com/Jonijech96/project-weather"
          />
          <Project
            title="Project 8"
            name="E-commerce2"
            description="Html, Javascript, Css"
            externalLink="https://taupe-tartufo-9e56e3.netlify.app"
            githubLink="https://github.com/Jonijech96/e-commerce"
          />
          <Project
            title="Project 9"
            name="LandingPage"
            description="Html, Css"
            externalLink="https://jade-paprenjak-43df8d.netlify.app"
            githubLink="https://github.com/Jonijech96/maquetacion1"
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
