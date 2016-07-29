import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import ManagementLayout from '../components/layouts/management-layout';
import FormLayout from '../components/layouts/form-layout';

// Components
import ManagementContainer from '../components/containers/management-container';
import GiftDetailsContainer from '../components/containers/gift-details-container';
const GiftsRoute = (
    <Route path="/gifts" type="gifts" component={ManagementLayout}>
      <IndexRoute type="gifts" component={ManagementContainer} />
      <Route component={FormLayout}>
        <Route path=":id" component={GiftDetailsContainer}/>
        <Route path="new" component={GiftDetailsContainer}/>
      </Route>
    </Route>
);

export default GiftsRoute;