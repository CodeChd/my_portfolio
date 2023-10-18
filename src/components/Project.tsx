import { projects } from "../data/projects";
import ProjectLists from "./ProjectLists";

const Project = () => {
  return (
    <section>
      <div className="flex justify-between  align-baseline ">
        <h2 className="max-md:text-5xl text-7xl font-bold text-header-color">
          Projects
        </h2>
        <p className="max-md:text-lg text-xl max-md:mt-4 mt-[3rem]">
          <a href="#footer" className=" text-header-color border-b-2 border-solid border-accent">
            CONTACT ME
          </a>
        </p>
      </div>

      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-8 my-[4rem]">
        {projects.map((projects) => (
          <ProjectLists key={projects.id} projects={projects} />
        ))}
       
      </div>
    </section>
  );
};

export default Project;
