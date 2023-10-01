import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import 'react-toastify/dist/ReactToastify.css';
import Activate from './Activate';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Project from './Project';
import PasswordReset from './PasswordReset';

import Reset from './Reset';
import Admin from './Admin';
import AddProject from './views/AdminPage/AddProject';
import AdminAdd from './AdminAdd';
import AdminEdit from './AdminEdit';
import LoginSuccess from './LoginSuccess';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/login' exact component={Login} />
        <Route path='/login/success' exact component={LoginSuccess} />
        <Route path='/register' exact component={Register} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/users/password/forget' exact component={PasswordReset} />
        <Route path='/authentication/activate/:token' exact component={Activate} />
        <Route path='/password-reset/:token' exact component={Reset} />
        <Route path='/projects/:id' exact component={Project} />
        
        
        <Route path='/admin' exact component={Admin} />
        <Route path='/admin/add-project' exact component={AdminAdd} />
        <Route path='/admin/edit-project/:id' exact component={AdminEdit} />
      </ Switch>
    </ScrollToTop>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
