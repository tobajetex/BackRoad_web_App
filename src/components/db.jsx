import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import tour5 from "../assets/images/tour-5.jpeg";
import tour6 from "../assets/images/tour-6.jpeg";

export const sectionalHeading = {
  about: { titleOne: "ABOUT", titleTwo: "US" },
  service: { titleOne: "OUR", titleTwo: "SERVICES" },
  features: { titleOne: "FEATURED", titleTwo: "TOURS" },
};

export const navlinks = ["Home", "About", "Services", "Tour", "Featured"];

export const navIcons = [
  {
    links: "https://www.facebook.com",
    socialIcon: "fab fa-facebook",
  },
  { links: "https://www.twitter.com", socialIcon: "fab fa-twitter" },
  {
    links: "https://www.squarespace.com",
    socialIcon: "fab fa-squarespace",
  },
];

export const services = [
  {
    icon: "fas fa-wallet fa-fw",
    headingText: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    icon: "fas fa-tree fa-fw",
    headingText: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    icon: "fas fa-socks fa-fw",
    headingText: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const features = [
  {
    img: tour1,
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    No_of_Day: "6 Days",
    cost: "From $1200",
    date: "august 26th, 2020",
  },
  {
    img: tour2,
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: " indonesia",
    No_of_Day: "11 Days",
    cost: "From $1400",
    date: "october 1th, 2020",
  },
  {
    img: tour3,
    title: "explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Hong Kong",
    No_of_Day: "8 Days",
    cost: "from $5000",
    date: "september 15th, 2020",
  },
  {
    img: tour4,
    title: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: " kenya",
    No_of_Day: "20 Days",
    cost: "From $3300",
    date: "december 5th, 2019",
  },
  {
    img: tour5,
    title: "Zambia Game Reserve",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: " Zambia",
    No_of_Day: "30 Days",
    cost: "From $5300",
    date: "March 5th, 2020",
  },
  {
    img: tour6,
    title: "India architecture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "India",
    No_of_Day: "10 Days",
    cost: "From $300",
    date: "August 5th, 2025",
  },
];
