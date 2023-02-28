import React from 'react';
import styled from 'styled-components';
import Routers from './Routers';

const Layout = styled('main')`
  border: 3px black solid;
  max-width: 75rem;
  min-width: 23.4375rem;
  height: 50rem;
  margin: 0 auto;
  min-width: 23.4375rem;
`;

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Routers />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
