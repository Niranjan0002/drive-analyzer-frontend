// components/Header/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = ({ styles, searchQuery, setSearchQuery, toggleSidebar, activeNavItem }) => {
  const [userInfo, setUserInfo] = useState({ email: '', name: '', picture: '' });
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo({
          email: data.email || '',
          name: data.name || '',
          picture: data.picture || ''
        });
      })
      .catch(() => setUserInfo({ email: '', name: '', picture: '' }));
  }, []);

  const handleLogout = () => setShowConfirm(true);

  const confirmLogout = () => {
    setShowConfirm(false);
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/logout`;
  };

  const cancelLogout = () => setShowConfirm(false);

  // 🎯 Dynamic placeholder text
  const getPlaceholder = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return 'Search your recent files...';
      case 'My Files':
        return 'Search all files...';
      case 'Favorites':
        return 'Search your favorites...';
      default:
        return 'Search your universe of files...';
    }
  };

  return (
    <div style={styles.header}>
      <button onClick={toggleSidebar} style={styles.iconButton}>☰</button>
      <h1 style={styles.headerTitle}>Google Drive Analyzer</h1>

      <input
        type="text"
        placeholder={getPlaceholder()}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.headerIcons}>
        {userInfo.name && (
          <span style={{ color: 'white', fontWeight: 500, marginRight: '10px' }}>
            {userInfo.name}
          </span>
        )}
        {userInfo.picture && (
          <img
            src={userInfo.picture}
            alt="Profile"
            title={userInfo.email}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '10px'
            }}
          />
        )}
        <button onClick={handleLogout} style={styles.logoutButton}>🚪 Logout</button>
      </div>

      {showConfirm && (
        <div style={styles.confirmOverlay}>
          <div style={styles.confirmBox}>
            <p style={{ marginBottom: '16px' }}>Are you sure you want to log out?</p>
            <button onClick={confirmLogout} style={styles.confirmButton}>Yes</button>
            <button onClick={cancelLogout} style={styles.cancelButton}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
