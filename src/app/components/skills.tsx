import Link from "next/link";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import html from "../../../public/images/html.svg";
import css from "../../../public/images/css.svg";
import js from "../../../public/images/js.svg";
import ts from "../../../public/images/ts.png";
import tailwind from "../../../public/images/tailwind.svg";
import bootstrap from "../../../public/images/bootstrap.svg";
import nodejs from "../../../public/images/nodejs.svg";
import react from "../../../public/images/react.svg";
import php from "../../../public/images/php.svg";
import mongodb from "../../../public/images/mongodb.svg";
import mysql from "../../../public/images/mysql.svg";
export function Skills() {
  return (
    <section className="w-full bg-white h-auto justify-center">
      <div className="flex flex-col w-full max-w-4xl mx-auto p-3">
        <h2 className="text-blue-500 w-full text-center font-bold text-2xl">
          Skills
        </h2>
      </div>
      <div className="h-px bg-gray-400 w-1/5 mx-auto rounded-md"> &nbsp;</div>
      {/* Titles container */}
      <div className="flex flex-row px-4 pt-5 mx-auto h-full first-letter:md:items-center md:px-3 md:gap-8 items-stretch max-w-4xl">
        {/* Frontend */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-xl">Frontend</h2>
          </div>
        </div>
        {/* Backend */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-xl">Backend</h2>
          </div>
        </div>
        {/* Database */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-xl">Databases</h2>
          </div>
        </div>
      </div>
      {/* Content container */}

      <div className="flex flex-row px-4 py-10 mx-auto h-full first-letter:md:items-center md:px-3 md:gap-8 items-stretch max-w-4xl">
        {/* Frontend Skills */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <ul className="flex flex-wrap justify-between">
            <li>
              <Image src={html} alt="HTML" width={40} height={40} />
            </li>
            <li>
              <Image src={css} alt="CSS" width={40} height={40} />
            </li>
            <li>
              <Image
                src={js}
                alt="JavaScript"
                style={{ display: "inline" }}
                width={40}
                height={40}
              />
            </li>
          </ul>
          <ul className="flex flex-wrap justify-between">
            <li>
              <Image
                src={ts}
                alt=""
                style={{ display: "inline" }}
                width={40}
                height={40}
              />
            </li>
            <li className="py-2">
              <Image src={tailwind} alt="" width={40} />
            </li>
            <li>
              <Image src={react} alt="" width={40} height={40} />
            </li>
          </ul>
        </div>
        <div className="w-px bg-gray-300 my-2 mx-auto rounded-md">&nbsp;</div>
        {/* Backend Skills */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <ul className="flex flex-wrap justify-between px-6">
            <li>
              <Image src={nodejs} alt="" width={40} height={40} />
            </li>
            <li className="py-2">
              <Image src={php} alt="" width={40} height={40} />
            </li>
          </ul>
        </div>
        <div className="w-px bg-gray-300 my-2 mx-auto rounded-md">&nbsp;</div>
        {/* Database Skills */}
        <div className="flex flex-col w-1/2 md:w-1/3 text-center gap-8 mx-2">
          <ul className="flex flex-wrap justify-between px-6">
            <li>
              <Image src={mongodb} alt="" width={40} height={40} />
            </li>
            <li>
              <Image src={mysql} alt="" width={40} height={40} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
