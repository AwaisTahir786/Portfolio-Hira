"use client";
import React from "react";
import Image from "next/image";
import Animation from "./animation";
import ProjetsSection from "./projetsSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { url } from "inspector";

function Header() {

  const cvLink="http://localhost:3000/images/AT_frontend2.pdf";

  function fileDownload(url:any){
    fetch(url).then((response)=> response.blob()).then((blog)=>{

      const filename = url.split("/").pop();
      const aTag=document.createElement("a");
      aTag.href=url;
      aTag.setAttribute("download" , filename);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      
    })
   
  }
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-4xl mb-4 sm:text-5xl lg:text-7xl px-12 py-4 font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-700">
              Hello, I am{" "}
            </span>
            <br />
            <Animation />
          </h1>
          <p className="lg:text-xl text-lg text-[#ADB7BE] px-12 py-4 mb-6">
          Make it work, make it right, make it fast !
          </p>

          <div className="px-12">
            <Link href={"#contact"}>
              <button className="rounded-full w-full sm:w-fit bg-gradient-to-r from-third-500 via-primary-500 to-secondary-500 px-6 py-3 hover:bg-slate-00 text-white mr-4">
                Hire Me
              </button>
            </Link>
            <Link href={"/"}>
              <button className="rounded-full w-full sm:w-fit bg-gradient-to-r from-third-500 via-primary-500 to-secondary-500 px-1 py-1 hover:bg-slate-800 text-white  mt-3 ">
                <span className=" block rounded-full bg-[#121212] hover:bg-slate-800 px-5 py-2"
                onClick={()=> fileDownload(cvLink)}
                >
                  Download CV{" "}
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 px-12 place-self-center mt-4"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400] lg:h-[400]">
            <Image
              src="/images/profile-pic0.png"
              alt="Picture of the author"
              className="absolute translate transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
