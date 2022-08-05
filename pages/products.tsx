import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ProfileAbout from "../components/ProfileAbout";
import ProfileCard from "../components/ProfileCard";
import ProfileInformation from "../components/ProfileInformation";
import ProfileSkills from "../components/ProfileSkills";

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
            <ProfileCard />
            <ProfileInformation />
            <ProfileSkills />
          </div>

          <div className="space-y-5 lg:col-span-2">
            <ProfileAbout />

            <div className="p-7 block-section">
              <Navigation />
              <h2 className="block-title">Products</h2>
              <ProductCard />
              <ProductCard />
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
      </main >
    </div >
  );
}


export default Products