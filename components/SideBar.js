import Link from "next/link";
import { useRouter } from "next/router";
import Contacts from "./Contacts";

export default function SideBar() {
  const router = useRouter();
  const handleClick = (e) => {
    router.push(e);
  };
  return (
    <div className="md:col-span-full lg:col-span-1 my-12 lg:my-0 font-Roboto font-extralight">
      <div className="hidden lg:inline">
        <Image
          src="/images/profile.jpeg"
          width={230}
          height={330}
          objectFit="contain"
          alt="Jerome Profile"
          onClick={() => handleClick("/")}
          loader={imageLoader}
          className="cursor-pointer hover:opacity-70"
        />
        <p className="font-light mt-8">A Minimalist tech enthusiast.</p>
      </div>
      <div className="flex justify-center lg:hidden ">
        <Image
          src="/images/logo.svg"
          width={130}
          height={130}
          objectFit="contain"
          alt="Jerome Icon"
          onClick={() => handleClick("/")}
          loader={imageLoader}
          className="cursor-pointer hover:opacity-70"
        />
      </div>
      <div className="mt-12 flex  justify-center lg:justify-start mb-4 border-b pb-4">
        <div
          onClick={() => handleClick("/about")}
          className="text-sm cursor-pointer   hover:underline hover:text-mainColor underline-offset-2"
        >
          About me
        </div>
      </div>
      <div className="mt-2 flex justify-center lg:justify-start mb-3">
        <div
          onClick={() => handleClick("/")}
          className="text-sm cursor-pointer hover:underline hover:text-mainColor underline-offset-2"
        >
          My Projects
        </div>
      </div>

      <div className="grid lg:gap-3 grid-cols-3 lg:grid-cols-1 divide-x lg:divide-x-0 text-center lg:text-left  max-w-sm mx-auto lg:ml-3">
        <div
          onClick={() => handleClick("/website")}
          className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
        >
          Website
        </div>
        <div
          onClick={() => handleClick("/design")}
          className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
        >
          Design
        </div>
        <div
          onClick={() => handleClick("/application")}
          className="text-sm cursor-pointer font-light hover:underline hover:text-mainColor underline-offset-2"
        >
          Application
        </div>
      </div>
      {/* <nav className="flex flex-col items-center space-y-3 ">
        <Link href="/">
          <div className=" text-sm cursor-pointer">Work</div>
        </Link>
        <ul className="grid grid-cols-3 divide-x text-center ">
          <Link href="/website">
            <li className="font-light text-sm cursor-pointer">Website</li>
          </Link>
          <Link href="/design">
            <li className="font-light text-sm cursor-pointer">Design</li>
          </Link>
          <Link href="/application">
            <li className="font-light text-sm cursor-pointer">Application</li>
          </Link>
        </ul>
        <ul>
          <Link href="/about">
            <li className=" text-sm cursor-pointer">About</li>
          </Link>
        </ul>
      </nav> */}
      <Contacts />
    </div>
  );
}