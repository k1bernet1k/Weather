import './App.css';
import {Component} from "react";
import Weather from "./component/Weather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    }
  }
  componentDidMount() {
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=55&lon=37")
        .then(res => res.json()).then(timeseries=> {
      this.setState({
        weather: timeseries.properties.timeseries[0].data.instant.details

      });
    });
  }
  // data.instant.details.air_temperature
  render() {
    let weather =this.state.weather ? this.state.weather : [{
      // time :"",
      // data:"",
      air_temperature:""
    }];
    // console.log(weather[0].data)
    return (
        <div className="App">
          <Weather time={weather.air_temperature}/>
        </div>
    );
  }


}

export default App;
