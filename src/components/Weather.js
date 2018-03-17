import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import './Weather.css';

const apiKey = 'ee6e9b7ac36186b0dcb5451d30e2b8e4';
const town = 'Ljubljana';

export default class Weather extends Component {

    state = {
        city: 'n/a',
        temp: 'n/a',
        humidity: 'n/a',
        weather: {
            description: 'n/a'
        }
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
            humidity: data.main.humidity,
            weather: data.weather['0']
        });
        console.log(data);
    }
   
    render() {
        return (
            <div className="weather">
                <Typography variant="display2" gutterBottom>
                    Vreme
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Mesto:</strong> {this.state.city}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Temperatura:</strong> {this.state.temp} &#176;C
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Vlažnost:</strong> {this.state.humidity} &#37;
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Opis:</strong> {this.state.weather.description}
                </Typography>
            </div>
        );
    }
}
