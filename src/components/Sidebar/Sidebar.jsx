import React from 'react';

const Sidebar = ({ styles, activeNavItem, handleNavClick }) => {
  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '🏠', color: '#ff6b6b' },
    { id: 'files', name: 'My Files', icon: '📁', color: '#4ecdc4' },
    { id: 'shared', name: 'Shared', icon: '🤝', color: '#f7b731' },
    { id: 'favorites', name: 'Favorites', icon: '⭐', color: '#5f27cd' }
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarSection}>
        <h4 style={styles.sectionTitle}>Navigation</h4>
        {navigationItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavClick(item.name)}
            style={{
              ...styles.navItem,
              ...(activeNavItem === item.name ? styles.navItemActive : {})
            }}
          >
            <span style={{ ...styles.navIcon, background: item.color }}>{item.icon}</span>
            <span style={styles.navText}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
