import React from 'react';
import { Example } from '../Main/CommonHeader/CommonHeader.js';
import { Page1 } from '../Main/Page1/overview';
import { Content} from 'carbon-components-react';
import './_example.scss';
import { Switch, Route } from 'react-router-dom';
import { TableCreat } from '../Driver/OKR'
import { OKR2 } from '../Driver/OKR2'
import { Imp } from '../Driver/Improve.js';
import { lrn } from '../Driver/Learning.js';
import { rev } from '../Driver/Review.js';
import { com } from '../Driver/Comments.js';
import { read } from '../Driver/Read.js';
export const App = () => {
  
  return (
    <>
      <Example />
      <Content className="content-area">
      <Switch>
          <Route exact path="/okr" component={TableCreat} />
          <Route exact path="/okr2" component={OKR2} />
          <Route path="/page1" component={Page1} />
          <Route path="/imp" component={Imp} />
          <Route exact path="/learn" component={lrn} />
          <Route exact path="/review" component={rev} />
          <Route path="/comment" component={com} />
          <Route path="/read" component={read} />
        </Switch>
      </Content>

    
    </>
  );
};
