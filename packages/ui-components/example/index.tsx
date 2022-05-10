// import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Accordian } from '../dist';

import "../dist/main.css";

const App = () => {
  return (
    <div>
      <Accordian />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
