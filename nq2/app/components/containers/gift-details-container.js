import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import GiftDetails from '../views/gift-details';
import * as testApi from '../../services/test-api';

import store from '../../store';

let updatedItem = {};

let navigateTo = url => browserHistory.push(url)

let createItem = (item) => testApi.createGift(updatedItem).then(()=>navigateTo('/gifts'));

let updateItem = () => testApi.updateGift(updatedItem).then(()=>navigateTo('/gifts'));

let deleteItem = (item) => testApi.deleteGift(item).then(()=>navigateTo('/gifts'));

let handleChange = function(e) {
    let name = e.target.name;
    switch(name){
      case 'category': 
          let value = e.target.value +'';
          let categories = updatedItem['categories'] || [];
          
          if(!e.target.checked){ //Remove
            categories = categories.filter(c => c !== value);
          }else if( categories.indexOf(value)=== -1){
            categories.splice(1,0,value)
          }
          updatedItem['categories'] = categories.sort((a,b)=>a>b);
          break;
      default: updatedItem[name]=e.target.value
    }
}

const GiftDetailsContainer = React.createClass({

  componentDidMount: function() {
    testApi.getCategories();
  },

  render: function() {
    let isUpdate = this.props.routeParams.id !== 'new'
    return (
      <GiftDetails  item={this.props.item} 
                    categoriesList={this.props.categoriesList}
                    createHandler={createItem}
                    updateHandler={updateItem}
                    deleteHandler={deleteItem}
                    handleChange={handleChange}
                    isUpdate={isUpdate}/>
    );
  }
});

const mapStateToProps = function(store) {
  function getGift(){
    updatedItem = store.giftsState.getIn(['gift']) || {categories:[]};
    return updatedItem;
  }
  
  return {
    item: getGift(),
    categoriesList: store.categoriesState.getIn(['categories'])
  };
};

export default connect(mapStateToProps)(GiftDetailsContainer);
