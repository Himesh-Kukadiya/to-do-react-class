import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
      navLinks: ["home", "to-do", "about", "contact"],
      showMenu: false, 
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { navLinks, showMenu } = this.state;

    return (
      <nav className="flex flex-wrap items-center justify-between bg-black text-white py-2 px-4 w-full sticky top-0 z-50">
        {/* Logo */}
        <div className="relative group uppercase cursor-pointer py-2">
          <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Nexdo
          </span>
        </div>

        {/* Hamburger Icon (visible on small & medium screens) */}
        <div className="md:hidden cursor-pointer" onClick={this.toggleMenu}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`w-full md:w-auto flex-col md:flex-row md:flex justify-evenly items-center md:space-x-6 mt-4 md:mt-0 ${
            showMenu ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((navItem, index) => (
            <li
              key={index}
              className="relative group uppercase px-2 py-2 cursor-pointer"
            >
              <a
                href={`#${navItem.toLowerCase()}`}
                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {navItem}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
