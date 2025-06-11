import Link from "next/link";

import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="text-2xl" />,
    path: "https://github.com/LTDestiny",
  },
  {
    icon: <FaInstagram className="text-2xl" />,
    path: "https://www.instagram.com/_thindinh_/?fbclid=IwY2xjawK198RleHRuA2FlbQIxMABicmlkETFxVlluOEdFZVRrVHI3S1N5AR7svHYP7-eec8D_pMevQmQErhyFkakgjmoNxluwg0iddd0X65YTf-23P2d2vw_aem_pVCwqLU5_RYEiERh5DizPA#",
  },
  {
    icon: <FaFacebook className="text-2xl" />,
    path: "https://www.facebook.com/TDISSB",
  },
  {
    icon: <FaTiktok className="text-2xl" />,
    path: "https://www.tiktok.com/@thinndinn",
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
