import Head from "next/head";
import { Fragment } from "react";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/UI/AboutMe/AboutMe";
import ProfileBanner from "../../components/UI/ProfileBanner/ProfileBanner";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Jerome Escultura</title>
        <meta property="og:title" content="Here's more about me" key="title" />
      </Head>
      <Header />
      <ProfileBanner />
      <AboutMe />
    </Fragment>
  );
}
