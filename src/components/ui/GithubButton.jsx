import React from "react";
import { RainbowButton } from "../magicui/rainbow-button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { links } from "@/data/links";

const GithubButton = () => {
  return (
    <div className="hidden md:block">
      <style jsx global>{`
        :root {
          --color-1: 0, 100%, 50%; /* Red */
          --color-2: 120, 100%, 50%; /* Green */
          --color-3: 240, 100%, 50%; /* Blue */
          --color-4: 60, 100%, 50%; /* Yellow */
          --color-5: 300, 100%, 50%; /* Purple */
        }
        
        .rainbow-button-container {
          position: relative;
          display: inline-block;
        }
        
        /* Add animation for the rainbow effect */
        @keyframes rainbow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <Link href={links.socials.currentRepo} target="_blank" rel="noopener noreferrer">
      <RainbowButton className="h-9 px-6 flex gap-2 text-sm">
        <FaGithub className="scale-150"/>
        Star On Github
      </RainbowButton>
      </Link>

    </div>
  );
};

export default GithubButton;