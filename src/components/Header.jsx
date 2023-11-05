import { useState } from "react";

const Header = () => {
  const [logoName, setLogoName] = useState("Ankit Kumar");

  const [menuLinks, setMenuLinks] = useState([
    {
      id: 1,
      name: "Home",
      route: "/home",
    },
    {
      id: 2,
      name: "Projects",
      route: "/projects",
    },
    {
      id: 3,
      name: "Skills",
      route: "/skills",
    },
    {
      id: 4,
      name: "About",
      route: "/about",
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    route:
      "https://drive.google.com/u/0/uc?id=1oRuXy0dsHgQFWsZuNV1p7zzwj2ERD0E6&export=download",
  });
  return (
    <>
      <div className="h-20 main flex justify-between items-center bg-gray-200 px-16">
        {/* Main */}
        <div className="logo text-2xl font-bold">
          {/* logo */}
          <h3>{logoName}</h3>
        </div>
        <div className="menuLinks space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.route} className="hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </div>

        <div>
          {/* button */}
          <a
            href={actionButton.route}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:text-blue-900"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
