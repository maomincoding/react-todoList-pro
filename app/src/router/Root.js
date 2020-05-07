import React from 'react';
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter,Route} from 'react-router-dom';
import RouterOne from '../views/Router/RouterOne'
import RouterTwo from '../views/Router/RouterTwo'
import Todolist from '../views/React-redux/todolist'

function Root() {
  return (
      <Provider store ={store}>  
          <BrowserRouter>
              <div>
                <Route exact={true} path="/" component={Todolist}></Route>
                <Route exact={true} path="/one" component={RouterOne}></Route>
                <Route exact={true} path="/two/:id" component={RouterTwo}></Route>
              </div>
          </BrowserRouter>
       </Provider>  
  );
}

export default Root;

// Provider 俗名提供器