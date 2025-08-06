import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="bg-black text-white text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} All rights reserved by <span className="font-semibold">Nexdo</span>
      </footer>
    );
  }
}
