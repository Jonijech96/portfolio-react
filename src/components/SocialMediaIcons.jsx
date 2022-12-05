import React from 'react';
import linkedinIcon from '../assets/linkedin.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my:10 gap-7'>
      <a target="_blank" href="https://wwww.linkedin.com" rel='noreferrer' className='hover:opacity-50 transition duration-500'>
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>
      <a target="_blank" href="https://wwww.facebook.com" rel='noreferrer' className='hover:opacity-50 transition duration-500'>
        <img src={facebookIcon} alt="facebook-link" />
      </a>
      <a target="_blank" href="https://wwww.instagram.com" rel='noreferrer' className='hover:opacity-50 transition duration-500'>
        <img src={instagramIcon} alt="instagram-link" />
      </a>
      
    </div>
  )
}

export default SocialMediaIcons