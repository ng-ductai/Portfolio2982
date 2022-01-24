import movie from "../assets/images/movie.png";
import covid from "../assets/images/covid.png";
import youtube from "../assets/images/youtube.png";
import portfolio1 from "../assets/images/portfolio1.png";
import weather from "../assets/images/weather.png";
import food from "../assets/images/food.png";
import yolo from "../assets/images/yolo.png";

const data_projects = [
  {
    name: "Food",
    image: food,
    deployed_url: "https://food2982.netlify.app",
    github_url: "https://github.com/ng-ductai/food-react",
    category: ["reactjs"],
  },

  {
    name: "Shop Yolo",
    image: yolo,
    deployed_url: "https://shop-01692f.netlify.app/",
    github_url: "https://github.com/ng-ductai/react-shop-yolo",
    category: ["reactjs"],
  },

  {
    name: "Covid 19 page",
    image: covid,
    deployed_url: "https://ng-ductai.github.io/covid-19/",
    github_url: "https://github.com/ng-ductai/covid-19",
    category: ["html", "css", "javascript"],
  },

  {
    name: "Movie",
    image: movie,
    deployed_url: "https://movie-298.netlify.app/",
    github_url: "https://github.com/ng-ductai/react-movie",
    category: ["reactjs"],
  },

  {
    name: "Youtube Clone",
    image: youtube,
    deployed_url: "https://ytb-clone.netlify.app",
    github_url: "https://github.com/ng-ductai/youtube-clone1",
    category: ["reactjs", "firebase"],
  },

  {
    name: "Portfolio Page",
    image: portfolio1,
    deployed_url: "https://ng-ductai.github.io/portfolio/",
    github_url: "https://github.com/ng-ductai/portfolio",
    category: ["html", "css", "javascript"],
  },

  {
    name: "Weather",
    image: weather,
    deployed_url: "https://ng-ductai.github.io/app-weather/",
    github_url: "https://github.com/ng-ductai/app-weather/",
    category: ["html", "css", "javascript"],
  },
];

export default data_projects;
