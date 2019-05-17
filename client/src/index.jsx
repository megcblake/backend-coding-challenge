import React from 'react';
import ReactDOM from 'react-dom';

const SearchCities = () => (
  <div>
    <div className="topscreen">
      Large City Suggestions
      {' '}
      <span className="docs"><a className="link" href="https://github.com/megcblake/backend-coding-challenge">Documentation</a></span>
    </div>
    <h2>Usage</h2>
    In order to retrieve city suggestions, please use the /suggestions route with the following parameters:
    <br />
    <br />
    <div className="params">
      <div className="paramNames">q:</div>
      <div className="paramDesc">a partial or complete city name</div>
      <br />
      <div className="paramNames">latitude:</div>
      <div className="paramDesc">the latitude of the city</div>
      <br />
      <div className="paramNames">longitude:</div>
      <div className="paramDesc">the longitude of the city</div>
    </div>
    <br />
    To try, feel free to click the example below!
    <br />
    <b>Example:</b>
    {' '}
    <a className="link" href="/suggestions?q=Mont&latitude=45.50884&longitude=-73.58781">/suggestions?q=Mont&latitude=45.50884&longitude=-73.58781</a>
  </div>
);

ReactDOM.render(
  <SearchCities />,
  document.getElementById('root'),
);
