import { Audio } from "react-loader-spinner";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1f853ed12117b75aa8323131f70900d7&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return (<div>
    <h4>
  The weather in {props.city} is
  </h4>
     <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'aqua'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
  </div>)
}
