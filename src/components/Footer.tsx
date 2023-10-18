const Footer = () => {
  return (
    <footer className="bg-secondary font-grotesk">
      <section className="py-[4rem] max-w-[80vw] mx-auto flex max-lg:flex-col justify-between border-b-2 border-solid border-text-color relative">
        <div className="">
          <h2 className="text-7xl font-bold">Contact</h2>
          <p className="text-xl mt-8 max-lg:w-full w-[45ch]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <div className="relative max-lg:absolute max-lg:bottom-[6rem] left-[0] -translate-x-[20rem] translate-y-[2rem]  mt-4 ">
            <img
              src="/images/pattern-rings.svg"
              alt="pattern-rings"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full ">
          <form className="max-lg:w-full w-1/2 ms-auto flex flex-col gap-8 my-2">
            <input
              type="text"
              placeholder="NAME"
              className="bg-transparent border-b-2 border-text-color border-solid focus:border-accent w-full p-2 placeholder:text-text-color/50 outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-transparent border-b-2 border-text-color border-solid focus:border-accent w-full p-2 placeholder:text-text-color/50 outline-none"
            />
            <textarea
              rows={5}
              placeholder="MESSAGE"
              className="bg-transparent border-b-2 border-text-color border-solid focus:border-accent w-full p-2 placeholder:text-text-color/50 outline-none"
            ></textarea>
            <button className="ms-auto border-b-2 border-solid border-accent">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <div className="flex max-lg:flex-col max-lg:items-center gap-8 justify-between py-[4rem] max-w-[80vw] mx-auto">
        <div className="logo">
          <h2 className="text-4xl font-medium ">cj</h2>
        </div>
        <nav className="px-4">
          <ul className="flex gap-8">
            <li>
              <img src="/images/icon-github.svg" alt="github" />
            </li>
            <li>
              <img
                src="/images/icon-frontend-mentor.svg"
                alt="frontendMentor"
              />
            </li>
            <li>
              <img
                src="/images/icon-linkedin.svg"
                alt="linkedin"
              />
            </li>
            <li>
              <img src="/images/icon-twitter.svg" alt="twitter" />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
