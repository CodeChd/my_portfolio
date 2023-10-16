import { ProjectTypes } from "../data/projects";

interface Props {
  projects: ProjectTypes;
}

const ProjectLists = ({ projects }: Props) => {
  return (
    <article className="p-2 ">
      <div className=" rounded-sm overflow-hidden relative ">
        <img
          src={projects.image}
          alt={projects.name}
          className=" w-full h-full "
        />
        <span className="absolute bg-primary/0 hover:bg-primary/60 inset-0">
          <div className="group text-3xl text-header-color font-semibold mt-3 gap-8 flex flex-col justify-center  w-full h-full ">
            <button className="my-6 opacity-0 group-hover:opacity-100">
              <span className="border-b-2 border-solid border-accent">
                LIVE DEMO
              </span>
            </button>
            <button className="opacity-0 group-hover:opacity-100">
              <span className="border-b-2 border-solid border-accent">
                VIEW CODE
              </span>
            </button>
          </div>
        </span>
      </div>
      <h3 className="text-3xl text-header-color font-bold my-4">
        {projects.name}
      </h3>
      <p className="text-text-color text-xl font-medium">
        {projects.technologies.split("  ")}
      </p>
    </article>
  );
};

export default ProjectLists;
