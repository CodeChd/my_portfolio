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
        <span className="absolute bg-primary/0 hover:bg-primary/60 inset-0 max-xl:hidden">
          <div className="group text-3xl text-header-color font-semibold mt-3 gap-8 flex flex-col justify-center  w-full h-full ">
            <button className="my-6 opacity-0 group-hover:opacity-100">
              <a className="border-b-2 border-solid border-accent" href={projects.live}>LIVE DEMO</a>
            </button>
            <button className="opacity-0 group-hover:opacity-100">
              <a className="border-b-2 border-solid border-accent" href={projects.code}>VIEW CODE</a>
            </button>
          </div>
        </span>
      </div>
      <h3 className="max-md:text-xl max-lg:text-2xl text-3xl text-header-color font-bold my-4">
        {projects.name}
      </h3>
      <p className="text-text-color max-md:text-lg text-xl font-medium">
        {projects.technologies.split("  ")}
      </p>
      <div className="max-md:text-xl max-lg:text-2xl text-3xl xl:hidden">
        <button className="mr-12 mt-8 border-b-2 border-solid border-accent" role="link">
          <a href={projects.live}>LIVE DEMO</a>
        </button>
        <button className="border-b-2 border-solid border-accent">
          <a href={projects.code}>VIEW CODE</a>
        </button>
      </div>
    </article>
  );
};

export default ProjectLists;
