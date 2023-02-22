import Head from "next/head";
import ProfileBanner from "../../components/ProfileBanner";

export default function About() {
  return (
    <div className="font-Roboto">
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
          content="https://jescultura.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.af7a9fb2.jpeg&w=3840&q=75"
        />
      </Head>
      <ProfileBanner />
    </div>
  );
}
