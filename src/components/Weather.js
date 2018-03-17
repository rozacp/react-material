import React, { Component } from 'react';
import './Weather.css';

const apiKey = 'ee6e9b7ac36186b0dcb5451d30e2b8e4';
const town = 'Ljubljana';

export default class Weather extends Component {

    state = {
        city: 'n/a',
        temp: 'n/a',
        temp_min: 'n/a',
        temp_max: 'n/a',
        humidity: 'n/a',
        weather: {
            description: 'n/a'
        }
    };

    componentDidMount() {
        // this.getWeather();  //set interval
        this.interval = setInterval(() => this.getWeather(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getWeather = async () => {
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town},SI&appid=${apiKey}&units=metric`);
        const data = await api.json();
        this.setState({
            city: data.name,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            weather: data.weather['0']
        });
        console.log('ping');
    }
   
    render() {
        return (
            <div className="weather">
                <h1>Weather</h1>
                <p>City: {this.state.city}</p>
                <p>Temp: {this.state.temp}</p>
                <p>Min temp: {this.state.temp_min}</p>
                <p>Max temp: {this.state.temp_max}</p>
                <p>Humidity: {this.state.humidity}</p>
                <p>Desc: {this.state.weather.description}</p>
            </div>
        );
    }
}
