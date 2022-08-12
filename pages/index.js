import Image from "next/image";
import bilde1 from "../images/1.jpg";
import bilde2 from "../images/2.jpg";
import bilde3 from "../images/3.jpg";
import TextImage from "../components/TextImage";

import stickerImg from "../images/sticker.png";
import studying from "../images/studying.png";
import sunglasses from "../images/sunglasses.png";
import apple from "../images/apple.png";

export default function Home() {
  return (
    <div className="sm:text-md lg:text-xl text-white m-auto text-center">
      <div className="px-2">
        <div className=" w-3/4 m-auto border-l-4 border-b-4  border-cyan py-5 md:my-24 my-12 mb-16">
          <p className="sm:text-7xl text-5xl font-sans text-white uppercase text-left pl-10 sm:text-center">
            Sondre Schirmer-Mikalsen
          </p>
        </div>
        <div className="top-0 flex flex-col items-center justify-center object-fit text-dark h-80 sm:hidden">
          <TextImage bg="white" image={apple} />
        </div>

        <p className="sm:text-2xl px-10 text-md md:text-xl  mb-8 font-mono md:font-sans">
          Informatikkstudent med interesse for programmering, webutvikling og
          UX-design.
        </p>
        <button
          href="#fus"
          onClick={console.log("clicked")}
          className="rounded-full flex flex-row m-auto bg-dark border-2 border-cyan text-cyan  px-3 py-1 mb-8"
        >
          Les mer her{" "}
          <svg
            className="w-6 h-6 m-auto ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="relative text-dark">
        <div className="pb-10 flex flex-col bg-dark text-white hidden md:block">
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-4  w-5/6 m-auto text-dark h-80 my-4 md:gap-2 drop-shadow-xl">
              <div
                id="fus"
                className="bg-black h-80 relative drop-shadow-lg  border-white border-2"
              >
                <Image
                  alt=""
                  src={bilde1}
                  className="object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-black h-80 relative drop-shadow-lg  border-white border-2 ">
                <Image
                  alt=""
                  src={bilde2}
                  className="object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-black h-80 relative drop-shadow-lg  border-white border-2 ">
                <Image
                  alt=""
                  src={bilde3}
                  className="object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-black h-80 relative drop-shadow-2xl  border-white border-2 ">
                <Image
                  alt=""
                  src={bilde1}
                  className="object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red text-white">
          <TextImage
            bg="white"
            image={stickerImg}
            tittel="Velkommen!"
            text="Hei du der! Mitt navn er Sondre Schirmer-Mikalsen, og på denne siden kan du finne litt info om meg om du virkelig gidder. Jeg går femteåret på informatikk ved NTNU i Trondheim, og spesialiserer meg innenfor interaksjonsdesign, spill og læringsteknologi. På denne siden finner du CV-en min, info om mine ferdigheter innenfor webutvikling, litt om mine hobbyer, og du kan se diverse applikasjoner jeg har laget.kdwefk Hei du der! Mitt navn er Sondre Schirmer-Mikalsen, og på denne siden kan du finne litt info om meg om du virkelig gidder. Jeg går femteåret på informatikk ved NTNU i Trondheim, og spesialiserer meg innenfor interaksjonsdesign, spill og læringsteknologi."
          />
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan">
          <TextImage
            bg="white"
            image={studying}
            tittel="Velkommen!"
            text="Non nulla laboris non consequat sunt enim in dolor mollit magna consequat. Et amet in consequat consequat ullamco reprehenderit aliquip elit exercitation sit. Exercitation incididunt ullamco ex incididunt veniam eu ipsum reprehenderit ipsum occaecat Lorem nostrud quis aute. Pariatur ex sit Lorem eiusmod id.

Nostrud exercitation adipisicing ut esse duis incididunt in ullamco qui in in non dolor adipisicing. Culpa aliquip veniam laboris cupidatat veniam excepteur. Duis sit deserunt exercitation laborum officia id velit magna. Commodo amet ullamco elit sint consequat veniam sit. Mollit consequat sunt do et duis labore cupidatat duis. Velit dolor eiusmod elit incididunt."
          />
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray text-dark">
          <TextImage
            bg="white"
            image={sunglasses}
            tittel="Velkommen!"
            text="Non nulla laboris non consequat sunt enim in dolor mollit magna consequat. Et amet in consequat consequat ullamco reprehenderit aliquip elit exercitation sit. Exercitation incididunt ullamco ex incididunt veniam eu ipsum reprehenderit ipsum occaecat Lorem nostrud quis aute. Pariatur ex sit Lorem eiusmod id.

Nostrud exercitation adipisicing ut esse duis incididunt in ullamco qui in in non dolor adipisicing. Culpa aliquip veniam laboris cupidatat veniam excepteur. Duis sit deserunt exercitation laborum officia id velit magna. Commodo amet ullamco elit sint consequat veniam sit. Mollit consequat sunt do et duis labore cupidatat duis. Velit dolor eiusmod elit incididunt."
          />
        </div>
      </div>

      {/*
      <div className="flex my-20 h-160 mx-10 items-stretch">
        <div className="w-3/5 bg-red px-5 py-10 text-dark">
          Dette er min hjemmeside Commodo consequat pariatur duis aute laboris
          officia occaecat non. Qui pariatur nulla anim in laboris. Tempor
          aliqua dolor non veniam mollit. Officia non do fugiat magna qui nisi
          labore laborum enim deserunt non commodo. Sunt ut eiusmod dolor eu
          excepteur ad sit culpa ex. Anim aliquip occaecat culpa velit amet
          labore ad ad aliquip. Aliquip Lorem deserunt ad aliquip culpa amet
          nostrud.Mollit consectetur commodo elit excepteur tempor eu ea. Magna
          irure fugiat eiusmod dolore sint sit ad officia. Excepteur commodo
          sint nostrud nostrud et ea esse laborum. Non incididunt dolore
          proident irure reprehenderit excepteur voluptate ex.
        </div>
        <Image className="object-contain self-center" src={bilde1} alt="" />
      </div>

      <div className="flex my-20 h-160 mx-10 items-stretch">
        <div className="w-2/5 bg-gray px-10 py-10 text-dark">
          wkefoprk Enim magna ut qui magna nostrud qui magna ad ipsum elit
          ullamco sint laborum non. Pariatur aute elit eu Lorem non. Deserunt do
          nulla reprehenderit adipisicing cupidatat dolor tempor id. Incididunt
          proident consequat quis esse et sit ea ipsum reprehenderit. Est
          consectetur eu incidi
        </div>
        <Image
          className="my-10 object-contain self-center"
          src={bilde2}
          alt=""
        />
      </div>

      <div className="flex my-20 h-160 mx-10 items-stretch">
        <div className="w-3/5 bg-aqua px-10 py-10 my-10 text-dark ">
          Labore Lorem mollit ea labore deserunt dolore occaecat occaecat velit
          pariatur ipsum in. Duis laboris reprehenderit tempor mollit
          consectetur. Aute qui occaecat pariatur dolor aliqua quis duis. Id
          adipisicing labore enim adipisicing duis esse mollit do excepteur
          incididunt. Commodo sint proident est magna officia. Aliquip non
          ullamco aliquip qui excepteur qui proident amet. Ut laborum laborum eu
          ad ea ad dolor ut non Lorem magna aliquip voluptate voluptate.
          Cupidatat aliquip quis velit ullamco commodo sint aliquip aliqua.
          Aliquip adipisicing laboris mollit laborum deserunt amet eu Lorem aute
          ut esse anim reprehenderit.
        </div>
        <Image
          className="my-10 object-contain self-center my-40"
          src={bilde3}
          alt=""
        />
      </div>
  */}
    </div>
  );
}
