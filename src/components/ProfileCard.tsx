import React from "react";
import { motion } from "framer-motion";
const THEMA = "#0008ff";

const ProfileCard = () => {
  return (
    <motion.div
      className="w-[540px] h-[360px] flex p-8 bg-white shadow-lg "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-2/5">picture</div>
      <div className="w-3/5 ">
        <h3 className=" text-xl border-b border-theme">NAME</h3>
        <p>mail</p>
        <p>comment</p>
        <div>link</div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
