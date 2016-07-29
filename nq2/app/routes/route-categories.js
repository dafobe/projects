import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import ManagementLayout from '../components/layouts/management-layout';
import FormLayout from '../components/layouts/form-layout';

// Components
import ManagementContainer from '../components/containers/categories-management-container';
const CategoriesRoute = (
    <Route path="/categories" type="categories" component={ManagementLayout}>
      <IndexRoute type="categories" component={ManagementContainer} />
    </Route>
);

export default CategoriesRoute;