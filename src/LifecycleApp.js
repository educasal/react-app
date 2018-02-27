import React from 'react';
import ReactDOM from 'react-dom';

class LifecycleApp extends React.Component {

  mount() {
    ReactDOM.render(
      <Button />,
      document.getElementById('a')
    );
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }

}


class Button extends React.Component {

  constructor() {
    super();
    this.state = { value: 0 }
    this.update = this.update.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextProps.value % 3 === 0;
  }

  componentDidUpdate(prevProps, preveState) {
    console.log('componentDidUpdate');
  }

  update(e) {
    // this.setState({ value: this.state.value + 1 })
    ReactDOM.render(
      <Button value={this.props.value + 1} />,
      document.getElementById('a')
    );
  }

  render() {
    console.log('render')
    return (
      <button onClick={this.update}>{this.props.value}</button>
    )
  }
}

Button.defaultProps = {value: 0}

export default LifecycleApp;
