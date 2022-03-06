import crochet from "../../static/calc.png"
import crud from "../../static/crud.png"
import weather from "../../static/weather.png"
import bird from "../../static/bird.png"
import cosmos from "../../static/cosmos.jpg"
import portfolio from "../../static/portfolio.png"

export const projects = [
  {
    id: "110",
    title: "Portfolio",
    code: "https://github.com/sidneyhopkins/portfolio",
    img: portfolio,
    alt: "portfolio",
    description: "My personal website & portfolio.",
  },
  {
    id: "220",
    title: "CRUD Journal App",
    code: "https://github.com/sidneyhopkins/crud-react",
    site: "https://sad-engelbart-8686e7.netlify.app",
    img: crud,
    alt: "journal app project",
    description: "A sharp CRUD journal made with React.",
  },
  {
    id: "330",
    title: "React Weather App",
    code: "https://github.com/sidneyhopkins/react-weather",
    site: "https://nifty-ptolemy-7a4996.netlify.app",
    img: weather,
    alt: "weather app project",
    description: "Type a city to receive live weather data.",
  },
  {
    id: "440",
    title: "React Ecommerce",
    code: "https://github.com/sidneyhopkins/react-project-ecommerce",
    site: "https://sidneyhopkins.github.io/react-project-ecommerce/",
    img: bird,
    alt: "ecommerce project",
    description: "A realistic ecommerce page with a shopping cart.",
  },
  {
    id: "550",
    title: "Crochet Calculator",
    code: "https://github.com/sidneyhopkins/crochet-calculator",
    site: "https://codepen.io/sidneyhopkins/pen/Rwjoery",
    img: crochet,
    alt: "crochet project",
    description: "Users can accurately & quickly plan their crochet projects.",
  },
  {
    id: "660",
    title: "In Progress",
    img: cosmos,
    alt: "clone",
    description: "Clone of a website.",
  },
]
