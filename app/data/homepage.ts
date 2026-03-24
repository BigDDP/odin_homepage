export interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  twitter: string;
  linkedin: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A cool project that does something awesome.",
    github: "https://github.com/you/project-one",
    twitter: "https://twitter.com/you",
    linkedin: "https://linkedin.com/in/you",
    liveUrl: "https://project-one.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another great project with interesting features.",
    github: "https://github.com/you/project-two",
    twitter: "https://twitter.com/you",
    linkedin: "https://linkedin.com/in/you",
    liveUrl: "https://project-two.com",
  },
];