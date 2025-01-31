"use client"
import Image from "next/image";
import HomeSlider from "@/components/HomeSlider/HomeSlider";


export default function Home() {
  return (
      <main className="{styles.main}">
        <HomeSlider />
      </main>
  );
}
