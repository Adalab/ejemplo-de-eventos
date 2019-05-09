import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button 
        className="app__patito"
        onClick={this.props.actionToClick}
      >Di Cuack!</button>
    );
  }
}

export default Button;