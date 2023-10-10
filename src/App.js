import "./App.css";
import React from "react";
import Card from "./components/Card";
import ExperienceItem from "./components/ExperienceItem";
import Button from "./components/Button";
import photo from "./assets/photo 1.jpeg";
import project1 from "./assets/screenshot.png";
// import classNames from "classnames";
import { IoMail } from "react-icons/io5";
import { HiMiniPhone } from "react-icons/hi2";

const badges = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "SASS",
  "LESS",
  "Javascript",
  "React",
  "Material UI",
  "Redux",
];

const buttons = [
  { content: "CSS", className: "active-sm" },
  { content: "SASS", className: "btn-sm" },
  { content: "LESS", className: "btn-sm" },
  { content: "Bootstrap", className: "btn-sm" },
  { content: "Tailwind", className: "btn-sm" },
  { content: "React", className: "btn-sm" },
];

const App = () => {
  return (
    <div className="bg-background pt-12">
      <div className="xl:container xl:mx-auto px-5 xl:px-0 min-h-screen grid xl:grid-cols-3 md:grid-cols-2 xl:grid-rows-6 gap-8">
        <Card className="flex flex-col">
          <img
            src={photo}
            alt="Shruti Shinde"
            className="max-w-full h-96 mb-4 rounded-xl"
          />
          <h1 className="text-gray1 font-semibold text-2xl">Shruti Shinde</h1>
          <h2 className="text-gray2 font-normal">Front-end Web Developer</h2>
          <ul className="mt-5 flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <IoMail className="text-gray1" size={"1.5em"} />
              <a href="mailto:shrutishinde736@gmail.com">
                shrutishinde736@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <HiMiniPhone className="text-gray1" size={"1.5em"} />
              <a href="tel:+919820213471">(+91) 9820213471</a>
            </li>
          </ul>
          <p className="text-gray2 mt-8">
            Passionate Frontend Web Developer willing to learn and create
            outstanding applications. Currently learning the MERN Stack.
          </p>
        </Card>
        <Card className="flex flex-col gap-5">
          <p className="uppercase text-gray1 font-semibold text-lg">
            Front end
          </p>
          <ul className="flex gap-4 flex-wrap">
            {badges.map((badge) => (
              <li className="badge">{badge}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <p className="uppercase text-gray1 font-semibold text-lg">
            Achievements
          </p>
          <ExperienceItem
            duration="March 2022 - March 2023"
            title="Leveraging Potential of Deep Learning for Fruit Quality Detection: A Review"
            subtitle="Review Paper published in the GRENZE International Journal of Engineering and Technology"
          />
        </Card>
        <Card className="flex flex-col gap-5">
          <p className="text-gray1 font-normal text-2xl">Experiences</p>
          <ExperienceItem
            duration="June 2020 - August 2020"
            title="Front-end Developer - Arviti Infotech"
            subtitle="Developed the company's tracker system using HTML, CSS and Bootstrap."
          />
          <ExperienceItem
            duration="December 2021 - January 2022"
            title="Intern - Verzeo"
            subtitle="Made an application using MongoDB, Node.js and EJS."
          />
          <ExperienceItem
            duration="July 2022 - October 2022"
            title="MERN Stack Developer - Skillcoup"
            subtitle="Made forms for the Skillcoup Website using MERN Stack and MDBootstrap. Scrum and Agile Methodology was used with Jira Software."
          />
        </Card>
        <div className="col-span-2 flex flex-col gap-8">
          <Card className="flex flex-col gap-4 items-start">
            <p className="text-gray1 font-normal text-xl">Projects (4)</p>
            <div className="flex gap-5">
              {buttons.map((button) => (
                <Button
                  type="button"
                  className={button.className}
                  content={button.content}
                />
              ))}
            </div>
          </Card>
          <Card className="grid grid-cols-2">
            <img src={project1} alt="Gallery Page" />
            <div className="flex flex-col">
              <ul className="flex gap-4">
                <li>#HTML</li>
                <li>#CSS</li>
                <li>#Responsive</li>
              </ul>
              <p>My Gallery</p>
              <p>
                In this project, I worked with HTML and Vanilla CSS to create a
                responsive page containing images and other content. The images
                were positioned using CSS Grid.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
