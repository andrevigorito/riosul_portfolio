import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views
import Detalhe from './views/Detalhe';
import Login from './views/Login';
import ProductContainer from './views/ProductContainer';
import Dashboard from './views/Dashboard';
import Import from './views/Import';
import Alertas from './views/Alertas';
import Operacional from './views/Operacional';

// Components
import Menu from './views/components/Menu';
import Header from './views/components/Header';

// import
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={}/>
      </Switch>
    </BrowserRouter>
  );
}
