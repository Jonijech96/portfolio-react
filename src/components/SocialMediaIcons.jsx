import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my:10 gap-7 items-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jonathan-chorolque/"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 "
      >
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>
      <a
        target="_blank"
        href="https://github.com/Jonijech96/"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 dark:invert rounded-full "
      >
        <img alt="github-icon" src={githubIcon} width={40} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
