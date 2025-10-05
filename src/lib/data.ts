export interface Path {
  id: string;
  name: string;
  description: string;
}

export const pathData: Path[] = [
  {
    id: "1",
    name: "NodeJS and Express",
    description:
      "Node.js is a JavaScript runtime that allows you to run JavaScript on the server, enabling fast and scalable backend development. Express.js is a minimal and flexible framework built on Node.js that simplifies building APIs, handling requests, and managing middleware. Together, they make it easy to create efficient, server-side applications using JavaScript.",
  },
  {
    id: "2",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "3",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "4",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "5",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "6",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "7",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "8",
    name: "Python development",
    description: "this is a good python course.",
  },
];

interface Resource {
  id: string;
  title: string;
  type: "youtube" | "article" | "course";
  requirement: "important" | "optional";
  thumbnail: string;
  url: string;
}

interface Steps {
  id: string;
  title: string;
  resources: Resource[];
}

export const stepsData: Steps[] = [
  {
    id: "11",
    title: "Introduction to Node.js and Express",
    resources: [
      {
        id: "1",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "2",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "3",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "4",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
    ],
  },
  {
    id: "22",
    title: "Introduction to Node.js and Express",
    resources: [
      {
        id: "1a",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "2a",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "3a",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
      {
        id: "4a",
        title: "Node.js Crash Course",
        type: "youtube",
        requirement: "important",
        thumbnail: "https://img.youtube.com/vi/yEHCfRWz-EI/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
    ],
  },
];
