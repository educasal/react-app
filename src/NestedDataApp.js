import React from 'react';
import PropTypes from 'prop-types'

class NestedDataApp extends React.Component {

  render() {
    return (
      <div>
        <Title text="Title" />
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

const Button = (props) => <button>{props.children}</button>
const Heart = () => <span>&hearts;</span>
const Title = (props) => <h1>{props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`Missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} is too short`)
    }
  }
}

export default NestedDataApp;
