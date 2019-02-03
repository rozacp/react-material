import React, { Fragment } from 'react';
import { render } from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import dotenv from 'dotenv';
dotenv.config();

render(
    <Fragment>
        <CssBaseline />
        <App/>
    </Fragment>,
    document.getElementById('root'));

// registerServiceWorker();
