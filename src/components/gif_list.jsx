import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={Gif.id} key={gif.id}/>
    });
  }
}

export default GifList;
