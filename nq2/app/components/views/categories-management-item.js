import React from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

const ManagementItem = React.createClass({
  render: function(props) {
    const { itemId,name, ...otherProps } = this.props;
    return (
        
        <TableRow { ...otherProps } >
        {otherProps.children[0] /* checkbox passed down from Table-Body*/}
          <TableRowColumn>{itemId}</TableRowColumn>
          <TableRowColumn>{name}</TableRowColumn>
        </TableRow>
    );
  }
});

export default ManagementItem;
