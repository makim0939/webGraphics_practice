"use client";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

const About = () => {
  return (
    <>
      <Header page={"about"} />
      <ProfileCard />
      <Grid page={"about"} />
    </>
  );
};

export default About;
