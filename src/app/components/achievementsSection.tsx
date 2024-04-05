"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers: any = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "",
    metric: "Users",
    value: "100,00",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",

  },
];

function AchievementsSection() {
  return (
    <div className="py-8 px-8 xl:gap-16 xl-px-16 sm:py-16">
      <div className="border border-primary py-8 px-16 rounded-md flex sm:flex-row justify-between flex-col ">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="text-white flex flex-col gap-y-2 items-center  justify-center lg:mx-28 md:mx-10 mx-auto"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row ">
                {achievement.prefix}

                {
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    local="en-Us"
                    className="text-white text-4xl font-bold"
                    configs={(_: any, index: any) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                }
                {achievement.postfix}
              </h2>

              <p className="text-[#ADB7BE] text-xl">{achievement.metric}</p>
            </div>
          )
        })};
      </div>
    </div>
  );
}
export default AchievementsSection;
