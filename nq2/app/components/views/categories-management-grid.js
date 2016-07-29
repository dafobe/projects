import React from 'react';
import ManagementItem from './categories-management-item';

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
           </TableRow>
         </TableHeader>
         <TableBody deselectOnClickaway={false}>
           {props.items.map(item => {
             return (
                 <ManagementItem key={item.id}
                 itemId={item.id} 
                 name={item.name} />
             );
           })}
         </TableBody>
       </Table>
     </div>
  );
}
