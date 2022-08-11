import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-cyan text-center">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-20">
        <ul className="flex sm:flex-col p-4 rounded-lg md:flex-row md:space-x-10 md:text-2xl text-white font-semibold">
          <li className="block hover:underline underline-offset-4 transition ease-in-out duration-300">
            <Link href="/">
              <a>&lt;Sondre/&gt;</a>
            </Link>
          </li>
          <li className="block hover:underline underline-offset-4 transition ease-in-out duration-300">
            <Link href="projects">
              <a>Prosjekter</a>
            </Link>
          </li>
          <li className="block hover:underline underline-offset-4 transition ease-in-out duration-300">
            <Link href="cv">
              <a>CV</a>
            </Link>
          </li>
          <li className="block hover:underline underline-offset-4 transition ease-in-out duration-300">
            <Link href="art">
              <a>Kunst</a>
            </Link>
          </li>
          <li className="block hover:underline underline-offset-4 transition ease-in-out duration-300">
            <Link href="hobbies">
              <a>Hobbyer</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
