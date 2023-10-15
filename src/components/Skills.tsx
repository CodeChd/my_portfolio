import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="grid grid-cols-4 gap-5 my-[4rem] relative ">
      {skills.map((skill) => (
        <div key={skill.name} className="">
          <p className="text-4xl font-bold">{skill.name}</p>
        </div>
      ))}
      <div
        className="overflow-hidden -top-[2rem] relative"
        style={{ width: "calc(845.99px - 132.203px - 165px)" }}
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
