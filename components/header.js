const Header = () => {
  return (
    <header id="header" className="absolute top-0 w-full py-8 bg-background">
      <div className="container flex justify-between">
        <span></span>
        <ul className="flex space-x-10 text-gray-500 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li className="border-primary text-primary border rounded px-6 py-2 hover:bg-primary hover:text-background transition-all">
            Resume
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
