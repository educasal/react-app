import React from 'react';

class NestedDataApp extends React.Component {

  render() {
    return <Button>I <Heart /> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>
const Heart = () => <span>&hearts;</span>

export default NestedDataApp;
