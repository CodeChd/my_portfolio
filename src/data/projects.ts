export interface ProjectTypes {
  id: number;
  image: string;
  name: string; 
  technologies: string;
}

export const projects: ProjectTypes[] = [
  {
    id: 1,
    image: "/images/realdrops.png",
    name: "REAL DROPS WATER STATION",
    technologies: "MERN REACT-ROUTER REDUX REACT BOOTSTRAP",
  },
  {
    id: 2,
    image: "/images/psyGames.png",
    name: "PSY GAMES",
    technologies: "REACT TYPESCRIPT API CHAKRA AXIOS",
  },
  {
    id: 3,
    image: "/images/pokedex.png",
    name: "POKEDEX",
    technologies: "MERN REACT-ROUTER REDUX",
  },
  {
    id: 4,
    image: "/images/jcytf.webp",
    name: "JCYTF CHURCH WEBSITE",
    technologies: "NEXTJS TAILWIND CLOUDINARY PHP MYSQL",
  },
  {
    id: 5,
    image: "/images/devfinder.png",
    name: "DEV FINDER",
    technologies: "REACT CONTEXT-API GITHUB-API",
  },
  {
    id: 6,
    image: "/images/whatilearn.png",
    name: "FEEDBACK APP",
    technologies: "REACT SUPABASE",
  },
];
