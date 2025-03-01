import Head from "next/head";
import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import Details from "../../components/Details";
import Gallery from "../../components/Gallery";
import { getProjectById } from "../../projects-data";

export default function ProjectDetailPage() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = getProjectById(projectId);
  if (!project) {
    return <p>No Event Found!</p>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto font-Roboto">
      <Head>
        <title>Jerome Escultura | {project.name}</title>
        <meta
          property="og:title"
          content="Jerome Escultura | Projects"
          key="title"
        />
        <meta name="description" content="Here are my projects" />
        <meta property="og:url" content="https://jescultura.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jescultura.com/images/profile.png"
        />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
        <SideBar />
        <div className="md:col-span-3 lg:col-span-2 lg:ml-16 order-2 md:order-1">
          <Gallery images={project.projectImages} />
        </div>
        <div className="md:col-span-2 lg:col-span-2 order-1 md:order-2">
          <Details
            name={project.name}
            category={project.category}
            desc={project.desc}
            dateCreated={project.dateCreated}
            url={project.url}
          />
        </div>
      </div>
    </div>
  );
}
{
  /* <div
            className={
              project.category == "Design" && project.projectImages.length < 2
                ? "single-project"
                : "project"
            }
          >
            <Gallery images={project.projectImages} />
            <Details
              name={project.name}
              category={project.category}
              desc={project.desc}
              dateCreated={project.dateCreated}
              url={project.url}
            />
          </div> */
}
