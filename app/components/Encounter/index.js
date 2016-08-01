/**
*
* Encounter
*
*/

import React from 'react';
import styles from './styles.css';

import { Chip, Divider, Paper, TextField, RaisedButton, Table } from 'material-ui'
import AddBox from 'material-ui/svg-icons/content/add';



class Encounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initiative: '',
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

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
        >
          {data.label}
      </Chip>
    );
  }

  render() {
    return (
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
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}

export default Encounter;
