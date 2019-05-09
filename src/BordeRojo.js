import React from 'react';
import './BordeRojo.css';

class BordeRojo extends React.Component {
  render() {
    return (
      <div className="borde-rojo">
        <div className="border-rojo__titulico">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}
BordeRojo.defaultProps = {
  title: 'No molo nada y no tengo ni título :(' 
}

export default BordeRojo;