import React, { useState, useEffect } from 'react';
import FileCard from '../FileCard/FileCard';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const FavoriteFiles = ({ files, styles, setFiles, searchQuery = '' }) => {
  const [currentFolderId, setCurrentFolderId] = useState('root');
  const [path, setPath] = useState([{ id: 'root', name: 'Favourites' }]);
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

  return (
    <div style={styles.recentSection}>
      <h2 style={{ color: 'white', marginBottom: '8px' }}>⭐ Favourites</h2>
      <Breadcrumbs path={path} onNavigate={handleNavigate} styles={styles} />
      <div style={styles.recentGrid}>
        {folderFiles.length > 0 ? folderFiles.map((file) => (
          <FileCard
            key={file.id}
            file={file}
            styles={styles}
            onDelete={handleDelete}
            onDownload={handleDownload}
            onView={handleView}
            onOpenFolder={file.mimeType === 'application/vnd.google-apps.folder' ? () => openFolder(file) : null}
            query={searchQuery}
          />
        )) : (
          <p style={{ color: 'white', marginTop: '12px' }}>No favourite files found.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteFiles;
