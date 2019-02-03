import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import Header from './components/Header';
import Paper from 'material-ui/Paper';
// import AcController from './components/AcController';
// import HvacController from './components/HvacController';
import Weather from './components/Weather';

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
        // const { uiElems } = this.state;

        return (
            <Fragment>
                <Header />
                <Grid
                    container
                    direction="row"
                    alignItems="stretch"
                    justify="center"
                    spacing={0}
                >
                    <Grid item sm>
                        <Grid
                            container
                            direction="row"
                            alignItems="stretch"
                            justify="center"
                            spacing={0}
                        >
                            <Grid item sm><Paper>Ac</Paper></Grid>
                            <Grid item sm><Paper>Ac</Paper></Grid>
                            <Grid item sm><Paper>Ac</Paper></Grid>
                            <Grid item sm><Paper>Ac</Paper></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm>
                        <Paper>
                            <Weather />
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}


/*

{uiElems.AcController && <AcController />}

{uiElems.HvacController && <HvacController
                            updateHvac={this.updateHvac}
                            hvac={this.state.hvac}
                        />}



*/
