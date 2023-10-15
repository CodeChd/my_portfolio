const Header = () => {
  return (
    <header className=" text-header-color py-6 z-100">
      <div className="flex justify-between">
        <div className="logo">
          <h2 className="text-4xl font-medium ">cj</h2>
        </div>
        <nav className="px-4">
          <ul className="flex gap-8">
            <li>
              <img src="../src/assets/images/icon-github.svg" alt="github" />
            </li>
            <li>
              <img
                src="../src/assets/images/icon-frontend-mentor.svg"
                alt="frontendMentor"
              />
            </li>
            <li>
              <img
                src="../src/assets/images/icon-linkedin.svg"
                alt="linkedin"
              />
            </li>
            <li>
              <img src="../src/assets/images/icon-twitter.svg" alt="twitter" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
