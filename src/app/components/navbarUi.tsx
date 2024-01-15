"use client";

import React from "react";
import Link from "next/link";
import Navlink from "./navLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuOverlay";
import Image from "next/image";

const LinksData = [
  {
    id: "1",
    title: "About",
    path: "#about",
  },
  {
    id: "2",
    title: "Projects",
    path: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    path: "#contact",
  },
  
];

function NavbarUi() {
  //usestate

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 border border-[#33353F] right-0 z-10 bg-[#000000] bg-opacity-100">
      <div className="text-white flex flex-wrap  container justify-between mx-auto p-5 lg:py-5">
        <Link
          href={"/"}
          className="flex items-center text-1xl md:text-2xl text-white   "
        >
      
        <p className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Hira Azhar</p>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {LinksData.map((values) => (
              <li key={values.id}>
                <Navlink title={values.title} path={values.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        {navbarOpen ? <MenuOverlay links={LinksData}/> : null}
      </div>
    </nav>
  );

}

export default NavbarUi;
