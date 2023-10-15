import { projects } from "../data/projects";
import ProjectLists from "./ProjectLists";

const Project = () => {
  return (
    <section>
      <div className="flex justify-between align-baseline">
        <h2 className="text-7xl font-bold text-header-color">Projects</h2>
        <p className="text-xl mt-[3rem]">
          <span className=" w-100 text-header-color border-b-2 border-solid border-accent">
            CONTACT ME
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 my-[4rem]">
        {projects.map((projects) => (
          <ProjectLists key={projects.id} projects={projects} />
        ))}
      </div>
    </section>
  );
};

export default Project;
