export interface ProjectTypes {
  id: number;
  image: string;
  name: string; 
  technologies: string;
}

export const projects: ProjectTypes[] = [
  {
    id: 1,
    image: "../src/assets/images/thumbnail-project-1-large.webp",
    name: "DESIGN PORTFOLIO",
    technologies: "HTML CSS",
  },
  {
    id: 2,
    image: "../src/assets/images/thumbnail-project-2-large.webp",
    name: "E-LEARNING LANDING PAGE",
    technologies: "HTML CSS",
  },
  {
    id: 3,
    image: "../src/assets/images/thumbnail-project-3-large.webp",
    name: "TODO WEB APP",
    technologies: "HTML CSS JS",
  },
  {
    id: 4,
    image: "../src/assets/images/thumbnail-project-4-large.webp",
    name: "ENTERTAINMENT WEB APP",
    technologies: "HTML CSS JS",
  },
  {
    id: 5,
    image: "../src/assets/images/thumbnail-project-5-large.webp",
    name: "MEMORY GAME",
    technologies: "HTML CSS JS",
  },
  {
    id: 6,
    image: "../src/assets/images/thumbnail-project-6-large.webp",
    name: "ART GALLERY SHOWCASE",
    technologies: "HTML CSS JS",
  },
];
