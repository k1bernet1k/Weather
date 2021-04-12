import {Component} from "react";
export default class Weather extends Component{
    render(){
        return <div className="weather">
            <h2>Погода в москве</h2>
            <p>Температура {this.props.time}</p>
        </div>
    }
}