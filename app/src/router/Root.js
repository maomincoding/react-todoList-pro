import React from 'react';
import RouterOne from '../views/Router/RouterOne'
import RouterTwo from '../views/Router/RouterTwo'
import {BrowserRouter,Route} from 'react-router-dom';

function Root() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact={true} path="/" component={RouterOne}></Route>
         <Route exact={true} path="/two/:id" component={RouterTwo}></Route>
       </BrowserRouter>
    </div>
  );
}

export default Root;