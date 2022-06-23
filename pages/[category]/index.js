import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import ProjectList from "../../components/ProjectList";
import { getProjectByCategory } from "../../projects-data";
import Head from "next/head";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectCategory = router.query.category;

  const projects = getProjectByCategory(projectCategory);

  if (!projects) {
    return <p>No Event Found!</p>;
  }

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
          <ProjectList items={projects} />
        </main>
      </div>
    </div>
  );
}
