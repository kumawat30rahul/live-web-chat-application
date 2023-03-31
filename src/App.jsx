import React, { useState, useContext, useEffect, createContext } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Component/Authentication/Auth';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Component/Firbase/firbase';
import { AuthContext } from './Component/Context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    // Render a loading spinner or message
    return <div>Loading...</div>;
  }

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/authentication" />;
    }
    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="/authentication" element={<Auth />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
