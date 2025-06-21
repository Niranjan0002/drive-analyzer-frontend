// components/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/login`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>🚀 Drive Analyzer</h1>
        <p style={styles.tagline}>Visualize and manage your Google Drive smartly.</p>
        <button style={styles.loginButton} onClick={handleLogin}>
          <span style={styles.googleIcon}>🔒</span> Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    color: 'white',
    padding: '20px'
  },
  box: {
    background: '#1f2937',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  tagline: {
    fontSize: '1rem',
    marginBottom: '24px'
  },
  loginButton: {
    background: 'linear-gradient(to right, #f97316, #f43f5e)',
    padding: '12px 24px',
    borderRadius: '999px',
    color: 'white',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s'
  },
  googleIcon: {
    marginRight: '8px'
  }
};

export default LoginPage;
