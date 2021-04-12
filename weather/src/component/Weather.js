import {Component} from "react";
import "./Weather.css"
export default class Weather extends Component{
    render(){
        const rus = {
            partlycloudy_day: "Переменная облачность",
            partlycloudy_night: "Переменная облачность",
            fair_night: "Безоблачно",
            clearsky_night: "Безоблачно",
            cloudy: "Облачно",
            fair_day: "Безоблачно",
            clearsky_day: "Безоблачно",
        }

        return <div className="weather">
            <h2>Погода в Москве</h2>
            <div className="time">
            <div>
                <h3>Сейчас</h3>
                <p>Температура {this.props.temp}</p>
                <p>Скорость ветра {this.props.wind}</p>
                <p>Облачность: {rus[this.props.cloud]}</p>
                <p>Влажность: {this.props.humidity}</p>
            </div>
            <div>
                <h3>Через 6 часов</h3>
                <p>Температура {this.props.temp2}</p>
                <p>Скорость ветра {this.props.wind2}</p>
                <p>Облачность: {rus[this.props.cloud2]}</p>
                <p>Влажность: {this.props.humidity2}</p>
            </div>
            <div>
                <h3>Через 12 часов</h3>
                <p>Температура {this.props.temp3}</p>
                <p>Скорость ветра {this.props.wind3}</p>
                <p>Облачность: {rus[this.props.cloud3]}</p>
                <p>Влажность: {this.props.humidity3}</p>
            </div>
            <div>
                <h3>Через 24 часа</h3>
                <p>Температура {this.props.temp4}</p>
                <p>Скорость ветра {this.props.wind4}</p>
                <p>Облачность: {rus[this.props.cloud4]}</p>
                <p>Влажность: {this.props.humidity4}</p>
            </div>
            </div>
        </div>
    }
}