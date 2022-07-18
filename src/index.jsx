import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      <h1>
      Hello,
        {name}
      </h1>
    </div>
  );
};

handleClick = () => {
  this.setState({
    clicked: !this.state.clicked,
    counter: this.state.count + 1
  });
}

render () {
  return (
    <div className={this.state.clicked ? 'clicked' : null } onClick={this.handleClick}>
      hello {this.props.name} {this.state.counter}
    </div>
  )
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
