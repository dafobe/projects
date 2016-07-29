import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ManagementGrid from '../views/categories-management-grid';
import * as testApi from '../../services/test-api';

import store from '../../store';

let selectedItem = {};

let itemsArray = [];

let selectItem = (selectedRows) => {selectedItem = itemsArray[selectedRows[0]]};

let navigateTo = url => browserHistory.push(url)

let editItem = item => (() => {testApi.getGift(item.id).then(()=>{navigateTo('/categories/'+item.id)})});

let updateItem = () => {selectedItem && editItem(selectedItem)()};

let deleteItem = item => (() => testApi.deleteGift(item).then(()=>navigateTo('/')));

let createItem = () => browserHistory.push('/categories/new');


const ManagementContainer = React.createClass({

  componentDidMount: function() {
    testApi.getCategories();
  },

  render: function() {
    itemsArray = this.props.items;
    
    return (
      <ManagementGrid items={this.props.items} 
                      type={this.props.searchType}
                      createItem={createItem}
                      deleteItem={deleteItem} 
                      updateItem={updateItem}
                      selectItem={selectItem}/>
    );
  }
});

const mapStateToProps = function(store) {
  function getItems(){
    const items = store.categoriesState.getIn(['categories']);
    return items?items.toJS():[]
  }
  
  return {
    items: getItems()
  };
};

export default connect(mapStateToProps)(ManagementContainer);
