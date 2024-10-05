import Container from "@/common/Container";
import Image from "next/image";
import React from "react";
import myImg from "@/assets/aboutImages/myImg.png";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";
import Link from "next/link";
import SectionHeading from "@/common/SectionHeading";

const AboutMe = () => {
  const text = ` Now I'm going to tell you a little about myself.\nMy name is Jody, and I'm passionate about technology and products, and mainly, I love what I do.\n\nI participate in the entire process of creating and developing digital products, from creating wireframes to high-fidelity projects ready to be sent to the development team. \n\nI have been working in this area for over 8 years.`;
  return (
    <section className="bg-gray_8">
      <Container className="py-[110px] px-6 xl:px-0">
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-12 items-center">
          <div className="flex flex-col md:w-[25%] items-center">
            <div className="h-40 w-40 border-4 border-default rounded-full ">
              <Image
                className="h-[152px] w-[152px] rounded-full overflow-hidden"
                src={myImg}
                alt="myImg"
              />
            </div>
            <div className="text-center my-4">
              <h3 className="text-2xl text-primary font-semibold capitalize">
                Jody Fahey
              </h3>
              <span className="text-white text-base ">Front-end Developer</span>
            </div>
            <div className="flex items-center gap-x-5 text-default text-2xl">
              <Link href="#">
                <FiGithub />
              </Link>
              <Link href="#">
                <CiLinkedin />
              </Link>
              <Link href="#">
                <PiYoutubeLogoLight />
              </Link>
            </div>
          </div>
          <div>
            <div className="w-fit relative">
              <SectionHeading title='about me'/>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <PiHandWaving className="text-2xl text-default " />
              </div>
              <div className="my-6">
                <p className="font-semibold text-white">Hi, how's it going?</p>
              </div>
            </div>
            <div>
              <p className="whitespace-pre-line text-white text-base">{text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
