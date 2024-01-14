import React from "react";
import Link from "next/link";

type navbarTypes = {
  title: string;
  path: string;
};

function Navlink({ title, path }: navbarTypes) {
  return (
    <Link
      href={path}
      className="block py-0 pl-3 pr-4 text-white sm:text-xl rounded md:0 hover:text-primary mt-3 "
    >
      {title}
    </Link>
  );
}

export default Navlink;
