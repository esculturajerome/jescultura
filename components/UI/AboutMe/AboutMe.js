import Class from "./AboutMe.module.css";
import { useSpring, animated } from "react-spring";
import Head from "next/head";

export default function AboutMe() {
  const SpringDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1800,
  });
  return (
    <>
      <Head>
        <title>All about me</title>
        <meta
          property="og:title"
          content="My Educational background and Work History"
          key="title"
        />
      </Head>
      <animated.div style={SpringDelay} className={Class.AboutSection}>
        <div className={Class.AboutMe}>
          <div className={Class.LeftSection}>
            <p>
              About <br />
              Jerome Escultura <br />
              Web Developer <br />
              IBM
            </p>
            <p>
              Email:{"  "}
              <a
                href="mailto:jerome@jescultura.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                jerome@jescultura.com
              </a>
              <br />
              Whatsapp:{"  "}
              <a
                href="https://api.whatsapp.com/send?phone=+639566754237"
                rel="noopener noreferrer"
                target="_blank"
              >
                +639566754237
              </a>
            </p>
          </div>
          <div className={Class.RightSection}>
            <p>
              I am a web developer with a passion for graphic and web design.
              With a great deal of experience under my belt using web
              technologies like Angular and Reactjs.
            </p>
            <p>
              I believe I have strong leadership qualities and I am also a good
              follower. By participating in various youth programs for an
              international non-government organization, I have developed an
              outstanding communication and management skills.
            </p>
          </div>
        </div>
      </animated.div>
    </>
  );
}
