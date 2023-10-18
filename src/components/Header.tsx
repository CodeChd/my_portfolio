const Header = () => {
  return (
    <header className=" text-header-color py-6 z-100">
      <div className="flex max-lg:flex-col max-lg:items-center  justify-between ">
        <div className="logo ">
          <h2 className="text-4xl font-medium mb-4">cj</h2>
        </div>

        <nav className="px-4 ">
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
    </header>
  );
};

export default Header;
