import crochet from "../../static/crochet-calc.png"
import crud from "../../static/crud-journal.png"
import weather from "../../static/weatherapp.png"
import bird from "../../static/bird.png"

export const projects = [
  {
    id: "110",
    title: "Crochet Calculator",
    code: "https://github.com/sidneyhopkins/crochet-calculator",
    site: "https://codepen.io/sidneyhopkins/pen/Rwjoery",
    img: crochet,
    alt: "crochet project",
    description:
      "Users can determine the number of chain stitches needed for a crochet project.",
  },
  {
    id: "220",
    title: "React Weather App",
    code: "https://github.com/sidneyhopkins/react-weather",
    site: "https://nifty-ptolemy-7a4996.netlify.app",
    img: weather,
    alt: "weather app project",
    description:
      "Type a city name and receive weather data using the OpenWeatherMap API.",
  },
  {
    id: "330",
    title: "CRUD Journal App",
    code: "https://github.com/sidneyhopkins/crud-react",
    site: "https://sad-engelbart-8686e7.netlify.app",
    img: crud,
    alt: "journal app project",
    description:
      "A sharp journal with CRUD (create, read, update, delete) functionality.",
  },
  {
    id: "440",
    title: "React Ecommerce",
    code: "https://github.com/sidneyhopkins/react-project-ecommerce",
    site: "https://sidneyhopkins.github.io/react-project-ecommerce/",
    img: bird,
    alt: "ecommerce project",
    description:
      "Select a watercolor at the bottom of the page to add it to a collapsable shopping cart.",
  },
]
