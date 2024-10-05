import AboutMe from "@/components/screen/home/AboutMe/AboutMe";
import Banner from "@/components/screen/home/Banner/Banner";
import Contact from "@/components/screen/home/Contact/Contact";
import ProjectPart from "@/components/screen/home/ProjectsPart/ProjectPart";
import SkillPart from "@/components/screen/home/SkillPart/SkillPart";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <SkillPart />
      <ProjectPart />
      <Contact />
    </>
  );
}
