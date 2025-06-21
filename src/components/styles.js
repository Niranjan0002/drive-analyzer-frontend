// styles/styles.js
export const getResponsiveStyles = (width = window.innerWidth) => {
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  return {
    container: {
      fontFamily: 'sans-serif',
      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
      padding: isMobile ? '8px' : '16px',
      minHeight: '100vh',
      boxSizing: 'border-box'
    },
    mainWrapper: {
      background: '#111827',
      borderRadius: isMobile ? '16px' : '24px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(to right, #f97316, #f43f5e)',
      padding: isMobile ? '12px 16px' : '12px 24px',
      color: '#fff',
      flexWrap: isMobile ? 'wrap' : 'nowrap'
    },
    iconButton: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: isMobile ? '18px' : '20px',
      cursor: 'pointer',
      marginRight: isMobile ? '8px' : '16px',
      padding: '8px',
      borderRadius: '4px',
      minWidth: '36px',
      minHeight: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)'
      },
      '&:active': {
        backgroundColor: 'rgba(255,255,255,0.2)'
      }
    },
    headerTitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: 'bold',
      whiteSpace: 'nowrap'
    },
    searchInput: {
      padding: isMobile ? '6px 12px' : '8px 16px',
      borderRadius: '20px',
      border: 'none',
      background: 'rgba(255,255,255,0.2)',
      color: 'white',
      flex: '1',
      marginLeft: isMobile ? '8px' : '20px',
      fontSize: isMobile ? '14px' : '16px',
      minWidth: isMobile ? '120px' : '200px',
      transition: 'background-color 0.2s ease',
      '&::placeholder': {
        color: 'rgba(255,255,255,0.7)'
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: 'rgba(255,255,255,0.3)'
      }
    },
    headerIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px'
    },
    profileIcon: {
      background: '#fff',
      borderRadius: '50%',
      width: isMobile ? '28px' : '32px',
      height: isMobile ? '28px' : '32px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    },
    mainContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'flex-start',
      gap: isMobile ? '12px' : '16px',
      padding: isMobile ? '12px' : '16px'
    },
    sidebar: {
      background: '#1f2937',
      padding: isMobile ? '16px' : '24px',
      width: isMobile ? '100%' : (isTablet ? '200px' : '220px'),
      borderRadius: isMobile ? '12px' : '0px',
      order: isMobile ? 2 : 1
    },
    sidebarSection: {
      marginBottom: isMobile ? '16px' : '24px'
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '8px' : '12px',
      color: '#e5e7eb'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '10px 12px' : '8px 12px',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#d1d5db',
      marginBottom: isMobile ? '4px' : '8px',
      minHeight: '40px',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#374151',
        color: '#fff'
      }
    },
    navItemActive: {
      background: '#374151',
      color: '#fff'
    },
    navIcon: {
      marginRight: '8px',
      padding: '4px',
      borderRadius: '50%',
      color: '#fff',
      fontSize: isMobile ? '14px' : '16px'
    },
    navText: {
      fontSize: isMobile ? '0.9rem' : '0.95rem'
    },
    contentArea: {
      flex: 1,
      padding: isMobile ? '16px' : '24px',
      order: isMobile ? 1 : 2
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'),
      gap: isMobile ? '12px' : '16px'
    },
    statCard: {
      padding: isMobile ? '14px' : '16px',
      borderRadius: isMobile ? '12px' : '16px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: isMobile ? '80px' : '100px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }
    },
    statCardDecoration: {
      height: '4px',
      borderRadius: '2px',
      background: 'white',
      marginBottom: '8px'
    },
    statContent: {
      textAlign: 'left'
    },
    statNumber: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2'
    },
    statLabel: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      opacity: 0.9
    },
    recentSection: {
      marginTop: isMobile ? '24px' : '32px'
    },
    recentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
      gap: isMobile ? '12px' : '16px'
    },
    recentFileCard: {
      padding: isMobile ? '14px' : '16px',
      borderRadius: isMobile ? '10px' : '12px',
      color: 'white',
      minHeight: isMobile ? '80px' : '100px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }
    },
    recentFileText: {
      textAlign: 'left'
    },
    fileName: {
      fontWeight: 'bold',
      fontSize: isMobile ? '0.9rem' : '1rem',
      lineHeight: '1.3',
      marginBottom: '4px'
    },
    fileMeta: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      opacity: 0.8
    },
    fileTime: {
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      opacity: 0.7,
      marginTop: '4px'
    },
    rightPanel: {
      background: '#1f2937',
      width: isMobile ? '100%' : (isTablet ? '260px' : '300px'),
      padding: isMobile ? '16px' : '24px',
      marginLeft: isMobile ? '0' : '16px',
      borderRadius: isMobile ? '12px' : '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content',
      gap: isMobile ? '20px' : '28px',
      order: isMobile ? 3 : 3
    },
    timelineSection: {
      order: 1
    },
    timelineList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '16px'
    },
    timelineItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: isMobile ? '10px' : '12px',
      padding: isMobile ? '6px 0' : '8px 0'
    },
    timelineDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      marginTop: '6px',
      flexShrink: 0
    },
    timelineContent: {
      flex: 1,
      minWidth: 0
    },
    timelineAction: {
      fontWeight: '600',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      color: '#e5e7eb',
      marginBottom: '2px',
      lineHeight: '1.3'
    },
    timelineFile: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#9ca3af',
      marginBottom: '2px',
      lineHeight: '1.3',
      wordBreak: 'break-word'
    },
    timelineTime: {
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      color: '#6b7280',
      lineHeight: '1.3'
    },
    storageSection: {
      order: 2
    },
    storageItem: {
      marginBottom: isMobile ? '12px' : '16px'
    },
    storageLabel: {
      fontWeight: '600',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      marginBottom: isMobile ? '6px' : '8px',
      color: '#e5e7eb'
    },
    storageDetails: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px'
    },
    storageBarWrapper: {
      flex: 1,
      height: isMobile ? '6px' : '8px',
      background: '#374151',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    storageBar: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    },
    storageSize: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#9ca3af',
      fontWeight: '500',
      minWidth: 'fit-content'
    },
    uploadSection: {
      order: 3
    },
    uploadBox: {
      border: '2px dashed #4b5563',
      padding: isMobile ? '20px 12px' : '24px 16px',
      textAlign: 'center',
      borderRadius: isMobile ? '10px' : '12px',
      cursor: 'pointer',
      color: '#9ca3af',
      marginBottom: isMobile ? '8px' : '12px',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(75, 85, 99, 0.1)',
      minHeight: isMobile ? '80px' : '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        borderColor: '#6b7280',
        backgroundColor: 'rgba(75, 85, 99, 0.2)',
        color: '#d1d5db'
      },
      '&:active': {
        transform: 'scale(0.98)'
      }
    },
    uploadIcon: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      marginBottom: isMobile ? '6px' : '8px',
      display: 'block'
    },
    uploadText: {
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      lineHeight: '1.4'
    },
    fileInput: {
      display: 'none'
    },
    uploadStatus: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#10b981',
      textAlign: 'center',
      fontWeight: '500'
    },
    logoutButton: {
      marginLeft: '16px',
      background: '#ef4444',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontWeight: '500',
      '&:hover': {
        backgroundColor: '#dc2626',
        transform: 'translateY(-1px)'
      },
      '&:active': {
        transform: 'translateY(0)'
      }
    },
    confirmOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      backdropFilter: 'blur(4px)'
    },
    confirmBox: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '24px',
      borderRadius: '12px',
      textAlign: 'center',
      minWidth: '300px',
      maxWidth: isMobile ? '90vw' : '400px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      border: '1px solid #374151'
    },
    confirmButton: {
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      marginRight: '12px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#dc2626'
      }
    },
    cancelButton: {
      backgroundColor: '#4b5563',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#6b7280'
      }
    },
    fileList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '12px'
    },
    fileItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#374151',
      padding: '12px 16px',
      borderRadius: '8px',
      marginBottom: '8px',
      color: '#fff',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#4b5563'
      }
    },
    fileItemInfo: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0
    },
    fileItemName: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '500',
      marginBottom: '2px',
      wordBreak: 'break-word'
    },
    fileItemMeta: {
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      color: '#9ca3af'
    },
    fileSize: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      color: '#d1d5db',
      fontWeight: '500',
      marginLeft: '12px',
      flexShrink: 0
    }
  };
};