import React from "react";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="to-do" className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center uppercase mb-12 text-black">
            Contact Us
          </h1>

          <hr />
        </div>
      </section>
    );
  }
}
