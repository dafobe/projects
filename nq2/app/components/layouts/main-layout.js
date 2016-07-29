import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const MainLayout = React.createClass({
  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  },
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  },
  render: function() {
    return (
      <div className="layout-main">
        <header className="primary-header app-logo">
          Lorem Ipsum ....
        </header>
        <aside className="layout-aside">
          <Paper>
            <Menu>
              <MenuItem primaryText="Home"  containerElement={<Link to="/" />} />
              <MenuItem primaryText="Gifts" containerElement={<Link to="/gifts" />} />
              <MenuItem primaryText="Categories" containerElement={<Link to="/categories" />} />
            </Menu>
          </Paper>
        </aside>
        <section className="layout-main">
          {this.props.children}
        </section>
        <footer className="primary-footer">
          Lorem Ipsum ...
        </footer>
      </div>
    );
  }
});

export default MainLayout;
