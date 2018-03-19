import React from 'react';
import Item from './Item';

class Tracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {itemStates: {bombos: 0, shovel: 0, book: 0, boots: 0}}
  }

  clickHandler(key) {

  }

  render() {
    const items = [
      {name: 'bombos', states: ["inactive", "active"]},
      {name: 'shovel', states: ["inactive", "active"]},
      {name: 'book', states: ["inactive", "active"]},
      {name: 'boots', states: ["inactive", "active"]},
    ]

    return (
      <div className="row">
        <div className="col-sm">
          { items.map(({name}) => <Item name={name} key={name}/>)
          }
        </div>
      </div>
    )
  }
}

export default Tracker;
