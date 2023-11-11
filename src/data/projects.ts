export interface ProjectTypes {
  id: number;
  image: string;
  name: string;
  technologies: string;
  live: string;
  code: string;
}

export const projects: ProjectTypes[] = [
  {
    id: 1,
    image: "/images/realdrops.png",
    name: "REAL DROPS ECOMMERCE ",
    technologies: "MongoDb Express React Node etc...",
    live: "https://real-drops.onrender.com/",
    code: "https://github.com/CodeChd/real-drops",
  },
  {
    id: 2,
    image: "/images/devlinks.png",
    name: "DEVLINKS",
    technologies: "MongoDb Express React Node etc...",
    live: "https://devlinks-j8qp.onrender.com/",
    code: "https://github.com/CodeChd/link-share-app",
  },
  {
    id: 3,
    image: "/images/pokedex.png",
    name: "POKEDEX",
    technologies: "MongoDb Express React Node etc...",
    live: "https://github.com/CodeChd/pokedex",
    code: "https://github.com/CodeChd/pokedex",
  },
  {
    id: 4,
    image: "/images/psyGames.png",
    name: "PSY GAMES",
    technologies: "React Typescript ChakraUi Axios",
    live: "https://psy-games-cj.netlify.app/",
    code: "https://github.com/CodeChd/psy-games",
  },
  {
    id: 5,
    image: "/images/jcytf.webp",
    name: "JCYTF CHURCH WEBSITE",
    technologies: "Nextjs Tailwind Cloudinary Php etc...",
    live: "https://jcytfchurch.vercel.app/about",
    code: "https://github.com/CodeChd/jcytf-v2",
  },
  {
    id: 6,
    image: "/images/whatilearn.png",
    name: "INSIGHT APP",
    technologies: "React Supabase",
    live: "https://whatilearned-cj.netlify.app/",
    code: "https://github.com/CodeChd/what-i-learn",
  },
];


