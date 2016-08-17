/**
*
* Encounter
*
*/

import React from 'react';
import styles from './styles.css';

import { Divider, TextField, RaisedButton, List, ListItem, Avatar } from 'material-ui';
import AddBox from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const  SortableItem = SortableElement(({value}) => <ListItem  primaryText={value.name} leftAvatar={<Avatar>{value.initiative}</Avatar>} />);

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
      items: [
        {"name":"Dan", "initiative":"12"},
        {"name":"Ted", "initiative":"14"}
      ]
    };
    this.styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleAdd = ()  => {
    var newList = this.state.items.slice();
    newList.push({ "name": this.state.name, "initiative": this.state.initiative });
    this.setState({
      items: newList,
      name: "",
      initiative: ""
    })
  }

  handleEnter = (event) => {
    /* Can't understand how to just call handleAdd */
    /* Why doesn't this.handleAdd just work? */
    if(event.key == "Enter") {
      var newList = this.state.items.slice();
      newList.push({ "name": this.state.name, "initiative": this.state.initiative });
      this.setState({
        items: newList,
        name: "",
        initiative: ""
      })
    }
  }

  render() {
    return (
      <div>
        <div className={styles.encounter}>
          <TextField
            id="text-field-name"
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
            onKeyDown={(e) => this.handleEnter(e)}
            hintText="Name"
            floatingLabelText="Character"
          />
          <TextField
            id="text-field-initiative"
            value={this.state.initiative}
            onChange={e => this.setState({initiative: e.target.value})}
            onKeyDown={(e) => this.handleEnter(e)}
            hintText="Number"
            floatingLabelText="Initiative"
          />
          <RaisedButton
            primary={true}
            icon={<AddBox />}
            onTouchTap={this.handleAdd}
            />
          </div>
          <Divider />
          <List>
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
          </List>
          <RaisedButton onTouchTap={this.clearList}>Clear</RaisedButton>
        </div>
    );
  }
}

export default Encounter;
