// components/RightPanel/StorageAnalytics.jsx
import React from 'react';

const StorageAnalytics = ({ styles, storageData }) => {
  return (
    <div style={styles.storageSection}>
      <h4 style={styles.sectionTitle}>Storage Analytics</h4>
      {storageData.map((item, index) => (
        <div key={index} style={styles.storageItem}>
          <div style={styles.storageLabel}>{item.type}</div>
          <div style={styles.storageDetails}>
            <div style={styles.storageBarWrapper}>
              <div
                style={{
                  ...styles.storageBar,
                  width: `${item.percentage}%`,
                  background: item.color
                }}
              ></div>
            </div>
            <div style={styles.storageSize}>{item.size}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorageAnalytics;
