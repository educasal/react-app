import React from 'react';
import PropTypes from 'prop-types'


class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>Hallo</h1>
        <b>{txt}</b> <i>Category: {cat}</i>
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
