import Footer from './Footer'

/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col lg:items-start lg:flex-row  mt-10  max-w-3xl ml-10 mr-5 ">
        {/* Text Div  */}
        <div className="">
          <div>
            <p className="font-bold text-3xl mb-5">About Me </p>
          </div>
          <div className="font-semibold text-lg">
            Hi there 👋 ,<br /> I am Khushaal
          </div>
          <p className="max-w-sm">
            Welcome to my side of internet.I am a web and app developer residing
            in India.I like to learn about startups and how to make tech better
            and better.
            <br />
          </p>
          <p className="mt-5 text-white font-semibold">
            I want to build tools which help people change their lives!
          </p>
          <div>
            <div className="mt-10 font-semibold items-start text-xl flex">
              <h1>Technologies I Use 🧑‍💻</h1>
            </div>
            <div className=" grid grid-cols-3 gap-5 items-start mt-5  justify-center place-content-start place-items-start cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/776/776246.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75"
              />
              <img
                src="https://png2.cleanpng.com/sh/941dae5a64300110baf35832478baf9b/L0KzQYm3VME4N6dxiZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3mf773lgRmel5ue9H3cz3qf7FujPUua510RdlydHj4cn68gfQ2bGRofaZvY0S5QHA7V8MxO2Q5TKMAMkO8RoOBU8A0Omc8RuJ3Zx==/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75"
              />
              <img
                src="https://static.expo.dev/static/brand/square-512x512.png"
                alt=""
                className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75 rounded-2xl"
              />
              <img
                src="https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png"
                alt=""
                className="w-20 mt-2 mr-5 hover:animate-pulse transform transition-all duration-75 rounded-2xl"
              />
              <div className="mt-2 bg-white pl-5 rounded-full items-center justify-center flex">
                <img
                  src="https://iconape.com/wp-content/files/cf/353046/png/next-js-logo.png"
                  alt=""
                  className="w-20 mr-5 hover:animate-pulse transform transition-all duration-75 rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold">More About Me</h1>
            <p>
              I like to watch documentaries and interesting webseries. I like to
              study about space and science 🪐
            </p>
          </div>
          <Footer />
        </div>

        {/* Text Div  */}

        {/* Image Div  */}
        <div className="mt-20 lg:mt-5 cursor-pointer">
          <img
            src="https://pbs.twimg.com/profile_images/1425561562740256769/wilUuqQX_400x400.jpg"
            alt="some image"
            className="rounded-full w-40 p-2 border-4 border-yellow-300"
          />
        </div>
      </div>
    </div>
  )
}

export default About

// grid grid-cols-1 place-content-center md:grid-cols-2 mt-20
