'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppComponent from './components/App.js';
import store from './store';

const app = document.getElementById("app");
const AppRender = <Provider store={store}><AppComponent /></Provider>;


ReactDOM.render(AppRender, app);
