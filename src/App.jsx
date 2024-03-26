import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import AboutMe from "./scenes/AboutMe";

function App() {
  const [selectedPage, setSelectedPage] = useState("inicio");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedPage(entry.target.id)
          // Aquí puedes realizar acciones cuando el elemento es visible
        }
      });
    },{rootMargin:'-50% 0px -50% 0px'});

    if (targetRef.current) observer.observe(targetRef.current);
    if (targetRef1.current) observer.observe(targetRef1.current);
    if (targetRef2.current) observer.observe(targetRef2.current);
    if (targetRef3.current) observer.observe(targetRef3.current);
    if (targetRef4.current) observer.observe(targetRef4.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
      if (targetRef1.current) observer.unobserve(targetRef1.current);
      if (targetRef2.current) observer.unobserve(targetRef2.current);
      if (targetRef3.current) observer.unobserve(targetRef3.current);
      if (targetRef4.current) observer.unobserve(targetRef4.current);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App dark:bg-slate-900 bg-slate  text-slate-800 dark:text-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div ref={targetRef} id="inicio" className="w-5/6 mx-auto md:h-full min-h-screen">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div  ref={targetRef1} id="sobre-mi" className="w-5/6 mx-auto md:h-full min-h-screen">
        <AboutMe />
      </div>
      <LineGradient />
      <div ref={targetRef2} id="habilidades" className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>
      <LineGradient />
      <div ref={targetRef3} id="proyectos" className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div ref={targetRef4} id="contacto" className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
