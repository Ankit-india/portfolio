import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Backend Developer",
        "Frontend Developer",
        "Mobile App Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full py-20 flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Ankit Kumar</h1>
          <h2 className="text-3xl ">
            I am{" "}
            <span className="font-bold underline" ref={el}>
              Backend Developer
            </span>
          </h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id!
          </p>

          <div className="icons-container flex space-x-5">
            <a
              className=" hover:bg-blue-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
              href="https://github.com/Ankit-india"
              target="_blank"
            >
              <i class="fa-brands text-4xl fa-github"></i>
            </a>
            <a
              className=" hover:bg-blue-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
              href="https://www.linkedin.com/in/ankitkr00/"
              target="_blank"
            >
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
            <a className=" hover:bg-blue-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a
              className=" hover:bg-blue-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
              href="https://www.instagram.com/a_n_k_i_t_1_9/"
              target="_blank"
            >
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl px-3  py-2 bg-blue-500 hover:text-blue-600  rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;