import Head from "next/head";
import Link from "next/link";
import ProfileCard from "../../components/ProfileCard";
import ProfileInformation from "../../components/ProfileInformation";
import ProfileSkills from "../../components/ProfileSkills";

const Project = () => {
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
        <title>Project | Personal CV</title>
      </Head>

      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <Link href={"/projects"}>
              <button className="w-full bg-white text-[#845EEE] h-[62px] font-bold rounded-xl">
                Back
              </button>
            </Link>
            <ProfileCard />
            <ProfileInformation />
            <ProfileSkills />
          </div>

          <div className="space-y-5 lg:col-span-2">
            <article className="single-article-section">
              <div className="single-article-img">
                <img
                  src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="mb-5 pb-0">
                <div className="space-y-4 p-7">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">
                      Qui quasi aut iure provident occaecati dignissimos et
                      illo.
                    </h2>
                    <p>
                      <time
                        dateTime="2021-05-09 19:00"
                        className="text-sm text-gray-400"
                      >
                        May 09, 2021
                      </time>
                    </p>
                  </div>

                  <div className="flex flex-wrap">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Blender</span>
                    <span className="skill-tag">Fullstack Development</span>
                  </div>

                  <p className="text-gray-600">
                    Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                    cum velit quibusdam sed ducimus qui. Quis ut non hic facilis
                    eum ut voluptatibus eveniet. Repellat accusantium non maxime
                    sequi dignissimos magnam et quos. Consequatur vel numquam.
                  </p>
                </div>

                <img src="./assets/img/python-logo.png" alt="" />

                <div className="p-7 pb-12">
                  <p className="text-gray-600">
                    Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                    cum velit quibusdam sed ducimus qui. Quis ut non hic facilis
                    eum ut voluptatibus eveniet. Repellat accusantium non maxime
                    sequi dignissimos magnam et quos. Consequatur vel numquam.
                  </p>
                  <br />
                  <p className="text-gray-600">
                    Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                    cum velit quibusdam sed ducimus qui. Quis ut non hic facilis
                    eum ut voluptatibus eveniet. Repellat accusantium non maxime
                    sequi dignissimos magnam et quos. Consequatur vel numquam.
                  </p>
                </div>

                <img src="./assets/img/python-logo.png" alt="" />

                <div className="p-7 pb-12">
                  <p className="text-gray-600">
                    Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                    cum velit quibusdam sed ducimus qui. Quis ut non hic facilis
                    eum ut voluptatibus eveniet. Repellat accusantium non maxime
                    sequi dignissimos magnam et quos. Consequatur vel numquam.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Project;