import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <Card>
          <CardHeader
            title="NetQuest"
          />
          <CardTitle title="Test 2" subtitle="David Fonollosa" />
          <CardText>
            <p>
              The header and footer content is up to you, any "lorem ipsum" kind of text will make the trick.
            </p>
            <p>
              The app is like a back­office application which should allow the user to manage a catalog of 
              gifts. Gifts are grouped into categories. A gift has a name and a price, and a category has just a 
              name.
            </p>
            <p>
              Through the menu and the content sub­views, we need to offer the access to the following 
              features: 
            </p>
            <ul>
              <li>Create/Read/Update/Delete category</li>
              <li>Create/Read/Update/Delete gift</li>
            </ul>
            When creating or updating a gift, it can be included in one or more categories.
            
            To focus on the front­end code, there's no need to store the data in a persistent manner.
            If the page is refreshed is ok if everything is lost. On the other hand, since a real application would 
            be making requests to the server side, you should simulate those calls (for instance, it's ok just 
            by making actions which would require interaction with the server to wait for some seconds 
            before completing). The important thing is that only the dynamic data​ should take some seconds to be rendered, ​not the whole page or section
          </CardText>
        </Card>
      </div>
    );
  }
});

export default Home;
