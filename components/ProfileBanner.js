import { useSpring, animated } from "react-spring";
import Contacts from "./Contacts";
import Image from "next/image";
import { useRouter } from "next/router";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import profilePic from "../public/images/profile.png";

export default function ProfileBanner() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const SpringDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  const SpringTop = useSpring({
    opacity: 1,
    marginTop: 24,
    from: { opacity: 0, marginTop: -20 },
  });

  return (
    <main className="font-light">
      <animated.div
        style={SpringDelay}
        className="w-full grid lg:grid-cols-5 gap-2 md:gap-8 items-center justify-items-center"
      >
        <div className="md:col-span-2 w-[180px] md:w-[250px]">
          <Image
            src={profilePic}
            alt="Jerome Profile"
            onClick={(e) => handleClick(e, "/")}
            className="cursor-pointer hover:opacity-70"
            priority
          />
        </div>
        <div className="md:col-span-2 md:col-start-3">
          <p className="mt-8">
            My passion is web development and design, and the ever-changing
            software and programming languages that create it.
          </p>
          <p className="mt-8 text-sm lg:text-base">
            I am a{" "}
            <span className="underline font-medium underline-offset-4">
              Web Consultant
            </span>{" "}
            specializing in front-end development and proficient in tools like React, Next.js, and CMS platforms such as WordPress. With a strong focus on creating responsive, user-friendly interfaces, I bring a comprehensive understanding of web development, from crafting seamless digital experiences to optimizing performance and managing technical solutions.
          </p>
        </div>
      </animated.div>
      <WorkHistory />
      <Skills />
      {/* <div className="grid lg:grid-cols-3 h-full w-full font-Roboto font-light  lg:overflow-hidden">
        <animated.div
          style={SpringTop}
          className="flex flex-col lg:col-span-2 lg:justify-top h-full mb-12 mt-6 lg:pt-24 xl:pt-0 xl:justify-center px-4 sm:px-12 md:px-16 xl:pl-24 xl:pr-32 order-2 lg:order-1"
        >
          <div
            className=" gap-4 hidden lg:flex cursor-pointer hover:opacity-70"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            back
          </div>

          <WorkHistory />
        </animated.div>
       
      </div> */}
    </main>
  );
}
