import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfileAbout from "../../components/ProfileAbout";
import ProfileCard from "../../components/ProfileCard";
import ProfileInformation from "../../components/ProfileInformation";
import ProfileSkills from "../../components/ProfileSkills";
import Navigation from "../../components/Navigation";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-gray-100 antialiased">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="assets/img/favicon.png"
          type="image/x-icon"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>Projects | Personal CV</title>
      </Head>

      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <ProfileCard />
            <ProfileInformation />
            <ProfileSkills />
          </div>

          <div className="space-y-5 lg:col-span-2">
            <ProfileAbout />

            <div className="p-7 block-section">
              <Navigation />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}


export default Projects