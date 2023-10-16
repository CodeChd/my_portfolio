import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="grid  max-md:grid-cols-1 max-md:text-center max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-[3vw] my-[4rem] relative ">
      {skills.map((skill) => (
        <div key={skill.name} className="">
          <p className="text-4xl font-bold">{skill.name}</p>
        </div>
      ))}
      <div
        className="overflow-hidden -top-[2rem] relative"
        style={{ width: "calc(100vw - 3vw - 70vw)" }}
      >
        <img
          src="../src/assets/images/pattern-rings.svg"
          alt="pattern-rings"
          className="translate-x-[12rem]  "
        />
      </div>
    </section>
  );
};

export default Skills;
