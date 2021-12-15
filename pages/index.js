import Header from "@/components/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Home from "@/components/sections/home";
import Work from "@/components/sections/work";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Index() {
  return (
    <ReactFullpage
      navigation
      anchors={["home", "about", "experience", "work", "contact"]}
      responsiveWidth={1024}
      responsiveSlides={true}
      fixedElements="#header, #social-links"
      render={({ _, fullpageApi }) => {
        return (
          <div className={`fullpage-wrapper bg-black`}>
            <Header />
            <Home />
            <About />
            <Experience />
            <Work />
            <Contact />
          </div>
        );
      }}
    />
  );
}
