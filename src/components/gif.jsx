import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://www.myconfinedspace.com/wp-content/uploads/tdomf/219931/o89059.gif"
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
