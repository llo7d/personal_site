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
      id: 1,
      image: "/assets/img/experience.png",
      title: "Senior Developer",
      company: "BLRDY",
      location: "Berlin",
      type: "Full Time",
      date: "June 2021 – Present",
      description: "Aut omnis voluptatem sit sequi. Voluptatem tempori busrepellat voluptatem voluptatibus enim voluptas necessitatibus.Aut quasi sunt dolor.Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem.Enimquo sed et sint aspernatur distinctio qui quam.",
      last: false
    },
    {
      id: 2,
      image: "/assets/img/experience.png",
      title: "Senior Developer",
      company: "BLRDY",
      location: "Berlin",
      type: "Full Time",
      date: "June 2021 – Present",
      description: "Aut omnis voluptatem sit sequi. Voluptatem tempori busrepellat voluptatem voluptatibus enim voluptas necessitatibus.Aut quasi sunt dolor.Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem.Enimquo sed et sint aspernatur distinctio qui quam.",
      last: true
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Degree 1",
      school: "School 1",
      location: "Berlin",
      duration: "September 2017 – May 2019",
      image: "assets/img/bu-logo.jpg",
      last: false
    },
    {
      id: 1,
      degree: "Degree 2",
      school: "School 2",
      location: "Berlin2",
      duration: "September 2012 – May 2019",
      image: "assets/img/bu-logo.jpg",
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
          href="assets/img/favicon.png"
          type="image/x-icon"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
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
                />
              ))}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 