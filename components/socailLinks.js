import {
  RiGithubLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiYoutubeLine,
} from "react-icons/ri";

export const SocailLinks = ({
  data = [
    { icon: "github", username: "forntoh" },
    { icon: "facebook", username: "forntoh.thomas" },
    { icon: "twitter", username: "@forntoh" },
    { icon: "instagram", username: "@forntoh" },
    { icon: "linkedin", username: "forntoh" },
  ],
}) => {
  const iconClassName =
    "group-hover:p-0 p-px h-7 w-7 z-10 transition-all text-gray-500 group-hover:text-primary";
  return (
    <div
      id="social-links"
      className="flex sticky justify-between bottom-0 w-full pl-9 pr-5 md:px-20 items-end"
    >
      <ul className="flex flex-col space-y-6 before:w-px before:bg-gray-500 before:h-full before:absolute before:-ml-5 pb-24 before:mt-2">
        {data.map((item, i) => (
          <li
            key={i}
            className="group relative cursor-pointer flex items-center space-x-2"
          >
            {item?.icon == "github" ? (
              <RiGithubLine className={`${iconClassName}`} />
            ) : item?.icon == "facebook" ? (
              <RiFacebookLine className={`${iconClassName}`} />
            ) : item?.icon == "instagram" ? (
              <RiInstagramLine className={`${iconClassName}`} />
            ) : item?.icon == "twitter" ? (
              <RiTwitterLine className={`${iconClassName}`} />
            ) : item?.icon == "linkedin" ? (
              <RiLinkedinLine className={`${iconClassName}`} />
            ) : item?.icon == "youtube" ? (
              <RiYoutubeLine className={`${iconClassName}`} />
            ) : undefined}
            <span className="absolute left-3 opacity-0 group-hover:left-7 group-hover:opacity-100 transition-all text-primary">
              {item?.username}
            </span>
          </li>
        ))}
      </ul>
      <div className="relative pb-80 text-gray-500 border-r-gray-500 border-r bg-black">
        <div className="absolute -right-48 -top-2 rotate-90 cursor-pointer origin-top-left hover:-top-4 hover:text-primary transition-all">
          thomasforntoh@gmail.com
        </div>
      </div>
    </div>
  );
};
