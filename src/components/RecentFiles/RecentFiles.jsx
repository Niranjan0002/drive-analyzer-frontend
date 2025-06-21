import React from 'react';
import FileCard from '../FileCard/FileCard';

const RecentFiles = ({ recentFiles, styles, setFiles, searchQuery = '' }) => {
  const handleDownload = (fileId) => {
    window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
  };

  const handleView = (fileId) => {
    window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
  };

  const handleDelete = (fileId) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/delete/${fileId}`, {
        method: 'DELETE',
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            alert('File deleted successfully');
            setFiles(prev => prev.filter(file => file.id !== fileId));
          } else alert('Failed to delete file');
        })
        .catch(() => alert('Error while deleting file'));
    }
  };

  const topRecentFiles = recentFiles
    .filter(file => file.name?.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 12);

  return (
    <div style={styles.recentSection}>
      <h2 style={styles.sectionTitle}>Recent Files</h2>
      <div style={styles.recentGrid}>
        {topRecentFiles.length > 0 ? (
          topRecentFiles.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              styles={styles}
              onDelete={handleDelete}
              onDownload={handleDownload}
              onView={handleView}
              query={searchQuery}
            />
          ))
        ) : (
          <p style={{ color: 'white' }}>No recent files found.</p>
        )}
      </div>
    </div>
  );
};

export default RecentFiles;
