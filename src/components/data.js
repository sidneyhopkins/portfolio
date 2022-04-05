import crud from "../static/crud.png"
import weather from "../static/weather.png"
import bird from "../static/bird.png"
import scribd from "../static/scribd.png"
import portfolio from "../static/portfolio.jpg"

export const projects = [
  {
    id: "3/31/21",
    title: "Scribd Clone",
    code: "https://github.com/sidneyhopkins/scribd-clone",
    site: "https://sidney-scribd-clone.netlify.app/",
    img: scribd,
    alt: "Scribd Clone",
    description:
      "A recreation of the Scribd audiobook subscription service landing page, with improved responsiveness for tablet screens.",
    bgc: "#234D5B",
  },
  {
    id: "110",
    title: "Portfolio",
    code: "https://github.com/sidneyhopkins/portfolio",
    img: portfolio,
    alt: "portfolio",
    description:
      "My personal Gatsby website and portfolio, where you can see NASA's Astronomy Photo of the Day.",
    bgc: "#8e5900",
  },
  {
    id: "220",
    title: "CRUD Journal App",
    code: "https://github.com/sidneyhopkins/crud-react",
    site: "https://sidney-journal.netlify.app",
    img: crud,
    alt: "journal app project",
    description:
      "A responsively designed and sharp CRUD (create, read, update, delete) journal made with React.",
    bgc: "#79192B",
  },
  {
    id: "330",
    title: "React Weather App",
    code: "https://github.com/sidneyhopkins/react-weather",
    site: "https://sidney-weather-app.netlify.app",
    img: weather,
    alt: "weather app project",
    description:
      "This mobile-friendly weather app allows you to type a city name to view live weather data and a weekly forecast.",
    bgc: "#792E0E",
  },
  {
    id: "440",
    title: "React Ecommerce",
    code: "https://github.com/sidneyhopkins/react-project-ecommerce",
    site: "https://sidney-react-ecommerce.netlify.app",
    img: bird,
    alt: "ecommerce project",
    description:
      "A realistic and responsive ecommerce page with an image slider and shopping cart.",
    bgc: "#155447",
  },
  // {
  //   id: "550",
  //   title: "Crochet Calculator",
  //   code: "https://github.com/sidneyhopkins/crochet-calculator",
  //   site: "https://codepen.io/sidneyhopkins/pen/Rwjoery",
  //   img: crochet,
  //   alt: "crochet project",
  //   description: "Users can accurately & quickly plan their crochet projects.",
  // },
]
