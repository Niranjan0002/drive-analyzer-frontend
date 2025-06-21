import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import FileCard from '../FileCard/FileCard';

const MyFiles = ({ files, styles, searchQuery = '' }) => {
  const [currentFolderId, setCurrentFolderId] = useState('root');
  const [path, setPath] = useState([{ id: 'root', name: 'My Drive' }]);
  const [folderFiles, setFolderFiles] = useState([]);

  useEffect(() => {
    if (!files) return;
    const filtered = files.filter(file => {
      const inCurrentFolder = currentFolderId === 'root'
        ? !file.parents || file.parents.includes('root')
        : file.parents?.includes(currentFolderId);
      const matchesQuery = file.name?.toLowerCase().includes(searchQuery.toLowerCase());
      return inCurrentFolder && matchesQuery;
    });
    setFolderFiles(filtered);
  }, [files, currentFolderId, searchQuery]);

  const handleNavigate = (index) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
    setCurrentFolderId(newPath[newPath.length - 1].id);
  };

  const openFolder = (folder) => {
    setCurrentFolderId(folder.id);
    setPath(prev => [...prev, { id: folder.id, name: folder.name }]);
  };

  const handleDownload = (fileId) => window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
  const handleView = (fileId) => window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');

  const handleDelete = (fileId) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      fetch(`http://localhost:5000/delete/${fileId}`, {
        method: 'DELETE',
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            alert('File deleted successfully');
            setFolderFiles(prev => prev.filter(f => f.id !== fileId));
          } else alert('Failed to delete file');
        })
        .catch(() => alert('Error while deleting file'));
    }
  };

  return (
    <div style={styles.recentSection}>
      <h2 style={{ color: 'white', marginBottom: '8px' }}>📁 My Files</h2>
      <Breadcrumbs path={path} onNavigate={handleNavigate} styles={styles} />
      <div style={styles.recentGrid}>
        {folderFiles.length ? folderFiles.map((file) => (
          <FileCard
            key={file.id}
            file={file}
            styles={styles}
            onDelete={handleDelete}
            onDownload={handleDownload}
            onView={handleView}
            onOpenFolder={openFolder}
            query={searchQuery}
          />
        )) : (
          <p style={{ color: 'white' }}>No files found.</p>
        )}
      </div>
    </div>
  );
};

export default MyFiles;
