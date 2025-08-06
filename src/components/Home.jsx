import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="relative h-[75vh] w-full bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/hourglass-sand-time-age-life-260nw-2389419999.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">
            Manage Time <span className="text-blue-500">Smartly</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Nexdo helps you organize, prioritize, and conquer your tasks with clarity and speed.
          </p>
          <a
            href="#to-do"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  }
}
