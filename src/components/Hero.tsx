const Hero = () => {
  return (
    <section className="flex max-lg:flex-col max-lg:items-center justify-between border-b-2 border-solid border-text-color relative">
      <div
        id="left"
        className="max-md:mb-[10rem] max-lg:text-center max-lg:mb-[18rem] mb-[20rem] max-lg:order-2 h-full" 
      >
        <div className="relative max-lg:absolute max-lg:top-[0] left-[0] -translate-x-[20rem] translate-y-[2rem] ">
          <img
            src="/images/pattern-rings.svg"
            alt="pattern-rings"
            className="max-lg:w-[35rem] h-full"
          />
        </div>
        <h1 className="max-md:text-4xl text-7xl text-header-color font-bold w-[40vw] xl:max-w-[40vw] max-lg:w-full tracking-wide leading-[5rem] p-0 h-full">
          Hi nice to meet you! {""}
          <span className="border-b-4 border-solid border-accent">
            I'm Cj Francisco.
          </span>
        </h1>
        <p className="text-lg max-lg:w-full  w-[40vw] mt-[2rem]">
          Cj is a self-taught full-stack developer based in the Philippines,
          specializes in creating dynamic and user-friendly websites, constantly
          refining his skills through exploration and challenges
        </p>
        <p className="text-lg mt-[3rem] pb-8 ">
          <a
            href="#footer"
            className=" w-full text-header-color border-b-2 border-solid border-accent"
          >
            CONTACT ME
          </a>
        </p>
      </div>
      <div className="-z-10 relative max-lg:order-1 max-lg:flex-grow">
        <div className="max-md:w-[20rem] w-[38rem] max-xl:w-[35rem] absolute max-lg:relative top-0 right-0 -translate-y-[6.5rem]   rounded-md overflow-hidden ">
          <img
            src="/profile-tablet.png"
            alt="profile"
            className="relative  w-full h-full object-cover"
          />
        </div>
        <div className="relative max-lg:overflow-hidden">
          <img
            src="/images/pattern-circle.svg"
            alt="pattern-circle"
            className="relative w-[8rem] xl:-bottom-[39rem] xl:right-[35rem] max-xl:-bottom-[35rem] max-xl:right-[30rem]  max-lg:absolute max-lg:top-0 max-lg:-right-[10rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
