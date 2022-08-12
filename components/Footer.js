import React from "react";

function Footer() {
  return (
    <footer className="h-80 sm:h-64 bg-red text-white text-xl font-semibold p-4 md:p-10 m-auto">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-10  font-mono sm:font-sans">
        <div className="pl-2 my-4 sm:mx-auto">
          <h2 className="text-xl md:text-2xl text-black">Kontaktinformasjon</h2>
          <ul>
            <li className="text-base md:text-lg my-2">
              Email: sondremikalsen1@gmail.com
            </li>
            <li className="text-base md:text-lg my-2">Tlf: 918 32 308</li>
          </ul>
        </div>
        <div className="pl-2 my-4 sm:mx-auto">
          <h2 className="text-xl md:text-2xl text-black">Lenker</h2>
          <ul className="underline flex flex-row sm:flex-col">
            <li className="text-base md:text-lg my-2 pr-20">
              <a href="https://www.youtube.com/channel/UCZa77UBWvw2DgOupfXjjgFQ">
                Youtube
              </a>
            </li>
            <li className="text-base md:text-lg my-2">
              <a href="https://www.linkedin.com/in/sondre-schirmer-mikalsen-54b4441b7/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
