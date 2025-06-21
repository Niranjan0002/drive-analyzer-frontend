// components/StatsCards/StatsCards.jsx
import React from 'react';

const StatsCards = ({ styles }) => {
  const statsData = [
    { number: '1,247', label: 'Total Files', gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)' },
    { number: '8.4 GB', label: 'Used Space', gradient: 'linear-gradient(135deg, #f43f5e, #dc2626)' },
    { number: '23', label: 'Shared Items', gradient: 'linear-gradient(135deg, #60a5fa, #0891b2)' },
    { number: '156', label: 'Recent Files', gradient: 'linear-gradient(135deg, #4ade80, #059669)' }
  ];

  return (
    <div style={styles.statsGrid}>
      {statsData.map((stat, index) => (
        <div key={index} style={{ ...styles.statCard, background: stat.gradient }}>
          <div style={styles.statCardDecoration}></div>
          <div style={styles.statContent}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
