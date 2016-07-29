import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import RaisedButton from 'material-ui/RaisedButton';

const checkCategory = (value, categories) => !!categories.filter(c => c === value+'').length;

const GiftDetails = React.createClass({
  getCategoriesList: function(){
    return this.props.categoriesList || [];
  },
  
  render: function(props) {
    let gift = this.props.item
    return (
        <section>
        { this.props.isUpdate ?
            <div>
              <List>
                <ListItem primaryText="Name" secondaryText={gift.name} />
                <ListItem primaryText="Price" secondaryText={gift.price} />
                <ListItem primaryText="Categories" 
                          secondaryText={gift.categories.map(cat => cat + ', ')}
                          initiallyOpen={false}
                          primaryTogglesNestedList={true}
                />
              </List>
              <Divider />
            </div>
        :
              null
        }
          <form>
            <fieldset>
              { this.props.isUpdate ?
                  null
              :
                <TextField hintText="ID" floatingLabelText="Define new Id" name="id" type="text" onChange={this.props.handleChange}/>
              }
              <Divider />
              <TextField hintText="Name" floatingLabelText="Please define the gift name" name="name" type="text" defaultValue={gift?gift.name:null} onChange={this.props.handleChange}/>
              <Divider />
              <TextField hintText="Price" type="number" floatingLabelText="Please set the gift price" name="price" type="text" defaultValue={gift?gift.price:null} onChange={this.props.handleChange}/>
              <Divider />
              {this.getCategoriesList().map(cat => <Checkbox name="category" key={cat.id} label={cat.name} value={cat.id} onCheck={this.props.handleChange} defaultChecked={checkCategory(cat.id, gift?gift.categories:[])} /> )}
           
            </fieldset>
            { this.props.isUpdate ?
                <span>
                  <RaisedButton label="Update" onClick={this.props.updateHandler} />
                  <RaisedButton label="Delete" onClick={() => this.props.deleteHandler(gift)} />
                </span>
                :
                  <RaisedButton label="Create" onClick={this.props.createHandler} />
            }
          </form>
        
        </section>
    );
  }
});

export default GiftDetails;
