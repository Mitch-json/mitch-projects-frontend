// ✅ React 18-compatible index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

// ✅ Get root element
const container = document.getElementById('root');
const root = createRoot(container);

// ✅ Render app using new React 18 API
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users/password/forget" element={<PasswordReset />} />
          <Route path="/authentication/activate/:token" element={<Activate />} />
          <Route path="/password-reset/:token" element={<Reset />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-project" element={<AdminAdd />} />
          <Route path="/admin/edit-project/:id" element={<AdminEdit />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// ✅ Unregister service worker (or switch to register() if you want PWA support)
serviceWorker.unregister();
