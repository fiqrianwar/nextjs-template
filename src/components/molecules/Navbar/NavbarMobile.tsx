import { Avatar } from "@/components/atoms";
import React from "react";

const NavbarMobile = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Template Next Js</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Avatar />
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
