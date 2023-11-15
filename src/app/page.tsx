"use client";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import PixiTest from "@/components/PixiTest";
import ProfileCard from "@/components/ProfileCard";
export default function Home() {
  return (
    <>
      <Header />
      {/* <PixiTest /> */}
      <ProfileCard />
      <Grid />
    </>
  );
}
