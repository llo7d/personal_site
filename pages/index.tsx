import Head from "next/head";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import Navigation from "../components/Navigation";
import ProfileAbout from "../components/ProfileAbout";
import ProfileCard from "../components/ProfileCard";
import ProfileInformation from "../components/ProfileInformation";
import ProfileSkills from "../components/ProfileSkills";


const Home = () => {

  const expierience = [
    {
      id: 4,
      image: "/img/experience-4.png",
      title: "3D Freelancer",
      company: "BLRDY",
      location: "Berlin",
      type: "Part-Time",
      date: "May 2021 – Present",
      description: "Worked on various 3D Projects. From managing a large group of 3D aritsts for a client to AR App Development to 3D Advertisements. ",
      last: false
    },
    {
      id: 3,
      image: "/img/favicon.png",
      title: "Juniour Developer",
      company: "None",
      location: "Berlin",
      type: "Part-Time",
      date: "December 2020 – Present",
      description: "Working on projects in my free time such as creating a website with Next.js, automating a problem with Python or building a hardware project with arduino.",
      last: false
    },
    {
      id: 2,
      image: "/img/experience-2.png",
      title: "3D Animation Show",
      company: "Ham and Ster",
      location: "Berlin",
      type: "Full Time",
      date: "August 2019 – September 2020",
      description: "Worked on a educational children YouTube show called Ham and Ster. Was responsible for everything from business expenses to production, this is where I learned a lot about 3D Production.",
      last: false
    },
    {
      id: 1,
      image: "/img/experience-1.png",
      title: "YouTuber",
      company: "YouTube",
      location: "Berlin",
      type: "Full Time",
      date: "October 2017 – July 2019",
      description: "Editing and creating content for a YouTube Channel in the gaming field with over 350,000 subscribers.",
      last: true
    },
  ]

  const education = [
    {
      id: 3,
      degree: "Software Engineering",
      school: "Self-Taught",
      location: "Berlin",
      duration: "December 2020 – Present",
      image: "/img/favicon.png",
      last: false
    },
    {
      id: 2,
      degree: "Mechatronic Engineering",
      school: "RTU University",
      location: "Riga",
      duration: "September 2018 – July 2019",
      image: "img/education-2.png",
      last: false
    },
    {
      id: 1,
      degree: "Elektrotechnik Fach Abitur",
      school: "OSZ KIM",
      location: "Berlin",
      duration: "June 2017 – May 2018",
      image: "img/education-1.png",
      last: true
    },
  ]

  return (
    <div className="bg-gray-100 antialiased">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/img/favicon.png"
          type="image/x-icon"
        />
        <title>Home | Personal CV</title>
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
              <Navigation pathname={"/"} />
              <h2 className="block-title">Experience</h2>
              {expierience.map(item => (
                <ExperienceCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  type={item.type}
                  date={item.date}
                  description={item.description}
                  last={item.last}
                />
              ))}

            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">Education</h2>

              {education.map(item => (
                <EducationCard
                  key={item.id}
                  degree={item.degree}
                  school={item.school}
                  location={item.location}
                  duration={item.duration}
                  image={item.image}
                  last={item.last}
                  id={item.id} />
              ))}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 