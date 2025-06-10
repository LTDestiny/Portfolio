import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="text-2xl" />,
    path: "",
  },
  {
    icon: <FaLinkedinIn className="text-2xl" />,
    path: "",
  },
  {
    icon: <FaYoutube className="text-2xl" />,
    path: "",
  },
  {
    icon: <FaTwitter className="text-2xl" />,
    path: "",
  },
];

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
