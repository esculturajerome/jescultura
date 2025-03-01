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
    <div className="p-8 max-w-7xl mx-auto font-Roboto">
      <Head>
        <title>Jerome Escultura | {projectCategory}</title>
        <meta property="og:title" content="Jerome Escultura" key="title" />
        <meta name="description" content="Here are my projects" />
        <meta property="og:url" content="https://jescultura.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jescultura.com/images/project/booklandia-site1.png"
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
