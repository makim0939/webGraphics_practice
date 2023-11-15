import React from "react";
import { motion } from "framer-motion";
import { myAnimationProps } from "@/animationProps";
const THEMA = "#0008ff";

const ProfileCard = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/3 left-1/2 w-[54.6vw] h-[33vw] min-w-[331.6px] min-h-[198px] transform -translate-x-1/2 -translate-y-1/3">
        <motion.div
          className=" w-full h-full  flex p-8 bg-white shadow-lg "
          initial={{ opacity: 0, y: 160 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: myAnimationProps.ease }}
        >
          <div className="w-2/5">picture</div>
          <div className="w-3/5 ">
            <h3 className=" text-xl border-b border-theme">NAME</h3>
            <p>mail</p>
            <p>comment</p>
            <div>link</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
