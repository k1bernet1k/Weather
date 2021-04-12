import './App.css';
import {Component} from "react";
import Weather from "./component/Weather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      weathet2: null,
      weather3: null,
      weather4: null
    }
  }
  componentDidMount() {
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=55&lon=37")
        .then(res => res.json()).then(timeseries=> {
      this.setState({
        weather: timeseries.properties.timeseries
      });
      // console.log(this.state.weather)
    });
  }

  // data.instant.details.air_temperature
  render() {
    // let myweather = this.state.weather ? this.state.weather : [{
    //   air_temperature: "",
    //   relative_humidity:"",
    //   wind_speed: "",
    //   symbol_code: ""
    // }];
    // let cards = myweather.map((bk ,i)=> <Weather key={i}
    //                                          air_temperature={bk.data.instant.details.air_temperature}
    //                                          relative_humidity={bk.data.instant.details.relative_humidity}
    //                                          wind_speed={bk.data.instant.details.wind_speed}
    //                                          symbol_code={bk.data.next_1_hours.summary.symbol_code}
    //
    //     />
    // )

    let weather = this.state.weather ? this.state.weather[0].data.instant.details : [{
      air_temperature: "",
      relative_humidity:"",
      wind_speed: ""
    }];
    let cloud = this.state.weather ? this.state.weather[0].data.next_1_hours.summary : [{
      symbol_code: ""
    }];
    let weather2 = this.state.weather ? this.state.weather[5].data.instant.details : [{
      air_temperature: "",
      relative_humidity:"",
      wind_speed: ""
    }];
    let cloud2 = this.state.weather2 ? this.state.weather[5].data.next_1_hours.summary : [{
      symbol_code: ""
    }];
    let weather3 = this.state.weather3 ? this.state.weather[11].data.instant.details : [{
      air_temperature: "",
      relative_humidity:"",
      wind_speed: ""
    }];
    let cloud3 = this.state.weather ? this.state.weather[11].data.next_1_hours.summary : [{
      symbol_code: ""
    }];
    let weather4 = this.state.weather4 ? this.state.weather[23].data.instant.details : [{
      air_temperature: "",
      relative_humidity:"",
      wind_speed: ""
    }];
    let cloud4 = this.state.weather4 ? this.state.weather[23].data.next_1_hours.summary : [{
      symbol_code: ""
    }];
    // console.log(weather)
    return (
        <div className="App">
          <Weather
              temp={weather.air_temperature}
              wind={weather.wind_speed}
              cloud={cloud.symbol_code}
              humidity={weather.relative_humidity}
              temp2={weather2.air_temperature}
              wind2={weather2.wind_speed}
              cloud2={cloud2.symbol_code}
              humidit2={weather2.relative_humidity}
              temp3={weather3.air_temperature}
              wind3={weather3.wind_speed}
              cloud3={cloud3.symbol_code}
              humidity3={weather3.relative_humidity}
              temp4={weather4.air_temperature}
              wind4={weather4.wind_speed}
              cloud4={cloud4.symbol_code}
              humidity4={weather4.relative_humidity}
          />
        </div>
    );
  }


}

export default App;
