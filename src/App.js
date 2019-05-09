import React from 'react';
import Button from './Button'; 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.algo = 'CUACK :)';
    this.cuack = this.cuack.bind(this);
  }

  cuack() {
    alert(this.algo);
  }

  render() {
    return (
      <div className="app">
        <Button actionToClick={this.cuack}/>
      </div>
    );
  }
}

export default App;
