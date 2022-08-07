import Head from "next/head";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ProfileAbout from "../components/ProfileAbout";
import ProfileCard from "../components/ProfileCard";
import ProfileInformation from "../components/ProfileInformation";
import ProfileSkills from "../components/ProfileSkills";

const Products = () => {

  const product = [
    {
      id: 1,
      letter: "B",
      letterColour: "company-logo bg-orange-500",
      name: "BLRDY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "Tools",
      svg: "https://img.icons8.com/color/48/000000/tools.png",
      role: "Founder",
      link: "https://www.google.com",
      last: false
    },
    {
      id: 2,
      letter: "B",
      letterColour: "company-logo bg-orange-500",
      name: "BLRDY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "Tools",
      svg: "https://img.icons8.com/color/48/000000/tools.png",
      role: "Founder",
      link: "https://www.google.com",
      last: true
    },

  ]


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
              <Navigation pathname={"/products"} />
              <h2 className="block-title">Products</h2>
              {product.map(product => (
                <ProductCard
                  key={product.id}
                  letter={product.letter}
                  letterColour={product.letterColour}
                  name={product.name}
                  description={product.description}
                  type={product.type}
                  svg={product.svg}
                  role={product.role}
                  link={product.link}
                  last={product.last}

                />
              ))}

            </div>
          </div>
        </div>
      </main >
    </div >
  );
}


export default Products