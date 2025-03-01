import Head from "next/head";
import ProfileBanner from "../../components/ProfileBanner";

export default function About() {
  return (
    <div className="p-8 max-w-7xl mx-auto font-Roboto">
      <Head>
        <title>Jerome Escultura | About Me</title>
        <meta
          property="og:title"
          content="Jerome Escultura | About Me"
          key="title"
        />
        <meta name="description" content="Welcome to my Personal Portfolio" />
        <meta property="og:url" content="https://jescultura.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jescultura.com/images/profile.png"
        />
      </Head>
      <ProfileBanner />
    </div>
  );
}
