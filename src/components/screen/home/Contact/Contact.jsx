import Container from "@/common/Container";
import Image from "next/image";
import React from "react";
import contactImage from "@/assets/contactImages/contactImage.png";
import SectionHeading from "@/common/SectionHeading";
import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import Link from "next/link";

const Contact = () => {
  const text = `Feel free to get in touch, it will be a great pleasure \nto be able to help you with your project, contact me now!`;
  return (
    <section className="bg-skillBg bg-no-repeat bg-center bg-cover">
      <Container className="py-16 px-6 xl:px-0">
        <div className="flex items-center justify-between">
          <div>
            <div>
              <SectionHeading title="contact" />
            </div>
            <div className="mt-4 mb-12">
              <p className="whitespace-pre-line text-white text-base">{text}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <LuPhone className="text-default text-2xl" />
                <p className="text-white text-base">(12) 98765 - 4321</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaWhatsapp className="text-default text-2xl" />
                <p className="text-white text-base">(12) 98765 - 4321</p>
              </div>
              <div className="flex items-center gap-x-2">
                <TfiEmail className="text-default text-2xl" />
                <p className="text-white text-base">(12) 98765 - 4321</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5 text-default text-2xl mt-12">
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
          <div className="md:block hidden">
            <Image src={contactImage} alt="comtact img" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
