import HeroImage from "../assets/hero.svg";
import AboutImage from "../assets/about.svg";
import Proyek1 from "../assets/proyek-1.webp";
import Proyek2 from "../assets/proyek-2.webp";
import Proyek3 from "../assets/proyek-3.webp";
import Proyek4 from "../assets/proyek-4.webp";
import Proyek5 from "../assets/proyek-5.webp";
const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-32 gap-20">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              <span className="font-bold text-sky-400 underline">
                Lorem ipsum{" "}
              </span>
              dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-base/8 mb-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              omnis quos illo asperiores aspernatur hic odit ex deleniti natus
              necessitatibus.
            </p>
            <a
              href="#"
              className="text-white bg-sky-400 hover:bg-sky-500 transition-all rounded-full px-4 py-2 shadow"
            >
              About us <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt={AboutImage}
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              <span className="font-bold text-sky-400 underline">
                Lorem ipsum{" "}
              </span>
              dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-base/loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              omnis quos illo asperiores aspernatur hic odit ex deleniti natus
              necessitatibus.
            </p>
          </div>
        </div>
        <div className="services pt-32" id="services">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 text-center">
            Services
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 1
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                accusantium vitae incidunt ipsum dignissimos. Architecto.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4 ">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 1
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                accusantium vitae incidunt ipsum dignissimos. Architecto.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4 ">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Service Name 1
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                accusantium vitae incidunt ipsum dignissimos. Architecto.
              </p>
            </div>
          </div>
          <div className="projects pt-32" id="projects">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 text-center">
              Projects
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <div className="project-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek1}
                  alt="Project Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 1</h3>
                <p className=" text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, omnis illum officiis eveniet repudiandae nostrum?
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek2}
                  alt="Project Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 2</h3>
                <p className=" text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, omnis illum officiis eveniet repudiandae nostrum?
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek3}
                  alt="Project Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 3</h3>
                <p className=" text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, omnis illum officiis eveniet repudiandae nostrum?
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek4}
                  alt="Project Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 4</h3>
                <p className=" text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, omnis illum officiis eveniet repudiandae nostrum?
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek5}
                  alt="Project Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">Project Name 5</h3>
                <p className=" text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, omnis illum officiis eveniet repudiandae nostrum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
