import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthContext, AuthProvider } from '../services/auth';
import Login from './components/Login';
import Logout from './components/Logout';
import SBOMVisualizer from './components/SBOMVisualizer';

import '../styles/App.css';

const App: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  }, [currentUser]);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/sbom" component={SBOMVisualizer} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;