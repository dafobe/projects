import React from 'react';
import { browserHistory } from 'react-router';

import {Card, CardHeader} from 'material-ui/Card';

const ManagementLayout = React.createClass({
  navigateTo: function(action){
    browserHistory.push('/'+this.props.route.type+'/'+action)
  },
  
  render: function() {
    return (
      <section>
        <Card>
          <CardHeader
            title={this.props.route.type.toUpperCase()}
            subtitle="NiceQuest"
          />
          {this.props.children}
        </Card>
      </section>
    );
  }
});

export default ManagementLayout;
