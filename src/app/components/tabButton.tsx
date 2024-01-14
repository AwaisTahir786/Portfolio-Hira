"use client";

import React from "react";
import { motion } from "framer-motion";

const variants: any = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

function TabButton({ active, children, selectTab }: any) {
  const buttonClasses = active ? "text-white " : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>

      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="bg-primary mt-2 mr-3 h-1 "
      ></motion.div>
    </button>
  );
}

export default TabButton;
