import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="grid max-md:grid-cols-1 max-md:text-center max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-[3vw] my-[4rem]  relative ">
      {skills.map((skill) => (
        <div key={skill.name} className="">
          <p className="text-4xl font-bold">{skill.name}</p>
        </div>
      ))}

      <img
        src="/images/pattern-rings.svg"
        alt="pattern-rings"
        className="absolute right-0 lg:-right-[8rem] bottom-0  lg:-bottom-[3rem] opacity-60"
      />
    </section>
  );
};

export default Skills;
