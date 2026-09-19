import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 focus:outline-none w-full relative"
    >
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About & Narrative Section */}
      <About />

      {/* 3. Featured Projects & Technical Proof */}
      <Projects />

      {/* 4. Education & Credentials Section */}
      <Credentials />

      {/* 5. Contact Section & Conversion Flow */}
      <Contact />
    </main>
  );
}
