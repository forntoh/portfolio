import { Button } from "./button";

const Header = () => {
  return (
    <header id="header" className="absolute top-0 w-full py-8 bg-background">
      <div className="container flex justify-between">
        <span></span>
        <ul className="flex space-x-10 text-gray-500 items-center">
          <li className="cursor-pointer hover:text-primary transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            About
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            Work
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            Contact
          </li>
          <Button label="Resume" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
