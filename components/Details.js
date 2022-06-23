import { useSpring, animated } from "react-spring";
import { Fragment } from "react";

export default function Details(props) {
  const { name, category, desc, dateCreated, url } = props;

  const convertedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const propsSpring = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 70 },
  });
  return (
    <animated.div
      style={propsSpring}
      className="py-8 lg:pt-12 pl-4 md:pl-0 lg:pl-8 space-y-6 "
    >
      <h2 className="text-2xl">{name}</h2>
      <p className="capitalize font-light text-[#bfbfbf]">{category}</p>
      <p className="font-light">{desc}</p>
      <div className="flex justify-between pr-6 lg:pr-28">
        <div>
          {convertedDate == "Invalid Date" ? (
            <>
              <h5 className="text-sm font-light mb-4">Status</h5>
              <p className="font-light">Ongoing Project</p>
            </>
          ) : (
            <Fragment>
              <h5 className="text-sm font-light mb-4">Date Created</h5>
              <p className="font-light">{convertedDate}</p>
            </Fragment>
          )}
        </div>
        {url && (
          <div>
            <h5 className="text-sm font-light mb-4 flex gap-2 items-center">
              Link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </h5>
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className="text-mainColor"
            >
              {name}
            </a>
          </div>
        )}
      </div>
    </animated.div>
  );
}
