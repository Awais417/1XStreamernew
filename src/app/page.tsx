import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import Perks2 from "@/components/Home/perks2";
import Perks3 from "@/components/Home/perks3";
import Support from "@/components/Home/support";

import { Metadata } from "next";
import Platform1 from "@/components/Home/platform1";
import Platform3 from "@/components/Home/platform3";
import Platform2 from "@/components/Home/platform2";
import Clip from "@/components/Home/clips";
import Contactus from "@/components/Home/contactus";

export const metadata: Metadata = {
  title: "1XStreamers",
};

export default function Home() {
  return (
    
    <main>
      <Hero />
      <Work />
      {/* <TimeLine /> */}
      <Platform />
      {/* <Portfolio /> */}
      {/* <Upgrade /> */}
      <Perks />
      <Platform2 />   
      <Perks2 />
      <Platform1 />
      <Perks3 />
      <Platform3 />
      <Support />

      <Clip />
      <Contactus/>
    </main>
  );
}











