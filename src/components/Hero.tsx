const Hero = () => {
  return (
    <div className="flex justify-between">
      <div id="left">
        <div className="relative left-[0] -translate-x-[20rem] translate-y-[2rem] w-[50rem] mt-4 opacity-[80%]">
          <img
            src="../src/assets/images/pattern-rings.svg"
            alt="pattern-rings"
          />
        </div>
        <h1 className="text-7xl text-header-color font-bold w-[17ch] tracking-wide leading-[4rem]">
          Hi nice to meet you! {""}
          <span className="border-b-4 border-solid border-accent">
            I'm Cj Francisco.
          </span>
        </h1>
        <p className="text-xl w-[50ch] mt-[2rem]">
          Cj is a self-taught full-stack developer based in the Philippines,
          specializes in creating dynamic and user-friendly websites, constantly
          refining his skills through exploration and challenges
        </p>
        <p className="text-xl mt-[3rem]">
          <span className=" w-100 text-header-color border-b-2 border-solid border-accent">
            CONTACT ME
          </span>
        </p>
      </div>
      <div className="right -z-10 p-0 relative">
        <div className="w-[33vw] relative top-0 right-0 -translate-y-[6rem] rounded-md overflow-hidden ">
          <img src="/profile.png" alt="profile" />
        </div>
        <div className="absolute bottom-0 -translate-y-[90%] -left-[4rem] opacity-[80%]">
          <img
            src="../src/assets/images/pattern-circle.svg"
            alt="pattern-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
