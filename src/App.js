import React, { Component, Fragment } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import AcController from './components/AcController';
import HvacController from './components/HvacController';
import Weather from './components/Weather';
import 'typeface-roboto';
import './App.css';

export default class App extends Component {

    state = {
        uiElems: {
            AcController: true,
            HvacController: true,
            Weather: true
        },
        hvac: 5
    };
    
    updateHvac = hvac => {
        this.setState({ hvac });
    }

    render() {
        const { uiElems } = this.state;

        return (
            <Fragment>
                <CssBaseline />
                <div className="main">
                    {uiElems.AcController && <AcController />}

                    {uiElems.HvacController && <HvacController
                        updateHvac={this.updateHvac}
                        hvac={this.state.hvac}
                    />}
                    
                    {uiElems.Weather && <Weather />}
                </div>
            </Fragment>
        );
    }
}
