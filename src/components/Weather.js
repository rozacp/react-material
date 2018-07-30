import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';
import './Weather.css';

const apiKey = 'ee6e9b7ac36186b0dcb5451d30e2b8e4';
const town = 'Mengeš';
const country = 'SI'; //SI

export default class Weather extends Component {

    state = {
        loaded: false
    };

    componentDidMount() {
        this.getWeather();
        // this.interval = setInterval(() => this.getWeather(), 600000); // 10 minites
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town},${country}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    icon: data.weather['0'].icon,
                    loaded: true
                });
                console.log(data);
            });
    }

    render() {
        return (
            <div className="weather">
                <Typography variant="display2" gutterBottom>
                    Vreme
                </Typography>
                {
                    this.state.loaded
                        ?
                        <Fragment>
                            <Typography variant="headline" gutterBottom>
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
                            {/* <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weather icon" /> */}
                            <img src={`http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.state.icon}.png`} alt="weather icon" />
                        </Fragment>
                        :
                        <Typography variant="body1" paragraph>
                            Nalaganje...
                        </Typography>
                }
            </div>
        );
    }
}
