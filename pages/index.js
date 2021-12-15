import React, { useEffect, useState } from "react";

import Header from "@/components/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Home from "@/components/sections/home";
import Work from "@/components/sections/work";
import ReactFullpage from "@fullpage/react-fullpage";
import { SocailLinks } from "@/components/socailLinks";

export default function Index() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <ReactFullpage
      navigation
      anchors={["home", "about", "experience", "work", "contact"]}
      responsiveWidth={1024}
      responsiveSlides={true}
      fixedElements="#header, #social-links"
      paddingTop="64px"
      render={({ _, fullpageApi }) => {
        return (
          <div className={`fullpage-wrapper bg-background`}>
            <Header />
            <Home />
            <About data={resumeData.main} />
            <Experience />
            <Work />
            <Contact data={resumeData.main} />
            <SocailLinks />
          </div>
        );
      }}
    />
  );
}
