import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center uppercase mb-12 text-black">Contact Us</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-interconnected-world-map-business-and-travel-concept-communication-png-image_10608237.png"
                alt="Contact illustration"
              />
            </div>

            {/* Right: Contact Form */}
            <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 border-gray-300" />
        </div>
      </section>
    );
  }
}
