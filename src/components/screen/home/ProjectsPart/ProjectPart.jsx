import Container from "@/common/Container";
import React from "react";
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import SectionHeading from "@/common/SectionHeading";

const ProjectPart = () => {
  const text = `\nThe course was focused on learning HTML, CSS and JavaScript \ntechnologies, during the course I was able to develop different types of \nprojects also dealing with the semantic part of HTML and the importance of \naccessibility on web pages.`;
  return (
    <section className="bg-gray_8">
      <Container className="py-16 px-6 xl:px-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-[55%]">
            <div>
              <SectionHeading title="projects" />
            </div>
            <div className="mt-6">
              <p className="text-white text-base">
                These are some of the projects I developed during the course.
              </p>
              <p className="whitespace-pre-line text-white text-base">{text}</p>
            </div>
          </div>
          <div className="md:w-[45%]">
            <ProjectSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectPart;
