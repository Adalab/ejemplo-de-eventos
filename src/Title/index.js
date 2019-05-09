import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component{
  render() {
    return (
      <h1 className="app__title"> :){this.props.title}</h1>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title;