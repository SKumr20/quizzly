import { FaGithub } from "react-icons/fa6"
import { Toggle } from "./toggle";
import Link from "next/link";
import { links } from "@/data/links";
import { link } from "@heroui/theme";

const GithubSmallBtn = () => {
  return (
    <Link href={links.socials.currentRepo} target="_blank" rel="noopener noreferrer">
      <Toggle>
        <FaGithub className="scale-125" />
      </Toggle>
    </Link>

  )
}

export default GithubSmallBtn