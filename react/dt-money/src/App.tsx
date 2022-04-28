import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import GlobalStyle  from './styles/global';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
