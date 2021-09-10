import React from "react";

const index = () => {
  return (
    <nav className="flex flex-row sm:items-center justify-between py-10">
      <div>
        <h1 className="text-2xl font-bold text-white">crowdfund</h1>
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row sm:items-center justify-evenly sm:space-x-6">
          <li className="text-white">
            <a href="http://idadilham.site/">About</a>
          </li>
          <li className="text-white">
            <a href="http://idadilham.site/">Discover</a>
          </li>
          <li className="text-white">
            <a href="http://idadilham.site/">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
