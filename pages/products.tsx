import Head from "next/head";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-gray-100 antialiased" >
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
        <title>Products | Personal CV</title>
      </Head>

      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="shadow rounded-xl overflow-hidden">
              <div
                className="h-32 bg-cover"
                style={{
                  backgroundImage: "url('assets/img/cover.jpg')",
                }}
              ></div>
              <div className="pt-14 p-7 bg-white relative">
                <span className="status-badge bg-gray-400">Busy</span>
                <Link href="/">
                  <a>
                    <img
                      src="assets/img/avatar.jpg"
                      alt="Avatar"
                      className="user-photo"
                    />
                  </a>
                </Link>
                <div className="text-lg font-semibold mb-1.5">
                  Cristopher Abbott
                </div>
                <div className="text-sm text-gray-400 mb-7">
                  Senior Developer
                </div>
                <div className="flex group">
                  <button className="download-btn">Download CV</button>
                  <button className="download-btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-7 block-section">
              <h2 className="block-title">Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-gray-400">Location</div>
                  <div className="font-medium text-right text-gray-600">
                    London
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Experience</div>
                  <div className="font-medium text-right text-gray-600">
                    3+ years
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Availability</div>
                  <div className="font-medium text-right text-gray-600">
                    1 week
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Relocation</div>
                  <div className="font-medium text-right text-gray-600">No</div>
                </div>
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">Skills</h2>
              <div className="-m-2 flex flex-wrap">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 block-section">
              <h2 className="block-title">About me</h2>
              <p className="text-gray-600 mb-5">
                Libero quas veritatis nulla distinctio fuga nihil temporibus et.
                Quia dicta sapiente qui porro molestiae nobis incidunt
                voluptatem. Et voluptas sunt nihil. At perferendis voluptatem
                dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut
                quia explicabo voluptates.
              </p>

              <div className="flex flex-col space-y-4">
                <a href="#0" className="mail-link social-link-hover">
                  <i className="bx bx-at text-xl"></i>
                  <span>crisabbott@email.com</span>
                </a>

                <ul className="flex space-x-5">
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-facebook-circle text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-twitter text-2xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-github text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-7 block-section">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <Link href="/">
                    <a className="menu-link menu-link-hover">
                      Resume
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="menu-link menu-link-hover">
                      Projects
                    </a>
                  </Link>

                </li>
                <li>
                  <Link href="/products">
                    <a className="menu-link-active menu-link-hover">
                      Products
                    </a>
                  </Link>


                </li>
              </ul>
              <div className="border-t border-gray-200 mb-5"></div>

              <h2 className="block-title">Products</h2>
              <div className="mb-5 item-section">
                <div className="company-logo bg-blue-500">
                  <span className="text-2xl">S</span>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Sapiente</div>
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
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                          </svg>
                          <span>Tools</span>
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Founder</span>
                        </div>
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
                  <button className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
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
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <span>https://sapiente.space</span>
                  </button>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="mb-5 item-section">
                <div className="company-logo bg-green-700">
                  <span className="text-2xl">D</span>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">Deserunt</div>
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
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                          </svg>
                          <span>E-commerce</span>
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
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Co-founder</span>
                        </div>
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
                  <button className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
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
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <span>https://deserunt.io</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}


export default Products