import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 dark:bg-light-red bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <div className=" brightness-0 dark:filter-none ">
          <SocialMediaIcons />
        </div>
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl dark:text-deep-blue text-white">
            Jonathan Chorolque
          </p>
          <p className="font-playfair text-md dark:text-deep-blue text-white ">
            2022. All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
