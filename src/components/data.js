import crochet from "../../static/calc.png"
import crud from "../../static/crud.png"
import weather from "../../static/weather.png"
import bird from "../../static/bird.png"
import space from "../../static/space.png"
import portfolio from "../../static/portfolio.jpg"

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
    site: "https://sidney-journal.netlify.app",
    img: crud,
    alt: "journal app project",
    description: "A sharp CRUD journal made with React.",
  },
  {
    id: "330",
    title: "React Weather App",
    code: "https://github.com/sidneyhopkins/react-weather",
    site: "https://sidney-weather-app.netlify.app",
    img: weather,
    alt: "weather app project",
    description: "Type a city to receive live weather data.",
  },
  {
    id: "440",
    title: "React Ecommerce",
    code: "https://github.com/sidneyhopkins/react-project-ecommerce",
    site: "https://sidney-react-ecommerce.netlify.app",
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
    img: space,
    alt: "clone",
    description: "Clone of a website.",
  },
]
