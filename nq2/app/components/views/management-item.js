import React from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

const ManagementItem = React.createClass({
  render: function(props) {
    const { itemId,name,price,deleteItem, ...otherProps } = this.props;
    return (
        
        <TableRow { ...otherProps } >
        {otherProps.children[0] /* checkbox passed down from Table-Body*/}
          <TableRowColumn>{itemId}</TableRowColumn>
          <TableRowColumn>{name}</TableRowColumn>
          <TableRowColumn>{price}</TableRowColumn>
        </TableRow>
//        <li>
//          {this.props.itemId} - {this.props.name} - {this.props.price}
//          <p onClick={this.props.deleteItem}>Delete</p>
//          <p onClick={this.props.editItem}>Edit</p>
//        </li>
    );
  }
});

export default ManagementItem;
