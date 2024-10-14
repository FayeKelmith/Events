interface ConferenceData {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
  url: string;
}

export const conferences: ConferenceData[] = [
  {
    id: "1",
    name: "AI Summit",
    description:
      "The premier global event for AI innovation. Join industry leaders and experts to explore the latest advancements in AI technology.",
    date: "2023-11-20",
    location: "San Francisco, USA",
    image: "/media/photos/arnold.jpg",
    url: "https://aisummit.com/",
  },
  {
    id: "2",
    name: "Deep Learning World",
    description:
      "The leading conference covering deep learning applications. Discover how deep learning is transforming industries and driving innovation.",
    date: "2023-12-05",
    location: "Berlin, Germany",
    image: "/media/photos/bryant.jpg",
    url: "https://deeplearningworld.com/",
  },
  {
    id: "3",
    name: "AI & Big Data Expo",
    description:
      "A major event showcasing AI and big data technologies. Network with professionals and learn about the latest trends and solutions in AI and big data.",
    date: "2023-10-10",
    location: "London, UK",
    image: "/media/photos/helen_keller.jpg",
    url: "https://www.ai-expo.net/",
  },
  {
    id: "4",
    name: "Machine Learning Conference",
    description:
      "An essential conference for machine learning enthusiasts. Gain insights from leading experts and explore cutting-edge machine learning techniques.",
    date: "2023-09-15",
    location: "New York, USA",
    image: "/media/photos/jamie_dimon.jpg",
    url: "https://mlconference.com/",
  },
  {
    id: "5",
    name: "AI in Healthcare Summit",
    description:
      "Focused on the impact of AI in the healthcare sector. Learn about AI-driven innovations improving patient care and healthcare operations.",
    date: "2023-08-25",
    location: "Boston, USA",
    image: "/media/photos/jocko.jpg",
    url: "https://aihealthcaresummit.com/",
  },
  {
    id: "6",
    name: "AI for Good Global Summit",
    description:
      "A summit dedicated to leveraging AI for social good. Explore how AI can address global challenges and contribute to sustainable development.",
    date: "2023-07-30",
    location: "Geneva, Switzerland",
    image: "/media/photos/jordan.jpg",
    url: "https://aiforgood.itu.int/",
  },
];
