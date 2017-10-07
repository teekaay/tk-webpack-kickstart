import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return(
      <div className="homepage">
        <div className="homepage__header">
          <img src="/static/logo.png" alt="React Starter" />
          <h2>{name ? name : 'unknown'}</h2>
        </div>
        <p className="homepage__intro">To get started, edit src/app/components/App.js and save to reload.</p>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
