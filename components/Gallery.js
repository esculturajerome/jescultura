import { useSpring, animated } from "react-spring";
import Image from "next/image";

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
            <div className="h-72 w-full relative mb-2" key={i}>
              <a target="_blank" href={image} rel="noopener noreferrer">
                <Image
                  src={image}
                  alt="Project Screenshot"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </a>
            </div>
          ))}
        </div>
      </animated.div>
    );
  }
  return <h1>No Images</h1>;
}
