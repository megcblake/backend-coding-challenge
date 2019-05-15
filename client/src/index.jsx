import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <SearchCities />,
  document.getElementById('root'),
);
