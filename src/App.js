import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GoogleDriveAnalyzer from './components/GoogleDriveAnalyzer';
import LoginPage from './components/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then((data) => {
        setIsAuthenticated(true);
        setUser(data);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) return null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated
              ? <GoogleDriveAnalyzer user={user} />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
