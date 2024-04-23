import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ClientGroupsSchedule } from './components/ClientGroupsSchedule.tsx';
import Requisites from './components/Requisites/Requisites.tsx';
import groups from './data/clientGroupsSchedule.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ClientGroupsSchedule groups={groups} />} />
          <Route path="payment" element={<Requisites/>} />
          <Route path="schedule" element={
            <ClientGroupsSchedule groups={groups} />
          } />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

