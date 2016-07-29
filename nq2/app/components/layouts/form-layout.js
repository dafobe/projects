import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const FormLayout = React.createClass({
  render: function() {
    return (
        <Paper>
          {this.props.children}
        </Paper>
    );
  }
});

export default FormLayout;
