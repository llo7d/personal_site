import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-gray-100 antialiased">
      <Head>
        <meta charset="UTF-8" />
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
        <title>Blog | Personal CV</title>
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
                  <a
                    href="/public/index.html"
                    className="menu-link-active menu-link-hover"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/public/products.html"
                    className="menu-link menu-link-hover"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/public/blog.html"
                    className="menu-link menu-link-hover"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div className="border-t border-gray-200 mb-5"></div>

              <a
                href="/public/single-article.html"
                className="article-title-hover block mb-5"
              >
                <article className="article-section">
                  <div className="space-y-3 mb-5 p-7 pb-0">
                    <h2 className="text-lg font-semibold">
                      Qui quasi aut iure provident occaecati dignissimos et
                      illo.
                    </h2>

                    <p className="text-gray-600">
                      Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                      cum velit quibusdam sed ducimus qui. Quis ut non hic
                      facilis eum ut voluptatibus eveniet. Repellat accusantium
                      non maxime sequi dignissimos magnam et quos. Consequatur
                      vel numquam.
                    </p>

                    <p>
                      <time
                        dateTime="2021-05-09 19:00"
                        className="text-sm text-gray-400"
                      >
                        May 09, 2021
                      </time>
                    </p>
                  </div>

                  <div className="article-img">
                    <img
                      src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </article>
              </a>

              <a
                href="/public/single-article.html"
                className="article-title-hover block"
              >
                <article className="article-section">
                  <div className="space-y-3 mb-5 p-7 pb-0">
                    <h2 className="text-lg font-semibold">
                      Qui quasi aut iure provident occaecati dignissimos et
                      illo.
                    </h2>

                    <p className="text-gray-600">
                      Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                      cum velit quibusdam sed ducimus qui. Quis ut non hic
                      facilis eum ut voluptatibus eveniet. Repellat accusantium
                      non maxime sequi dignissimos magnam et quos. Consequatur
                      vel numquam.
                    </p>

                    <p>
                      <time
                        dateTime="2021-05-09 19:00"
                        className="text-sm text-gray-400"
                      >
                        May 09, 2021
                      </time>
                    </p>
                  </div>

                  <div className="article-img">
                    <img
                      src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
