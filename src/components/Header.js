"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/images/logo.png";
import userImg from "../assets/images/user.jpg";
import navLinks from "@/constants/navLinks.";
import Navlink from "./Navlink";

function Header() {
  const isAuth = false;

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-8 w-auto"
              alt="E-bazaar Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-Bazaar
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isAuth ? (
              <Image
                height={32}
                width={32}
                className="w-8 h-8 rounded-full"
                src={userImg}
                alt="user photo"
              />
            ) : (
              <Link
                href={"/login"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((navLink, index) =>
                isAuth || !navLink.isAuth ? (
                  <Navlink navLink={navLink} key={index} />
                ) : null
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
