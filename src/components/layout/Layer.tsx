import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import History from "@/components/sections/History";
import Motto from "@/components/sections/Motto";
import TechPanel from "@/components/sections/TechPanel";
import WhatIDo from "@/components/sections/WhatIDo";
import WorkList from "@/components/sections/WorkList";
import type { Layer } from "@/lib/constants";

/**
 * One complete reading of the page. Rendered twice — dark and red — so the
 * flip can wipe between two fully-built DOM trees rather than recolouring
 * a single one.
 *
 * Anchors live on the dark layer only: duplicate ids would make hash links
 * resolve to whichever copy the browser happened to parse first.
 */
export default function Layer({ variant }: { variant: Layer }) {
  const dark = variant === "dark";

  return (
    <div>
      <div id={dark ? "about" : undefined}>
        <Hero variant={variant} />
        <About variant={variant} />
        <WhatIDo />
      </div>

      <div id={dark ? "projects" : undefined}>
        <div id={dark ? "experience" : undefined}>
          <Experience variant={variant} />
        </div>
        <History />
        <WorkList />
        <TechPanel />
        <Motto variant={variant} />
      </div>

      <div id={dark ? "contact" : undefined}>
        <Contact />
      </div>
    </div>
  );
}
