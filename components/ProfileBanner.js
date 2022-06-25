import { useSpring, animated } from "react-spring";
import Contacts from "./Contacts";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProfileBanner() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  const SpringDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 750,
  });

  const SpringTop = useSpring({
    opacity: 1,
    marginTop: 24,
    from: { opacity: 0, marginTop: -20 },
    delay: 650,
  });

  return (
    <animated.main style={propsSpring}>
      <div className="grid lg:grid-cols-2 h-[100vh] w-full font-Roboto font-light  lg:overflow-hidden">
        <animated.div
          style={SpringTop}
          className="flex flex-col lg:justify-top h-full mb-12 mt-6 lg:pt-24 xl:pt-0 xl:justify-center px-4 md:px-16 xl:pl-24 xl:pr-32 order-2 lg:order-1"
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
          <p className="mt-8">
            My passion is web development and design, and the ever-changing
            software and programming languages that create it.
          </p>
          <p className="mt-8">
            I am a web developer with a passion for graphic and web design. With
            a great deal of experience under my belt using web technologies like
            ReactJS and NextJS. I believe I have strong leadership qualities and
            I am also a good follower. By participating in various youth
            programs for an international non-government organization, I have
            developed an outstanding communication and management skills.
          </p>
          <Contacts />
        </animated.div>
        <animated.div style={SpringDelay} className="w-full order-1 lg:order-2">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/profile.jpeg"
              alt="Profile Picture"
              width={1000}
              height={1200}
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </animated.div>
      </div>
    </animated.main>
  );
}
