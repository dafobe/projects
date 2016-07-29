import React from 'react';
import ManagementItem from './management-item';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function(props) {
  return (
     <div className="grid">
       <Table   selectable={true} 
               onRowSelection={props.selectItem}>
         <TableHeader  displaySelectAll={false}>
           <TableRow>
             <TableHeaderColumn>ID</TableHeaderColumn>
             <TableHeaderColumn>Name</TableHeaderColumn>
             <TableHeaderColumn>Price</TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody deselectOnClickaway={false}>
           {props.items.map(item => {
             return (
                 <ManagementItem key={item.id}
                 itemId={item.id} 
                 name={item.name} 
                 price={item.price}
                 deleteItem={props.deleteItem(item)}/>
             );
           })}
         </TableBody>
       </Table>
       <CardActions>
         <FlatButton label="New"  onClick={props.createItem}/>
         <FlatButton label="Update"  onClick={props.updateItem}/>
       </CardActions>
     </div>
  );
}
