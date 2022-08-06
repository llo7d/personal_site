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


  const list_of_projects = [
    {
      title: "3D Character Preview Tool",
      description: "Tool that automates the process of generating a 360 preview of a 3D model using Blender and Python.",
      date: "July 07, 2022",
      link: "https://github.com/peterlloydskubur/3D-Model-Showcase",
      image: "/assets/img/project-3d-preview/cover-3d-card.jpg",
      key: "1",
    },
    {
      title: "Nextjs fullstack app",
      description: "Numquam cumque ut excepturi. Nihil ea officiis. Voluptatecum velit quibusdam sed ducimus qui.Quis ut non hicfacilis eum ut voluptatibus eveniet.Repellat accusantiumnon maxime sequi dignissimos magnam et quos.Consequaturvel numquam.",
      date: "July 20, 2022",
      link: "/projects/project-1",
      image: "/assets/img/project-nextjs-twitter/cover-3d-card.jpg",
      key: "2",
    },
    {
      title: "Web Scrapping Project",
      description: "Numquam cumque ut excepturi. Nihil ea officiis. Voluptatecum velit quibusdam sed ducimus qui.Quis ut non hicfacilis eum ut voluptatibus eveniet.Repellat accusantiumnon maxime sequi dignissimos magnam et quos.Consequaturvel numquam.",
      date: "February 02, 2022",
      link: "/projects/project-1",
      image: "/assets/img/project-web-scrapper/cover-3d-card.jpg",
      key: "23",
    },
    {
      title: "Another project",
      description: "Numquam cumque ut excepturi. Nihil ea officiis. Voluptatecum velit quibusdam sed ducimus qui.Quis ut non hicfacilis eum ut voluptatibus eveniet.Repellat accusantiumnon maxime sequi dignissimos magnam et quos.Consequaturvel numquam.",
      date: "February 02, 2022",
      link: "/projects/project-1",
      image: "/assets/img/project-web-scrapper/cover-3d-card.jpg",
      key: "23",
    },
  ];

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

              {list_of_projects.map((project) => (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  link={project.link}
                  image={project.image}
                  key={project.key}
                />
              ))}

            </div>
          </div>
        </div>
      </main >
    </div >
  );
}


export default Projects