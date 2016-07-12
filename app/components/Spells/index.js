/**
*
* Spells
*
*/
import SpellData from './spellData.json'
import React from 'react';
import styles from './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const dataSourceConfig = {
  text: 'name',
  value: 'name',
};

class Spells extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateInput  = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : SpellData,
      inputValue : '',
      expanded: true
    }
  }

  onUpdateInput(inputValue) {
    var self = this;
    this.setState({
      inputValue : inputValue
    });
  }

  render() {
    return (
      <div>
      <AutoComplete
        fullWidth             ={true}
        floatingLabelText   ="Spell Search"
        filter              ={AutoComplete.caseInsensitiveFilter}
        openOnFocus         ={true}
        dataSource          ={this.state.dataSource}
        dataSourceConfig    ={dataSourceConfig}
        maxSearchResults={5}
        onUpdateInput       ={this.onUpdateInput}
        onNewRequest        ={this.onUpdateInput} />
        <Divider />
        <Card expanded={true} >
          <CardHeader
            title={this.state.inputValue.name}
            subtitle={this.state.inputValue.level}
          />
          <Subheader>{this.state.inputValue.class}</Subheader>
          <CardText>
            {this.state.inputValue.desc}
          </CardText>
          <Divider />
          <List >
            <ListItem
              primaryText="Details"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={8}
                  primaryText="School"
                  secondaryText={this.state.inputValue.school}
                  />,
                <ListItem
                  key={1}
                  primaryText="Range"
                  secondaryText={this.state.inputValue.range}
                  />,
                <ListItem
                  key={2}
                  primaryText="Components"
                  secondaryText={this.state.inputValue.components}
                  />,
                <ListItem
                  key={3}
                  primaryText="Materials"
                  secondaryText={this.state.inputValue.material}
                  />,
                <ListItem
                  key={4}
                  primaryText="Ritual"
                  secondaryText={this.state.inputValue.ritual}
                  />,
                <ListItem
                  key={5}
                  primaryText="Duration"
                  secondaryText={this.state.inputValue.duration}
                  />,
                <ListItem
                  key={6}
                  primaryText="Concentration"
                  secondaryText={this.state.inputValue.concentration}
                  />,
                <ListItem
                  key={7}
                  primaryText="Casting time"
                  secondaryText={this.state.inputValue.casting_time}
                  />,
                ]}
              />
          </List>
        </Card>

      </div>
    );
  }
}

export default Spells;
