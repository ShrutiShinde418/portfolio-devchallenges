import React from "react";
import Card from "../Card";
import photo from "../../assets/photo 1.jpeg";
import { IoMail } from "react-icons/io5";
import { HiMiniPhone } from "react-icons/hi2";

const About = () => {
  return (
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
  );
};

export default About;
