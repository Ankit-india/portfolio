import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Full Stack Developer",
    desc1: `I'm a Aspiring Full Stack Software Engineer. I'm skilled with
    C++, Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Tailwind
    CSS, AWS EC2, AWS S3, AWS RDS etc.`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
    obcaecati quia est rem adipisci beatae facilis ipsum
    voluptatibus aliquam odit. Eos impedit provident obcaecati
    nostrum ipsa accusamus modi pariatur mollitia sed assumenda.
    Quaerat esse doloremque sequi aspernatur deleniti similique
    labore!`,
    buttonText: "Read More...",
  });

  return (
    <>
      {/* <h1>This is an ABout Seciton Of ANKIT KUMAR</h1> */}
      <div className="main-container bg-gray-100 w-full py-16 ">
        <h1 className="text-5xl pb-16 underline text-center font-bold">
          ABOUT ME
        </h1>
        <div className="flex justify-center items-center">
          {/* image comtainer  */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={data.image}
              alt="Tech Stack"
            />
          </div>
          {/* text container */}
          <div className="w-full flex justify-center space-y-4">
            <div className="w-2/3 space-y-5">
              <h1 className="text-5xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:text-blue-900">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
