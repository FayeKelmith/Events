interface CourseData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}
const categories = ["past", "ongoing", "upcoming"];

export const courses: CourseData[] = [
  {
    id: "1",
    title: "Introduction to React",
    description: "Learn the basics of React",
    image: "/media/photos/arnold.jpg",
    category: categories[2],
  },
  {
    id: "2",
    title: "Introduction to Vue",
    description: "Learn the basics of Vue",
    image: "/media/photos/bryant.jpg",
    category: categories[2],
  },
  {
    id: "3",
    title: "Introduction to Angular",
    description: "Learn the basics of Angular",
    image: "/media/photos/helen_keller.jpg",
    category: categories[1],
  },
  {
    id: "4",
    title: "Introduction to Svelte",
    description: "Learn the basics of Svelte",
    image: "/media/photos/jamie_dimon.jpg",
    category: categories[0],
  },
  {
    id: "5",
    title: "Introduction to Next.js",
    description: "Learn the basics of Next.js",
    image: "/media/photos/jocko.jpg",
    category: categories[1],
  },
  {
    id: "6",
    title: "Introduction to Nuxt.js",
    description: "Learn the basics of Nuxt.js",
    image: "/media/photos/jordan.jpg",
    category: categories[0],
  },
  {
    id: "7",
    title: "Introduction to Gatsby",
    description: "Learn the basics of Gatsby",
    image: "/media/photos/lee_kuan_yew.png",
    category: categories[1],
  },
  {
    id: "8",
    title: "Introduction to Gridsome",
    description: "Learn the basics of Gridsome",
    image: "/media/photos/mazari.jpg",
    category: categories[0],
  },
  {
    id: "9",
    title: "Introduction to Sapper",
    description: "Learn the basics of Sapper",
    image: "/media/photos/ngannou.jpg",
    category: categories[2],
  },
  {
    id: "10",
    title: "Introduction to Astro",
    description: "Learn the basics of Astro",
    image: "/media/photos/patrick.jpg",
    category: categories[0],
  },
  {
    id: "11",
    title: "Introduction to Snowpack",
    description: "Learn the basics of Snowpack",
    image: "/media/photos/perfect_musk.jpg",
    category: categories[1],
  },
];
