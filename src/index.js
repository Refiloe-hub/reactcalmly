import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './Landingpage'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index /> {/* Your landing page component */}
  </React.StrictMode>
);