import React, { Fragment } from 'react';
import { render } from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


render(
    <Fragment>
        <CssBaseline />
        <App/>
    </Fragment>,
    document.getElementById('root'));

// registerServiceWorker();
