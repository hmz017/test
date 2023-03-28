import React from 'react';
import { render } from 'react-dom';
import ReactDom from 'react-dom';

import _ from 'lodash';

import '@carbon/ibm-products/css/index-full-carbon.css';
import './_index.scss';
import "./config";
import { HashRouter as Router } from 'react-router-dom';

import { App } from './App/app';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';

ReactDom.
  render(
    <ThemeProvider>
      <div className="app">
        <Router>
          <App />
        </Router>
      </div>
      <ThemeDropdown />
    </ThemeProvider>
    ,
    document.getElementById('root')

  );
