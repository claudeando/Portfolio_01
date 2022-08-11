import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ReactGA from 'react-ga';

const TRACKING_ID = "G-23SXWNFYHN"; // YOUR_OWN_TRACKING_ID

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);