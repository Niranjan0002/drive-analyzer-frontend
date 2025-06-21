// components/RightPanel/ActivityTimeline.jsx
import React from 'react';

const ActivityTimeline = ({ styles, timeline }) => {
  return (
    <div style={styles.timelineSection}>
      <h4 style={styles.sectionTitle}>Activity Timeline</h4>
      <div style={styles.timelineList}>
        {timeline.map((item) => (
          <div key={item.id} style={styles.timelineItem}>
            <div style={{ ...styles.timelineDot, background: item.color }}></div>
            <div>
              <div style={styles.timelineAction}>{item.action}</div>
              <div style={styles.timelineFile}>{item.file}</div>
              <div style={styles.timelineTime}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
