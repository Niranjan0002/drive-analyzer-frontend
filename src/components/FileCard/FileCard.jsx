// components/FileCard/FileCard.jsx
import React from 'react';

const formatSize = (bytes) => {
  if (!bytes) return 'Unknown size';
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
};

const FileCard = ({ file, styles, onDelete, onDownload, onView, onOpenFolder, query = '' }) => {
  const isFolder = file.mimeType === 'application/vnd.google-apps.folder';

  const highlightMatch = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase()
        ? <mark key={i} style={{ backgroundColor: 'yellow', color: 'black' }}>{part}</mark>
        : part
    );
  };

  return (
    <div style={{ ...styles.recentFileCard, background: file.gradient || '#1f2937' }}>
      <div style={styles.recentFileText}>
        <div
          style={{ ...styles.fileName, cursor: isFolder ? 'pointer' : 'default' }}
          title={file.name}
          onClick={() => isFolder && onOpenFolder && onOpenFolder(file)}
        >
          {isFolder ? '📁' : '📄'} {highlightMatch(file.name)}
        </div>

        <div style={styles.fileMeta}>
          {file.mimeType}
          {file.size && !isFolder && <> • {formatSize(file.size)}</>}
        </div>

        <div style={styles.fileTime}>
          {file.modified
            ? file.modified
            : new Date(file.modifiedTime).toLocaleString()}
        </div>

        {!isFolder && (
          <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
            <button onClick={() => onView(file.id)} style={actionBtnStyle}>👁 View</button>
            <button onClick={() => onDownload(file.id)} style={actionBtnStyle}>⬇ Download</button>
            <button onClick={() => onDelete(file.id)} style={{ ...actionBtnStyle, background: '#ef4444' }}>🗑 Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

const actionBtnStyle = {
  padding: '6px 12px',
  border: 'none',
  borderRadius: '6px',
  background: '#374151',
  color: 'white',
  cursor: 'pointer',
  fontSize: '0.85rem'
};

export default FileCard;
