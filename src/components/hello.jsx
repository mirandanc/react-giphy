class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.count + 1
    });
  }

  render () {
    return (
      <div className={this.state.clicked ? 'clicked' : null }
      onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
      </div>
    )
  }
}
