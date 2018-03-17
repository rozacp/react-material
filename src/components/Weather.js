import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import './Weather.css';

const apiKey = 'ee6e9b7ac36186b0dcb5451d30e2b8e4';
const town = 'Mengeš';

export default class Weather extends Component {

    state = {
        city: 'ni podatkov',
        temp: 'ni podatkov',
        pressure: 'ni podatkov',
        wind: 'ni podatkov',
        humidity: 'ni podatkov',
        description: 'ni podatkov',
        icon: '01d'
    };

    componentDidMount() {
        this.getWeather();
        this.interval = setInterval(() => this.getWeather(), 600000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getWeather = async () => {
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town},SI&appid=${apiKey}&units=metric&lang=sl`);
        const data = await api.json();
        this.setState({
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            description: data.weather['0'].description,
            icon: data.weather['0'].icon
        });
        console.log(data);
    }
   
    render() {
        return (
            <div className="weather">
                <Typography variant="display2" gutterBottom>
                    Vreme
                </Typography>
                <Typography variant="headline" paragraph>
                    {this.state.city}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Temperatura:</strong> {this.state.temp} &#176;C
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Pritisk:</strong> {this.state.pressure} hPa
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Veter:</strong> {this.state.wind} m/s
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Vlažnost:</strong> {this.state.humidity} &#37;
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Opis:</strong> {this.state.description}
                </Typography>
                <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weather icon" />
            </div>
        );
    }
}
