import React from "react";

import Link from "next/dist/client/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-2xl tracking-tight">
          <a>&lt;Sondre/&gt; </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow hidden md:block">
          <a
            href="cv"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mx-16 hover:underline"
          >
            CV
          </a>
          <a
            href="prosjekter"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mx-8 hover:underline"
          >
            Prosjekter
          </a>
          <a
            href="hobbyer"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mx-8 hover:underline"
          >
            Hobbyer
          </a>
          <a
            href="kunst"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mx-8 hover:underline"
          >
            Kunst
          </a>
          <a
            href="Blogg"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mx-8 hover:underline"
          >
            Blogg
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block hidden md:block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
