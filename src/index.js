import React, { Component } from 'react';
import { render } from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AcController from './AcController';
import HvacController from './HvacController';
import 'typeface-roboto';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';


class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            uiElems: {
                AcController: false,
                HvacController: true
            },
            hvac: 5
        };
    }
    
    updateHvac = hvac => {
        this.setState({ hvac });
    }

    render() {
        const { uiElems } = this.state;

        return (
            // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
            <MuiThemeProvider>
                <div className="main">
                    {uiElems.AcController && <AcController />}

                    {uiElems.HvacController && <HvacController
                        updateHvac={this.updateHvac}
                        hvac={this.state.hvac}
                    />}
                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App />, document.getElementById('root'));
// registerServiceWorker();
