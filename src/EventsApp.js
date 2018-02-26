import React from 'react';

class EventsApp extends React.Component {

  constructor(){
    super();
    this.state = { currentEvent: '---',
                   a: 'a',
                   b: 'b',
                   c: 'c'
                 }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({ currentEvent: e.type,
                    a: this.refs.a.value,
                    b: this.refs.b.value,
                    c: this.c.refs.input.value
                  })
  }

  render(){
   return (
     <div>
       <h1>{this.state.currentEvent}</h1>
       <textarea
         onKeyPress={this.update}
         onCopy={this.update}
         onCut={this.update}
         onPaste={this.update}
         onFocus={this.update}
         onBlur={this.update}
         onDoubleClick={this.update}
         onTouchStart={this.update}
         onTouchMove={this.update}
         onTouchEnd={this.update}
         cols="30"
         rows="10" />
      <hr />
      <h1>{this.state.a}</h1>
      <input ref="a" type="text" onChange={this.update} />
      <hr />
      <h1>{this.state.b}</h1>
      <input ref="b" type="text" onChange={this.update} />
      <hr />
      <h1>{this.state.c}</h1>
      <Input update ={this.update.bind(this)} ref={component => this.c = component} />

     </div>
  )
 }
}

class Input extends React.Component {
  render() {
    return <div><input type="text" onChange={this.props.update} ref="input" /></div>
  }
}

export default EventsApp
