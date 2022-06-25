import { useSpring, animated } from "react-spring";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
=======
import imageLoader from "./loader";
>>>>>>> 785f3bb83e1b3d57a6cc435a210bf5fef6dce08b

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
<<<<<<< HEAD
              rel="noreferrer noopener"
              key={i}
              className="hover:opacity-70"
            >
              <div className="h-64 w-96 relative mb-2">
=======
              rel="noopener noreferrer"
              key={i}
              className="hover:opacity-70"
            >
              <div className="h-72 w-full relative mb-2">
>>>>>>> 785f3bb83e1b3d57a6cc435a210bf5fef6dce08b
                <Image
                  src={image}
                  alt="Project Screenshot"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                  loader={imageLoader}
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
