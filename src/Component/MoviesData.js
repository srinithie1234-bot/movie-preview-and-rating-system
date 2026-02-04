import anjan from "../assets/anjan.jpg";
import leo from "../assets/leo.jpg";
import jailour from "../assets/jailour.jpg";
import vikram from "../assets/vikram.jpg";

export const moviesData = [
 {
  id: 1,
  title: "Leo",
  image: leo,
  description: "Leo is a psychological action thriller.",
  rating: 4.8,
  viewers: 1200000,
  subscribers: 450000,
  trailer: "https://www.youtube.com/embed/Po3jStA673E", // ✅ FIXED
  subscription: "Netflix",
  actors: ["Vijay", "Trisha", "Sanjay Dutt"],
  reviews: []
}
,
  {
    id: 2,
    title: "Leo",
    image: leo,
    description:
      "Leo is a psychological action drama directed by Lokesh Kanagaraj.",
    trailer: "https://www.youtube.com/embed/Po3jStA673E",
    actors: ["Vijay", "Trisha", "Sanjay Dutt"],
    subscription: "Netflix",
    rating: 4.8,
    viewers: 1200000,
    subscribers: 450000,
    reviews: [],
  },
  {
    id: 3,
    title: "Jailer",
    image: jailour,
    description:
      "Jailer follows the story of a retired jailer who takes revenge.",
    trailer: "https://www.youtube.com/embed/Y5BeWdODPqo",
    actors: ["Rajinikanth", "Tamannaah", "Yogi Babu"],
    subscription: "Amazon Prime",
    rating: 4.2,
    viewers: 980000,
    subscribers: 380000,
    reviews: [],
  },
  {
    id: 4,
    title: "Vikram",
    image: vikram,
    description:
      "Vikram is a high-octane action thriller set in the LCU universe.",
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
    actors: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
    subscription: "Disney+ Hotstar",
    rating: 4.6,
    viewers: 1500000,
    subscribers: 520000,
    reviews: [],
  },
];
