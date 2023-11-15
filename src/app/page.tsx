"use client";
import { useState } from "react";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import PixiTest from "@/components/PixiTest";
import ProfileCard from "@/components/ProfileCard";
export default function Home() {
  return (
    <>
      <Header page={"home"} />
      <ProfileCard />
      <Grid page={"home"} />
    </>
  );
}
