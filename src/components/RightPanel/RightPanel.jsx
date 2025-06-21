// components/RightPanel/RightPanel.jsx
import React from 'react';
import ActivityTimeline from './ActivityTimeline';
import StorageAnalytics from './StorageAnalytics';
import QuickUpload from './QuickUpload';

const RightPanel = ({ styles, storageData, handleDrop, handleDragOver, handleFileUpload, uploadStatus }) => {
  const activityTimeline = [
    { id: 1, action: 'File uploaded', file: 'Marketing Strategy.pptx', time: '2 hours ago', color: 'linear-gradient(135deg, #f87171, #fbbf24)' },
    { id: 2, action: 'Folder shared', file: 'Design Assets with team', time: 'Yesterday', color: 'linear-gradient(135deg, #60a5fa, #0891b2)' },
    { id: 3, action: 'File modified', file: 'Q4 Report.xlsx', time: '2 days ago', color: 'linear-gradient(135deg, #4ade80, #059669)' }
  ];

  return (
    <div style={styles.rightPanel}>
      <ActivityTimeline styles={styles} timeline={activityTimeline} />
      <StorageAnalytics styles={styles} storageData={storageData} />
      <QuickUpload
        styles={styles}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleFileUpload={handleFileUpload}
        uploadStatus={uploadStatus}
      />
    </div>
  );
};

export default RightPanel;
