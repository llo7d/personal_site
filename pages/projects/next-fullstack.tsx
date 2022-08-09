import Head from "next/head";
import Image from "next/image";
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
                    href="/img/favicon.png"
                    type="image/x-icon"
                />
                <link
                    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <title>Project | Next.js</title>
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
                                {/* <div>
                                    <Image
                                        src={"/img/project-nextjs-twitter/content-2.jpg"}
                                        alt="cover-image"
                                        width={1000}
                                        height={786}
                                    />

                                </div> */}
                            </div>
                            <div className="mb-5 pb-0">
                                <div className="space-y-4 p-7">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold">
                                            Tweet with Next.js
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
                                        <span className="skill-tag">Next.js</span>
                                        <span className="skill-tag">Typescript</span>
                                        <span className="skill-tag">Firebase</span>
                                        <span className="skill-tag">Tailwind CSS</span>
                                    </div>

                                    {/* <p className="text-gray-600">
                                        Fun project
                                    </p> */}
                                </div>

                                <video
                                    className="w-full h-full"
                                    src={"/img/project-nextjs-twitter/video-1.mp4"}
                                    muted
                                    autoPlay
                                    loop
                                    controls={false}
                                />

                                <div className="p-7 pb-12">
                                    <p className="text-gray-600">
                                        The project is a simple twitter clone.
                                        <br></br>
                                        <br></br>
                                        I used some of the following technologies:
                                        <br></br>
                                        {/* Link to Nextjs project and colour it purple */}


                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Nextjs
                                            </a>
                                        </Link>
                                        as the framework
                                        <br></br>
                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Firebase
                                            </a>
                                        </Link>
                                        as our backend
                                        <br></br>
                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Tailwind
                                            </a>
                                        </Link>
                                        for styling
                                        <br></br>
                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Typescript
                                            </a>
                                        </Link>
                                        as our language.
                                        <br></br>
                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Flowbite
                                            </a>
                                        </Link>
                                        for styled tailwind components

                                        <br></br>

                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                React-Hot-Toast
                                            </a>
                                        </Link>
                                        for notifications
                                    </p>
                                    <br />
                                    <p className="text-gray-600">
                                        I really enjoyed working with these technologies and I plan to use them again in the future.

                                        <br></br>
                                        <br></br>

                                        Check out the code on
                                        <Link href={"/projects/next-fullstack"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Github
                                            </a>
                                        </Link>
                                    </p>
                                </div>

                                {/* <div className="p-7 pb-12">
                                    <p className="text-gray-600">
                                        Here is some of the code of the project.
                                    </p>
                                </div>
                                <img src="/img/python-logo.png" alt="" /> */}
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Project;