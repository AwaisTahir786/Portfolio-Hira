"use client";

import React from "react";
import ProjectCards from "./projectCards";
import { useState } from "react";
import ProjectTag from "./projectTag";
import { useRef } from "react"; // direct target html tag
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Swift-brand-Identy-Logo",
    description:"",
    image: "/images/projects/1.png",
    tags: ["All", "Logo"],
    github: "https://www.behance.net/gallery/182285565/Swift-Brand-identity-Logo-Design",
    preview: "https://www.behance.net/gallery/182285565/Swift-Brand-identity-Logo-Design",
  },
  {
    id: 2,
    title: "Vector-Art-illustration",
    description:"",
    image: "/images/projects/2.png",
    tags: ["All", "Vector"],
    github: "https://www.behance.net/gallery/180851939/Vector-Art-illustration-design",
    preview: "https://www.behance.net/gallery/180851939/Vector-Art-illustration-design",
  },

  {
    id: 3,
    title: "RITRO-LOGO-DESIGN",
    description:"",
    image: "/images/projects/3.png",
    tags: ["All", "Logo"],
    github: "https://www.behance.net/gallery/180780377/RITRO-LOGO-DESIGN",
    preview: "https://www.behance.net/gallery/180780377/RITRO-LOGO-DESIGN",
  },
  {
    id: 4,
    title: "Tecnicas-Reunidas-logo-design",
    description: "",
    image: "/images/projects/4.png",
    tags: ["All", "Logo"],
    github: "https://github.com/AwaisTahir786",
    preview: "https://www.instagram.com/p/CyBfeyoN0vN/?img_index=1",
  },
  {
    id: 5,
    title: "Vector-Art-illustration",
    description:"",
    image: "/images/projects/5.png",

    tags: ["All", "Vector"],
    github: "https://github.com/AwaisTahir786",
    preview: "https://www.behance.net/gallery/180850927/Vector-Art-Illustration-Design?tracking_source=project_owner_other_projects",
  },
  {
    id: 6,
    title: "Greaveso-Logo-Design",
    description:"",
    image: "/images/projects/6.png",

    tags: ["All", "Logo"],
    github: "https://github.com/AwaisTahir786",
    preview: "https://www.behance.net/gallery/180835289/Greaveso-Logo-Design",
  },
];

function ProjetsSection() {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  function handleTag(value: string) {
    setTag(value);
  }

  const filteredProjects = projectsData.filter((filtered) =>
    filtered.tags?.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-[#39FF14] text-center font-bold text-5xl mt-4 mb-8 md:mb-16 ">
        Projects
      </h2>

      <div className="flex flex-row justify-center text-white ">
        <ProjectTag name="All" isSelected={tag === "All"} onClick={handleTag} />
        <ProjectTag name="Logo" isSelected={tag === "Logo"} onClick={handleTag} />
        <ProjectTag
          name="Vector"
          isSelected={tag === "Vector"}
          onClick={handleTag}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 mt-10 gap-4 sm:grid-cols-2 grid-cols-1 lg:px-20   "
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.github}
              previewUrl={project.preview}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjetsSection;
