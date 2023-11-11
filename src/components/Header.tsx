const Header = () => {
  return (
    <header className=" text-header-color z-100">
      <div className="flex max-lg:flex-col max-lg:items-center  xl:py-6 justify-between ">
        <div className="logo  ">
          <h2 className="text-4xl font-medium max-md:mb-2 mb-4">cj</h2>
        </div>

        <nav className="px-4 m-0">
          <ul className="flex gap-8">
            <li>
              <a href="https://github.com/CodeChd" target="_blank">
                <img src="/images/icon-github.svg" alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/CodeChd"
                target="_blank"
              >
                <img
                  src="/images/icon-frontend-mentor.svg"
                  alt="frontendMentor"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cj-francisco-918509275/"
                target="_blank"
              >
                <img src="/images/icon-linkedin.svg" alt="linkedin" />
              </a>
            </li>
      
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
