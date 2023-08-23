import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layout/App.jsx';
import './index.scss';
import './extensions.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Directions/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);