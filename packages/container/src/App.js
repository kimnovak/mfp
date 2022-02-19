import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
