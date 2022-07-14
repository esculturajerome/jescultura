import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ name, id, category, coverImage }) {
  // const convertedDate = new Date(dateCreated).toLocaleDateString("en-US", {
  //   month: "long",
  //   year: "numeric",
  // });
  // const nameTrim = name.replace(/\s/g, "");

  return (
    <div className="group overflow-hidden relative border-none z-30 cursor-pointer mb-3 inline-block w-full">
      <Link href={`${category}/${id}`}>
        <div className="before:w-full before:h-full before:inset-0 before:bg-black/60 before:z-10 before:opacity-0 before:hover:opacity-100 before:absolute before:transform before:duration-300">
          <div className="absolute w-full top-1/2 left-0 z-10 -translate-y-[50%]">
            <div className="p-5 text-center opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 transform duration-300">
              <h2 className="text-white text-lg leading-6 font-Lora">{name}</h2>
              <p className="text-white/80 font-light capitalize">{category}</p>
            </div>
          </div>
          <img
            src={`/${coverImage}`}
            alt={name}
            className="w-full max-w-full overflow-hidden break-before-avoid relative"
          />
        </div>
      </Link>
    </div>
  );
}
