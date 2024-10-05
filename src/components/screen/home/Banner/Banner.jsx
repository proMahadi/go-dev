import Container from "@/common/Container";
import Image from "next/image";
import React from "react";
import bannerRightImg from "@/assets/bannerImages/bannerRightImg.png";
import sparkle from "@/assets/bannerImages/sparkle.png";

const Banner = () => {
  return (
    <section className="bg-bannerBg bg-no-repeat bg-center bg-cover relative ">
      <Container className="pt-[162px] pb-[90px] px-4 xl:px-0">
        <div className="md:flex items-center gap-x-6">
          <div className="md:w-[48%]">
            <div>
              <span className="text-default text-base">
                Front-end Developer
              </span>
            </div>
            <div className="w-fit relative">
              <h1 className="text-4xl lg:text-5xl text-white mb-4 mt-3  capitalize">Jody Fahey</h1>
              <div className="w-fit absolute top-[-16px] right-[-30px]">
                <Image src={sparkle} alt="sparkle" />
              </div>
            </div>
            <div>
              <p className="text-white text-2xl w-[333px] leading-9">
                Let's develop your next successful product together!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 w-[343px] sm:w-auto mt-12">
              <div>
                <button className="py-3.5 px-5 text-white font-semibold text-base rounded-[4px] bg-primary hover:bg-default duration-300 w-full sm:w-auto">
                  View My Projects
                </button>
              </div>
              <div>
                <button className="py-3.5 px-6 text-primary hover:text-default font-semibold text-base rounded-[4px] border-2 border-default hover:border-primary duration-300 w-full sm:w-auto">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[45%] md:block hidden">
            <Image src={bannerRightImg} alt="bannerImg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
