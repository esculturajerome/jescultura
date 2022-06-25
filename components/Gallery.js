import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";

export default function Gallery({ images }) {
  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  if (images) {
    return (
      <animated.div style={propsSpring}>
        <div>
          {images.map((image, i) => (
            <a
              target="_blank"
              href={image}
              rel="noreferrer noopener"
              key={i}
              className="hover:opacity-70"
            >
              <div className="h-64 w-96 relative mb-2">
                <Image
                  src={image}
                  alt="Project Screenshot"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority
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
