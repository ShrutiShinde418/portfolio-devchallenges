import React, { Fragment } from "react";
import ProjectItem from "../ProjectItem";
import css1 from "../../assets/css-1.png";
import css2 from "../../assets/css-2.png";
import css3 from "../../assets/css-3.png";
import css4 from "../../assets/css-4.png";
import css5 from "../../assets/css-5.png";
import sass1 from "../../assets/sass-1.png";
import bootstrap1 from "../../assets/bootstrap-1.png";
import bootstrap2 from "../../assets/bootstrap-2.png";
import bootstrap3 from "../../assets/bootstrap-3.png";
import tailwind1 from "../../assets/tailwind-1.png";
import react1 from "../../assets/react-1.png";
import less1 from "../../assets/less-1.png";

const projects = {
  CSS: [
    {
      title: "My Gallery",
      description:
        "This is solution to a challenge given by devchallenges.io (legacy). In this project, I worked with HTML and Vanilla CSS to create a responsive page containing images and other content. The images were positioned using CSS Grid.",
      tags: ["#HTML", "#CSS", "#Responsive", "#CSSGrid", "#Flexbox"],
      image: css1,
      codeLink:
        "https://github.com/ShrutiShinde418/DevChallenges/tree/main/my-gallery",
      demoLink: "https://my-gallery-njh5l8s55-shrutishinde418.vercel.app/",
    },
    {
      title: "Recipe Page",
      description:
        "This is a solution to a devchallenges.io (legacy) challenge. I used HTML and Vanilla CSS to construct a responsive recipe page for this project. The content was positioned using Flexbox. If you have the ingredients or have completed a step, you can tick the box next to it.",
      tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox"],
      image: css2,
      codeLink:
        "https://github.com/ShrutiShinde418/DevChallenges1/tree/main/recipe-page",
      demoLink: "https://recipe-page-eosin-omega.vercel.app/",
    },
    {
      title: "404 Not Found page",
      description:
        "This is a solution to a devchallenges.io (legacy) challenge. I worked with HTML and Vanilla CSS to construct a 404 Not Found Page for this project. The elements were positioned using CSS Grid and Flexbox.",
      tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox", "#CSSGrid"],
      image: css3,
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
      image: css4,
      imageClasses: "h-full object-cover",
      codeLink:
        "https://github.com/ShrutiShinde418/FrontendMentor/tree/main/nft-preview-card-component-main",
      demoLink: "https://frontend-mentor-7rj3nmeqz-shrutishinde418.vercel.app/",
      cardClasses: "gap-8",
    },
    {
      title: "Product Preview Card",
      description:
        "This is my response to a frontendmentor.io challenge. HTML and Vanilla CSS were used to construct a Product Preview Card for a perfume.",
      tags: ["#HTML", "#CSS", "#Responsive", "#Flexbox", "#CSSGrid"],
      image: css5,
      codeLink:
        "https://github.com/ShrutiShinde418/FrontendMentor2/tree/main/product-preview-card",
      demoLink: "https://product-preview-card-iota-sage.vercel.app/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
  SASS: [
    {
      title: "Newsletter Popup",
      description:
        "This is my response to a frontendmentor.io challenge. Using SASS, a newsletter popup page was created. The required attribute of the input element was used for form validation.",
      tags: ["#HTML", "#SASS", "#Responsive", "#CSSGrid", "#Flexbox"],
      image: sass1,
      codeLink: "https://github.com/ShrutiShinde418/newsletter-popup",
      demoLink: "https://shrutishinde418.github.io/newsletter-popup",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
  LESS: [
    {
      title: "Business Blog Card Solution",
      description:
        "The LESS preprocessor was used to create a business blog card in this solution. Devchallenges.io issued the challenge.",
      tags: ["#HTML", "#LESS", "#Flexbox", "CSSGrid"],
      image: less1,
      codeLink:
        "https://github.com/ShrutiShinde418/DevChallenges2/tree/main/business-blog-card",
      demoLink: "https://business-blog-card-sigma.vercel.app/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
  Bootstrap: [
    {
      title: "Spense Landing Page",
      description:
        "This is a solution to a codewell.cc challenge. A landing page was created using Bootstrap 5.1. I learnt how to use the order property (used Bootstrap classes) to assign a specific order to certain elements.",
      tags: ["#HTML", "#Bootstrap", "#Responsive", "#Flexbox"],
      image: bootstrap1,
      codeLink: "https://github.com/ShrutiShinde418/spense-landing-page",
      demoLink: "https://shrutishinde418.github.io/spense-landing-page/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
    {
      title: "IndieBrew Landing Page",
      description:
        "This is a codewell.cc challenge solution. Bootstrap 5.1 was used to develop a landing page and a sign up page. Validation was carried out using the built-in browser validation.",
      tags: ["#HTML", "#Bootstrap", "#Responsive", "#Flexbox"],
      image: bootstrap2,
      codeLink: "https://github.com/ShrutiShinde418/IndieBrew/",
      demoLink: "https://shrutishinde418.github.io/IndieBrew/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
    {
      title: "Hosterr Landing Page",
      description:
        "This is a solution to a codewell.cc challenge. Bootstrap 5.1 was used to create a landing page for Hosterr, a website hosting service. The challenge I encountered was in placing the photograph and its background.",
      tags: ["#HTML", "#Bootstrap", "#Responsive", "#Flexbox"],
      image: bootstrap3,
      codeLink: "https://github.com/ShrutiShinde418/hosterr",
      demoLink: "https://shrutishinde418.github.io/hosterr/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
  Tailwind: [
    {
      title: "Advice Generator App",
      description:
        "This is a response to a frontendmentor.io challenge. An advice generator app was created using Tailwind CSS, HTML, Javascript and an API.",
      tags: ["#HTML", "#Tailwind", "#Responsive", "#Flexbox", "#API"],
      image: tailwind1,
      codeLink: "https://github.com/ShrutiShinde418/advice-generator-app",
      demoLink: "https://advice-generator-app-weld.vercel.app/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
  React: [
    {
      title: "Input Component",
      description:
        "A reusable input component was constructed using react in this solution, and several types of input form fields were implemented by giving the necessary class names. Devchallenges.io (legacy) issued this challenge.",
      tags: ["#JSX", "#SASS", "#Flexbox", "CSSGrid"],
      image: react1,
      codeLink: "https://github.com/ShrutiShinde418/input-component",
      demoLink: "https://input-component-snowy.vercel.app/",
      imageClasses: "h-full object-cover",
      cardClasses: "gap-8",
    },
  ],
};
const CSSTabContent = ({ activeTab }) => {
  return (
    <Fragment>
      {projects[activeTab].map((item) => (
        <ProjectItem
          title={item.title}
          description={item.description}
          tags={item.tags}
          image={item.image}
          codeLink={item.codeLink}
          demoLink={item.demoLink}
          imageClasses={item.imageClasses}
          cardClasses={item.cardClasses}
          key={item.title}
        />
      ))}
    </Fragment>
  );
};

export default CSSTabContent;
