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
            <div className="h-64 w-96 relative mb-2" key={i}>
              <a target="_blank" href={image}>
                <Image
                  src={image}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
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
