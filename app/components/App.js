import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return(
            <div className='app-wrapper'>
                Hello, {this.props.name || 'stranger'}!
            </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.string,
};

export default App;
