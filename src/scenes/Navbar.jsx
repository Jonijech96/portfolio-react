import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (setIsMenuToggled) setIsMenuToggled(false);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav
      className={` z-40 w-full fixed top-0 py-6 transition duration-700 ${navbarBackground}`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">{`< JECH />`}</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <>
            <motion.button
              className="rounded-full bg-red p-2 z-10"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuToggled ? (
                <img alt="close-icon" src="../assets/close-icon.svg" />
              ) : (
                <img alt="menu-icon" src="../assets/menu-icon.svg" />
              )}
            </motion.button>
            {/* MOBILE MENU POPUP */}
            <motion.div
              animate={isMenuToggled ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className="fixed right-0 bottom-0 h-full bg-red w-[300px]"
            >
              {/* MENU ITEMS */}
              <div className="flex flex-col  gap-10 h-full justify-center items-center text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />

                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
