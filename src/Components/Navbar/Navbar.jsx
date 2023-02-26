import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div
        className={
          "flex justify-between text-xl p-5 px-10 bg-[#222] text-white shadow-md"
        }
      >
        <div>
          <h2 className={"font-bold"}>Subham.</h2>
        </div>
        <div className={"a"}>
          <ul className={"flex gap-7"}>
            <li className={"cursor-pointer"}>Home</li>
            <li className={"cursor-pointer"}>About</li>
            <li className={"cursor-pointer"}>Services</li>
            <li className={"cursor-pointer"}>Portfolio</li>
            <li className={"cursor-pointer"}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
