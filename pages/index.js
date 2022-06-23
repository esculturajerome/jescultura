import Head from "next/head";
import ProjectList from "../components/ProjectList";
import SideBar from "../components/SideBar";
import { getAllProjects } from "../projects-data";

export default function Home() {
  const AllProjects = getAllProjects();

  return (
    <div className="px-4 lg:pt-8 lg:px-8">
      <Head>
        <title>Jerome Escultura</title>
        <meta
          property="og:title"
          content="My Online Portfolio using Nextjs"
          key="title"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <SideBar />
        <main className="lg:col-span-4 lg:ml-16">
          <ProjectList items={AllProjects} />
        </main>
      </div>
    </div>
  );
}
