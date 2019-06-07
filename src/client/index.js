import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const Index = () => (
<div>
  <App appName='React Router Challenge: Yelp Restaurants Clone'/>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
