import React, { useState } from "react";
import { motion } from "framer-motion";
import { myAnimationProps } from "@/animationProps";
import Link from "next/link";
const Header = ({ page }: { page: "home" | "about" | "contact" }) => {
  return (
    <nav className="fixed w-full">
      <ul className="p-3 text-2xl  md:text-3xl 2xl:text-4xl   font-extralight flex justify-around z-10">
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: myAnimationProps.ease,
            }}
            className="w-full text-center"
          >
            <Link href={"/"}>Home</Link>
          </motion.h3>

          {page === "home" && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: myAnimationProps.ease }}
            ></motion.div>
          )}
        </li>
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: myAnimationProps.ease,
            }}
            className="text-center"
          >
            <Link href={"/about"}> About</Link>
          </motion.h3>
          {page === "about" && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: myAnimationProps.ease }}
            ></motion.div>
          )}
        </li>
        <li className="w-24 md:w-32 xl:w-40">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: myAnimationProps.ease,
            }}
            className="text-center"
          >
            <Link href={"/contact"}>Contact </Link>
          </motion.h3>

          {page === "contact" && (
            <motion.div
              layoutId="underline"
              className="h-[0.12rem] bg-theme"
              transition={{ duration: 0.2, ease: myAnimationProps.ease }}
            ></motion.div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
