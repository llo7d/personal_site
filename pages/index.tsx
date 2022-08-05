import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProfileAbout from "../components/ProfileAbout";
import ProfileCard from "../components/ProfileCard";
import ProfileInformation from "../components/ProfileInformation";
import ProfileSkills from "../components/ProfileSkills";

const Home = () => {
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
              {/* Navigation */}
              <Navigation />

              <h2 className="block-title">Experience</h2>
              <div className="mb-5 item-section">
                <div className="company-logo">
                  <img src="/assets/img/experience.png" />
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Senior Developer</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Twitter</span>
                        </div>
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>June 2019 – Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="mb-5 item-section">
                <div className="company-logo">
                  <img src="/assets/img/experience.png" />
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Middle Developer</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Dropbox</span>
                        </div>
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>April 2018 – June 2019</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="item-section">
                <div className="company-logo">
                  <img src="/assets/img/experience.png" />
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Junior Developer</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Blogger</span>
                        </div>
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      <div className="job-item-badge">Full time</div>
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>December 2017 – March 2018</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Aut omnis voluptatem sit sequi. Voluptatem temporibus
                    repellat voluptatem voluptatibus enim voluptas
                    necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe
                    asperiores beatae voluptate corporis est ea voluptatem. Enim
                    quo sed et sint aspernatur distinctio qui quam.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">Education</h2>
              <div className="mb-5 item-section">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
                  style={{
                    backgroundImage: "url('assets/img/bu-logo.jpg')",
                  }}
                ></div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">
                        Master in Software Engineering
                      </div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                          <span>Brunel University</span>
                        </div>
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>September 2017 – May 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="item-section">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
                  style={{
                    backgroundImage: "url('assets/img/bu-logo.jpg')",
                  }}
                ></div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">
                        Master in Software Engineering
                      </div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                          <span>Brunel University</span>
                        </div>
                        <div className="item-header-info">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
                      <div className="item-header-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>September 2013 – May 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 