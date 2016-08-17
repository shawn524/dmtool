/**
*
* Encounter
*
*/

import React from 'react';
import styles from './styles.css';

import { Divider, TextField, RaisedButton } from 'material-ui'
import AddBox from 'material-ui/svg-icons/content/add';

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const  SortableItem = SortableElement(({value}) => <li>{value}</li>);

const  SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) =>
                 <SortableItem key={`item-${index}`} index={index} value={value} />
                 )}
                 </ul>
  );
});

class Encounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initiative: '',
      items: ["one","two"],
      chipData: []
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  render() {

    return (
      <div>
        <div className={styles.encounter}>
          <TextField
            id="text-field-controlled"
            value={this.state.name}
            onChange={this.handleChange}
            hintText="Name"
            floatingLabelText="Character"
          />
          <TextField
            id="text-field-controlled"
            value={this.state.initiative}
            onChange={this.handleChange}
            hintText="Number"
            floatingLabelText="Initiative"
          />
          <RaisedButton
            primary={true}
            icon={<AddBox />}
            />
          </div>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        </div>
    );
  }
}

export default Encounter;
