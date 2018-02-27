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

  update(e) {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    console.log('render')
    return (
      <button onClick={this.update}>{this.state.value}</button>
    )
  }
}


export default LifecycleApp;
