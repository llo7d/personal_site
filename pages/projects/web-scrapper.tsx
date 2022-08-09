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
                <title>Project | Web Scrapper Project</title>
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
                                <div>
                                    <Image
                                        src={"/img/project-web-scrapper/content-2.jpg"}
                                        alt="cover-image"
                                        width={1000}
                                        height={460}
                                    />

                                </div>
                            </div>
                            <div className="mb-5 pb-0">
                                <div className="space-y-4 p-7">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold">
                                            Scrapping sales data and displaying it.
                                        </h2>
                                        <p>
                                            <time
                                                dateTime="2021-05-09 19:00"
                                                className="text-sm text-gray-400"
                                            >
                                                February 02, 2022
                                            </time>
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">Selenium </span>
                                    </div>
                                    <video
                                        className="w-full h-full"
                                        src={"/img/project-web-scrapper/video-2.mp4"}
                                        muted
                                        autoPlay
                                        loop
                                        controls={false}
                                    />

                                    <p className="text-gray-600">

                                        I used some of the following technologies:
                                        <br></br>
                                        <Link href={"https://www.python.org/"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Python
                                            </a>
                                        </Link>
                                        as the language
                                        <br></br>
                                        <Link href={"https://www.selenium.dev/"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Selenium
                                            </a>
                                        </Link>
                                        as the scrapper
                                        <br></br>
                                        <Link href={"https://www.chartjs.org/"}>
                                            <a className="text-purple-500 mr-1" target="_blank">
                                                Chart.js
                                            </a>
                                        </Link>
                                        to display the data
                                        <br></br>
                                        <br></br>
                                        This was a personal project I created to scrape sales data from 3 diffrent websites where I sold 3D products.
                                        <br></br>
                                        Each website displayed the data diffrently so I also had to modify the data to work with eachother.
                                        This was a fun project as this was a real life problem and the motivation was high to solve it.

                                        <br></br>
                                        <br></br>

                                    </p>
                                </div>



                                <div className="p-7 pb-12">
                                    <p className="text-gray-600">
                                        <div className="flex justify-center">
                                            You can checkout the code on my
                                            <Link href={"https://gitfront.io/r/user-3021369/mZS2s6SVAcBw/display-sale-data/blob/getting-data/getting_data.py"}>
                                                <a className="text-purple-500 ml-1" target="_blank">
                                                    Github.
                                                </a>
                                            </Link>
                                        </div>
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