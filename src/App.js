import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import ProjectItem from "./components/ProjectItem";
import Button from "./components/Button";
import project1 from "./assets/css-1.png";
import project2 from "./assets/css-2.png";
import project3 from "./assets/css-3.png";
import project4 from "./assets/css-4.png";
import project5 from "./assets/css-5.png";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Achievement from "./components/portfolio/Achievement";
import Skills from "./components/portfolio/Skills";

const buttons = [
  { content: "CSS", className: "active-sm" },
  { content: "SASS", className: "btn-sm" },
  { content: "LESS", className: "btn-sm" },
  { content: "Bootstrap", className: "btn-sm" },
  { content: "Tailwind", className: "btn-sm" },
  { content: "React", className: "btn-sm" },
];

const projects = [
  {
    CSS: [
      {
        title: "My Gallery",
        description:
          "This is solution to a challenge given by devchallenges.io (legacy). In this project, I worked with HTML and Vanilla CSS to create a responsive page containing images and other content. The images were positioned using CSS Grid.",
        tags: ["#HTML", "#CSS", "#Responsive", "#CSSGrid", "#Flexbox"],
        image: project1,
        codeLink:
          "https://github.com/ShrutiShinde418/DevChallenges/tree/main/my-gallery",
        demoLink: "https://my-gallery-njh5l8s55-shrutishinde418.vercel.app/",
      },
      {
        title: "Recipe Page",
        description:
          "This is a solution to a devchallenges.io (legacy) challenge. I used HTML and Vanilla CSS to construct a responsive recipe page for this project. The content was positioned using Flexbox. If you have the ingredients or have completed a step, you can tick the box next to it.",
        tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox"],
        image: project2,
        codeLink:
          "https://github.com/ShrutiShinde418/DevChallenges1/tree/main/recipe-page",
        demoLink: "https://recipe-page-eosin-omega.vercel.app/",
      },
      {
        title: "404 Not Found page",
        description:
          "This is a solution to a devchallenges.io (legacy) challenge. I worked with HTML and Vanilla CSS to construct a 404 Not Found Page for this project. The elements were positioned using CSS Grid and Flexbox.",
        tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox", "#CSSGrid"],
        image: project3,
        imageClasses: "h-full object-cover",
        cardClasses: "gap-8",
        codeLink: "https://github.com/ShrutiShinde418/404-not-found",
        demoLink: "https://shrutishinde418.github.io/404-not-found/",
      },
      {
        title: "NFT Preview Card Component",
        description:
          "This is my response to a frontendmentor.io challenge. HTML and Vanilla CSS were used to construct an NFT Preview Card Component.",
        tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox", "#CSSGrid"],
        image: project4,
        imageClasses: "h-full object-cover",
        codeLink:
          "https://github.com/ShrutiShinde418/FrontendMentor/tree/main/nft-preview-card-component-main",
        demoLink:
          "https://frontend-mentor-7rj3nmeqz-shrutishinde418.vercel.app/",
        cardClasses: "gap-8",
      },
      {
        title: "Product Preview Card",
        description:
          "This is my response to a frontendmentor.io challenge. HTML and Vanilla CSS were used to construct a Product Preview Card for a perfume.",
        tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox", "#CSSGrid"],
        image: project5,
        codeLink:
          "https://github.com/ShrutiShinde418/FrontendMentor2/tree/main/product-preview-card",
        demoLink: "https://product-preview-card-iota-sage.vercel.app/",
        imageClasses: "h-full object-cover",
        cardClasses: "gap-8",
      },
    ],
  },
];
const App = () => {
  const [activeTab, setActiveTab] = useState("CSS");
  return (
    <div className="bg-background pt-12">
      <div className="xl:container xl:mx-auto pb-10 xl:px-0 min-h-screen grid xl:grid-cols-3 md:grid-cols-2 gap-8">
        <About />
        <Skills />
        <Achievement />
        <Experience />
        <div className="col-span-2 flex flex-col gap-8">
          <Card className="flex flex-col gap-4 items-start">
            <p className="text-gray1 font-normal text-xl">Projects (5)</p>
            <div className="flex gap-5">
              {buttons.map((button) => (
                <Button
                  type="button"
                  className={
                    activeTab === button.content ? "active-sm" : "btn-sm"
                  }
                  content={button.content}
                />
              ))}
            </div>
          </Card>
          {projects[0].CSS.map((item) => (
            <ProjectItem
              title={item.title}
              description={item.description}
              tags={item.tags}
              image={item.image}
              codeLink={item.codeLink}
              demoLink={item.demoLink}
              imageClasses={item.imageClasses}
              cardClasses={item.cardClasses}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
