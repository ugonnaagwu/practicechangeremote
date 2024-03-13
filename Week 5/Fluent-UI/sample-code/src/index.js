import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>,
);
