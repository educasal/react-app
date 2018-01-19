import React from 'react';
import PropTypes from 'prop-types'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 5
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>Hallo</h1>
        <b>{txt}</b> <i>Category: {cat}</i>
        <br />
        <input type="text" onChange={this.update.bind(this)} />
        <br />        
        <b>{this.state.txt}</b> <i>Category: {this.state.cat}</i>

      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "I go through all this before you wake up",
  cat: 6
}

export default App;
