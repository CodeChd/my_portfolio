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
    name: "REAL DROPS WATER STATION",
    technologies: "MERN REACT-ROUTER REDUX REACT BOOTSTRAP",
    live: "https://real-drops.onrender.com/",
    code: "https://github.com/CodeChd/real-drops",
  },
  {
    id: 2,
    image: "/images/psyGames.png",
    name: "PSY GAMES",
    technologies: "REACT TYPESCRIPT API CHAKRA AXIOS",
    live: "https://psy-games-cj.netlify.app/",
    code: "https://github.com/CodeChd/psy-games",
  },
  {
    id: 3,
    image: "/images/pokedex.png",
    name: "POKEDEX",
    technologies: "MERN REACT-ROUTER REDUX",
    live: "https://github.com/CodeChd/pokedex",
    code: "https://github.com/CodeChd/pokedex",
  },
  {
    id: 4,
    image: "/images/jcytf.webp",
    name: "JCYTF CHURCH WEBSITE",
    technologies: "NEXTJS TAILWIND CLOUDINARY PHP MYSQL",
    live: "https://jcytfchurch.vercel.app/about",
    code: "https://github.com/CodeChd/jcytf-v2",
  },
  {
    id: 5,
    image: "/images/devfinder.png",
    name: "DEV FINDER",
    technologies: "REACT CONTEXT-API GITHUB-API",
    live: "https://dev-findr-cjfrancisco.netlify.app/",
    code: "https://github.com/CodeChd/dev-finder",
  },
  {
    id: 6,
    image: "/images/whatilearn.png",
    name: "FEEDBACK APP",
    technologies: "REACT SUPABASE",
    live: "https://whatilearned-cj.netlify.app/",
    code: "https://github.com/CodeChd/what-i-learn",
  },
];
