export type Banner = {
  imageURL: string;
  name: string;
  description: string;
  linkedIn: string;
  github: string;
  twitter: string;
};

export type Card = {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  github: string;
  liveUrl: string;
};

export const banner: Banner = {
  imageURL: "https://placehold.co/400x400/7c3aed/ffffff?text=BF",
  name: "Ashley Williams",
  description: "Full-stack developer passionate about building clean, performant web applications.",
  linkedIn: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
};

export const cards: Card[] = [
  {
    id: 1,
    imageURL: "https://placehold.co/600x400/0ea5e9/ffffff?text=Project+1",
    title: "Portfolio Site",
    description: "A personal portfolio built with TanStack Start, React and Tailwind CSS.",
    github: "https://github.com/benfreijah/portfolio",
    liveUrl: "https://benfreijah.dev",
  },
  {
    id: 2,
    imageURL: "https://placehold.co/600x400/10b981/ffffff?text=Project+2",
    title: "Task Manager",
    description: "A full-stack task management app with drag and drop and real-time updates.",
    github: "https://github.com/benfreijah/task-manager",
    liveUrl: "https://tasks.benfreijah.dev",
  },
  {
    id: 3,
    imageURL: "https://placehold.co/600x400/f59e0b/ffffff?text=Project+3",
    title: "Weather Dashboard",
    description: "A weather dashboard that pulls live forecast data and displays interactive charts.",
    github: "https://github.com/benfreijah/weather-dashboard",
    liveUrl: "https://weather.benfreijah.dev",
  },
  {
    id: 4,
    imageURL: "https://placehold.co/600x400/ef4444/ffffff?text=Project+4",
    title: "E-Commerce Store",
    description: "A mock e-commerce storefront with cart, checkout, and product filtering.",
    github: "https://github.com/benfreijah/ecommerce",
    liveUrl: "https://shop.benfreijah.dev",
  },
  {
    id: 5,
    imageURL: "https://placehold.co/600x400/8b5cf6/ffffff?text=Project+5",
    title: "Chat App",
    description: "A real-time chat application built with WebSockets and a Node.js backend.",
    github: "https://github.com/benfreijah/chat-app",
    liveUrl: "https://chat.benfreijah.dev",
  },
  {
    id: 6,
    imageURL: "https://placehold.co/600x400/ec4899/ffffff?text=Project+6",
    title: "Blog Platform",
    description: "A markdown-based blog platform with syntax highlighting and dark mode.",
    github: "https://github.com/benfreijah/blog",
    liveUrl: "https://blog.benfreijah.dev",
  },
];