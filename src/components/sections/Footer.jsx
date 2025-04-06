"use client";
import React, {useState, useEffect} from 'react';
import { FaHeart, FaRegStar, FaCodeBranch } from "react-icons/fa6";
import { fetchGitHubStats } from '@/services/gitstats';

const Footer = () => {

  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  useEffect(() => {
    const getStats = async () => {
        const stats = await fetchGitHubStats('SKumr20', 'quizzly');
        setStars(stats.stars);
        setForks(stats.forks);
    };

    getStats();
  }, []);

  return (
    <footer className="w-full bg-background py-4 mt-auto flex flex-col md:flex-row gap-2 justify-between items-center px-16">
      <div className="flex-grow-0">
        <p className="text-sm text-foreground flex items-center gap-1">
          <span>With</span>
          <FaHeart className="inline-block text-red-500" />
          <span className='text-primary font-bold'>- Satyam Kumar, {new Date().getFullYear()}</span>
        </p>
      </div>
      <div className="flex items-center gap-x-4 gap-y-2">
        <div className="flex items-center justify-center space-x-2">
          <FaRegStar size="15px" className="text-yellow-500 hover:text-black dark:hover:text-white cursor-pointer" />
          <p className="text-xs leading-none">{stars}</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaCodeBranch size="13px" className="text-yellow-500 hover:text-black dark:hover:text-white cursor-pointer" />
          <p className="text-xs leading-none">{forks}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;