import Container from "@/common/Container";
import SectionHeading from "@/common/SectionHeading";
import SkillCard from "@/common/SkillCard";
import { skillData } from "@/data/skillData";
import React from "react";

const SkillPart = () => {
  return (
    <section className="bg-skillBg bg-no-repeat bg-center bg-cover">
      <Container className="py-16">
        <div className="flex justify-center">
          <SectionHeading title="skills" />
        </div>
        <div className="text-center mt-2 mb-16">
          <p className="text-white text-base">
            These are some of the skills I learned on the course.
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-y-6 sm:gap-x-6 sm:justify-center ">
          {skillData.map((item) => (
            <SkillCard key={item.id} item={item}/>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillPart;
