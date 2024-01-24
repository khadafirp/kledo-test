import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom"

import "./styles/halaman-login.css"
import "./styles/halaman-profile.css"
import "./styles/halaman-admin-dashboard.css"
import "./styles/halaman-shipping-comps.css"
import "./styles/halaman-tambah-shipping-comps.css"
import "./styles/halaman-edit-shipping-comps.css"

import "./styles/tailwind/style.css"

import LoginViews from './views/LoginViews';
import ProfileView from './views/ProfileView';
import DashboardView from './views/DashboardView';
import ShippingComps from './views/ShippingComps';
import TambahShippingView from './views/TambahShippingView';
import EditShippingView from './views/EditShippingView';
import { Provider } from 'react-redux';
import stores from './management/Stores';
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import history from "./management/histories"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={stores}>
    <Router history={history}>
      <Routes>
        <Route path='/' exact element={<LoginViews/>}/>
        <Route path='/profil' element={<ProfileView/>}/>
        <Route path='/admin-dashboard' element={<DashboardView/>}/>
        <Route path='/admin-shipping-comps' element={<ShippingComps/>} />
        <Route path='/admin-tambah-shipping' element={<TambahShippingView/>} />
        <Route path='/admin-edit-shipping' element={<EditShippingView/>} />
      </Routes>
    </Router>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
