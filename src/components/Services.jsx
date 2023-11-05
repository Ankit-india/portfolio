import { useState } from "react";

const Services = () => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: `<i class="text-5xl fa-brands fa-java"></i>`,
      title: `Java Development`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            veritatis eos. Maxime eveniet incidunt expedita repudiandae nam
            sunt vitae facere!`,
    },
    {
      id: 2,
      icon: `<i class="text-5xl fa-solid fa-server"></i>`,
      title: `Backend Development`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            veritatis eos. Maxime eveniet incidunt expedita repudiandae nam
            sunt vitae facere!`,
    },
  ]);
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-5xl pb-16 font-bold underline text-center">
          My Services
        </h1>
        <div className="flex p-10 space-x-7">
          <div className="cursor-pointer hover:bg-gray-200 text-center space-y-5  bg-slate-100 p-10 rounded-lg shadow-xl">
            <i class="text-5xl fa-brands fa-java"></i>
            <h1>Java Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              veritatis eos. Maxime eveniet incidunt expedita repudiandae nam
              sunt vitae facere!
            </p>
            <div>
              <a
                href="/check"
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:text-blue-900"
              >
                Check
              </a>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 text-center space-y-5 bg-slate-100 p-10 rounded-lg shadow-xl">
            <i class="text-5xl fa-solid fa-server"></i>
            <h1>Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              veritatis eos. Maxime eveniet incidunt expedita repudiandae nam
              sunt vitae facere!
            </p>
            <div>
              <a
                href="/check"
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:text-blue-900"
              >
                Check
              </a>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 text-center space-y-5 bg-slate-100 p-10 rounded-lg shadow-xl">
            {/* <i class=" fa-solid fa-server"></i> */}
            <i class="text-5xl fa-brands fa-react"></i>
            <h1>Frontend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              veritatis eos. Maxime eveniet incidunt expedita repudiandae nam
              sunt vitae facere!
            </p>
            <div>
              <a
                href="/check"
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:text-blue-900"
              >
                Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
