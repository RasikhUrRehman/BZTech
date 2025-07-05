import React from 'react';

// Helper component for testing the welcome popup during development
const PopupTestHelper: React.FC = () => {
  const resetPopupState = () => {
    localStorage.removeItem('welcomePopupSeen');
    localStorage.removeItem('welcomePopupMaybeLater');
    window.location.reload();
  };

  // Only show in development mode
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={resetPopupState}
        className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded shadow"
        title="Reset popup state for testing"
      >
        Reset Popup
      </button>
    </div>
  );
};

export default PopupTestHelper;
