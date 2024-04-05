"use client";

import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabButton";

const Tabdata:any = [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className="text-disc pl-2">
        <li>Logo designing</li>
        <li>Brand designing</li>
        <li>Brand identity</li>
        <li>Visual designing</li>
        <li>Movie posters</li>
        <li>Broucher, flyer designs</li>
        <li>Stationary design</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-disc pl-2" >
        <li>BS MASS COMMUNICATION</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="text-disc pl-2">
        <li>PNY trainings </li>
        <li>EVS institute </li>
      </ul>
    ),
  },
];

function AboutMe() {
  const [tab, settab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id: any) {
    startTransition(() => {
      settab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 xl:px-16 sm:py-16 py-8 px-4 items-center ">
        <Image
          src="/images/1.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="opacity-4"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-bold text-4xl mb-4 text-primary ">About Me</h2>
          <p className="text-base lg:text-lg">
            {" "}
            Passionate about transforming ideas into visual experiences, 
            I am Hira Azhar, a creative graphic designer with a rich background spanning five years. With a keen eye for aesthetics and a knack for effective communication through design, 
            I specialize in crafting compelling visuals that leave a lasting impact
          </p>

          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              education{" "}
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              {" "}
              certifications{" "}
            </TabButton>
          </div>
          <div className="mt-3">
            {Tabdata.find((t:any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
