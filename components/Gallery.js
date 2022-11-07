import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

export default function Gallery({ images }) {
  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const [loaded, setLoaded] = useState(false);

  if (images) {
    return (
      <animated.div style={propsSpring}>
        <div className="mb-12">
          {images.map((image, i) => (
            <a
              target="_blank"
              href={image}
              rel="noreferrer noopener"
              key={i}
              className="hover:opacity-70"
            >
              <div className="h-72 xl:h-96 w-full relative mb-2">
                <Image
                  src={image}
                  alt="Project Screenshot"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                  className={loaded ? "unblur" : ""}
                  onLoadingComplete={() => setLoaded(true)}
                />
              </div>
            </a>
          ))}
        </div>
      </animated.div>
    );
  }
  return <h1>No Images</h1>;
}
