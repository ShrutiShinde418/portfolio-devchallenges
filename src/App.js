import "./App.css";
import React from "react";
import Card from "./components/Card";
import ExperienceItem from "./components/ExperienceItem";
import photo from "./assets/photo 1.jpeg";
// import classNames from "classnames";
import { IoMail } from "react-icons/io5";
import { HiMiniPhone } from "react-icons/hi2";

const App = () => {
  return (
    <div className="bg-background pt-12">
      <div className="xl:container xl:mx-auto min-h-screen grid grid-cols-3 gap-8">
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
              <a href="tel:9820213471">9820213471</a>
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
          <div className="flex gap-4 flex-wrap">
            <p className="badge">HTML</p>
            <p className="badge">CSS</p>
            <p className="badge">JavaScript</p>
            <p className="badge">Bootstrap</p>
            <p className="badge">SASS</p>
            <p className="badge">LESS</p>
            <p className="badge">Material UI</p>
            <p className="badge">Tailwind</p>
            <p className="badge">React</p>
            <p className="badge">Redux</p>
          </div>
        </Card>
        <Card>
          <p className="uppercase text-gray1 font-semibold text-lg">
            Achievements
          </p>
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
      </div>
    </div>
  );
};

export default App;
