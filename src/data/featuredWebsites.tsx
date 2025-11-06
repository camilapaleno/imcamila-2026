// Featured websites for the homepage
import marsyPreview from "@/image/preview-marsy1.png";
import beechjetPreview from "@/image/preview-beechjet3.png";
import junkPreview from "@/image/preview-junk.png";

export const featuredWebsites = [
  {
    name: "Mariana (MarsBars) - Artist in Los Angeles",
    title: "Mariana",
    short: "Zine portfolio",
    long: "A portfolio made for artist Mariana with Next.js.",
    tools: "Next.js, Typescript",
    preview: marsyPreview,
    embed: 'https://camilapaleno.github.io/marsy.psd/',
  },
  {
    name: "Junk Journal",
    title: "Junk Journal",
    short: "Little scraps from all over the world.",
    long: "Little scraps from all over the world.",
    tools: "React",
    preview: junkPreview,
    embed: 'https://camilapaleno.github.io/beechjet4000/',
  },
  {
    name: "Beechjet - Band in Los Angeles",
    title: "Beechjet",
    short: "Website for Los Angeles indie rock band",
    long: "Website for Los Angeles indie rock band",
    tools: "React",
    preview: beechjetPreview,
    embed: 'https://camilapaleno.github.io/beechjet4000/',
  },
];

export default featuredWebsites;
