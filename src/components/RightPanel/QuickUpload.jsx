// components/RightPanel/QuickUpload.jsx
import React from 'react';

const QuickUpload = ({ styles, handleDrop, handleDragOver, handleFileUpload, uploadStatus }) => {
  return (
    <div style={styles.uploadSection}>
      <h4 style={styles.sectionTitle}>Quick Upload</h4>
      <form onSubmit={handleFileUpload}>
        <label
          htmlFor="fileUpload"
          style={styles.uploadBox}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div style={styles.uploadIcon}>📁</div>
          <div style={styles.uploadText}>
            Drop files here<br />or click to browse
          </div>
          <input
            type="file"
            id="fileUpload"
            style={styles.fileInput}
            onChange={handleFileUpload}
          />
        </label>
        {uploadStatus && <div style={styles.uploadStatus}>{uploadStatus}</div>}
      </form>
    </div>
  );
};

export default QuickUpload;
