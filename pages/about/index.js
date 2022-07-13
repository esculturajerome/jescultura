import Head from "next/head";
import ProfileBanner from "../../components/ProfileBanner";

export default function About() {
  return (
    <div className="font-Roboto">
      <Head>
        <title>Jerome Escultura</title>
        <meta property="og:title" content="Here's more about me" key="title" />
      </Head>
      <ProfileBanner />
    </div>
  );
}
