import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/App';
import '@/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const renderRoot = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

if (process.env.NODE_ENV === 'development') {
  import('@/mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      renderRoot();
    });
} else {
  renderRoot();
}
