import Head from "next/head";
import ProjectList from "../components/ProjectList";
import SideBar from "../components/SideBar";
import { getAllProjects } from "../projects-data";

export default function Home() {
  const AllProjects = getAllProjects();

  return (
    <div className="px-4 lg:pt-8 lg:px-8 font-Roboto">
      <Head>
        <title>Jerome Escultura</title>
        <meta
          property="og:title"
          content="Welcome to my Personal Portfolio"
          key="title"
        />
        <meta name="description" content="Welcome to my Personal Portfolio" />
        <meta property="og:url" content="https://jescultura.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jescultura.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.af7a9fb2.jpeg&w=3840&q=75"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <SideBar />
        <main className="lg:col-span-4 lg:ml-16 mb-12">
          <ProjectList items={AllProjects} />
        </main>
      </div>
    </div>
  );
}
