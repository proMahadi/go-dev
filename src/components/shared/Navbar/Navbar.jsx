"use client";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Container from "@/common/Container";
import Image from "next/image";
import { navData } from "@/data/navData";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section className="absolute w-full z-50">
      <Container className="relative py-4 md:py-0 ">
        <div className="flex items-center justify-between px-4 lg:px-6 xl:px-0">
          <div>
            <Image src={logo} alt="logo"/>
          </div>
          <div className="md:block hidden">
            <ul className="flex capitalize text-white  items-center gap-x-6 text-base ">
              {navData.map((navMenu) => (
                <li
                  className=" relative py-6 px-4 hover:text-default hover:font-bold  hover:border-b-2 hover:border-default w-[109px] h-[70px]  flex justify-center"
                  key={navMenu.id}
                >
                  <Link className="duration-300" href={navMenu.path}>
                    {navMenu.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="block md:hidden text-white text-xl"
          >
            <FaBars />
          </div>
        </div>
        {/* small device navbar */}
        <div
          className={`absolute  bg-gray_8 rounded-b-2xl w-full  md:hidden grid overflow-hidden transition-all duration-300 ease-in-out py-6 px-10 z-50 ${
            showNav
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="flex flex-col capitalize text-white  text-base overflow-hidden ">
            {navData.map((navMenu) => (
              <li
                className=" relative py-6 px-4 hover:text-default hover:font-bold  hover:border-b-2 hover:border-default w-[109px] h-[70px]  flex justify-center"
                key={navMenu.id}
              >
                <Link className="duration-300" href={navMenu.path}>
                  {navMenu.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* small device navbar */}
      </Container>
    </section>
  );
};

export default Navbar;
