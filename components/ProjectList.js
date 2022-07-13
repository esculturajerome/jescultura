import ProjectCard from "./ProjectCard";
import { useSpring, animated } from "react-spring";

export default function ProjectList({ items }) {
  const propsSpring = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: -50 },
  });

  return (
    // <div className="columns-1 sm:columns-2 md:columns-3 ">
    <div className="columns-3">
      <animated.div style={propsSpring}>
        {items.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              id={project.id}
              category={project.category}
              coverImage={project.coverImage}
              dateCreated={project.dateCreated}
              desc={project.desc}
              name={project.name}
            />
          );
        })}
      </animated.div>
    </div>
  );
}
