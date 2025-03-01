import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";

import Contacts from "./Contacts";
import profilePic from "../public/images/profile.png";
import logo from "../public/images/logo.png";

export default function SideBar() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };
  const propsSpring = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: -50 },
  });
  return (
    <div className="md:col-span-full lg:col-span-1 my-12 lg:my-0 font-Roboto font-extralight">
      <animated.div style={propsSpring}>
        <div className="hidden lg:block max-w-[230px]">
          <Image
            src={profilePic}
            alt="Jerome Profile"
            onClick={(e) => handleClick(e, "/")}
            className="cursor-pointer hover:opacity-70"
            priority
          />

        </div>
        <div className="flex justify-center lg:hidden ">
          <Image
            src={logo}
            alt="Jerome Icon"
            onClick={(e) => handleClick(e, "/")}
            className="cursor-pointer hover:opacity-70"
            priority
          />
        </div>
        <p className="font-light hidden lg:block mt-8 max-w-[230px]">My passion is web development and design, and the ever-changing software and programming languages that create it.</p>
        <div className="mt-12 flex  justify-center lg:justify-start mb-4 border-b pb-4">
          <div
            onClick={(e) => handleClick(e, "/about")}
            className="text-sm cursor-pointer   hover:underline hover:text-mainColor underline-offset-2"
          >
            About me
          </div>
        </div>
        <div className="mt-2 flex justify-center lg:justify-start mb-3">
          <div
            onClick={(e) => handleClick(e, "/")}
            className="text-sm cursor-pointer hover:underline hover:text-mainColor underline-offset-2"
          >
            My Projects
          </div>
        </div>

        <div className="grid lg:gap-3 grid-cols-3 lg:grid-cols-1 divide-x lg:divide-x-0 text-center lg:text-left  max-w-sm mx-auto lg:ml-3">
          <div
            onClick={(e) => handleClick(e, "/website")}
            className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
          >
            Website
          </div>
          <div
            onClick={(e) => handleClick(e, "/design")}
            className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
          >
            Design
          </div>
          <div
            onClick={(e) => handleClick(e, "/application")}
            className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
          >
            Application
          </div>
        </div>
        <Contacts />
      </animated.div>
    </div>
  );
}
