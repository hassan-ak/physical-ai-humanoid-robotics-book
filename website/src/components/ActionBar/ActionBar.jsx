import React, { useState } from 'react';
import './ActionBar.module.css';

const ActionBar = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleUrduTranslation = async () => {
    setIsProcessing(true);
    setStatusMessage('Initializing Urdu translation...');

    try {
      // Placeholder for actual Urdu translation logic
      // This would connect to the Urdu-Linguist agent in a real implementation
      setStatusMessage('Translation in progress...');

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatusMessage('Translation completed!');
    } catch (error) {
      setStatusMessage('Translation failed: ' + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="action-bar-container">
      <div className="action-bar-content">
        <button
          onClick={handleUrduTranslation}
          disabled={isProcessing}
          className={`action-btn ${isProcessing ? 'processing' : ''}`}
        >
          {isProcessing ? 'Translating to Urdu...' : 'Translate to Urdu'}
        </button>

        <div className="status-indicator">
          {statusMessage && <span className="status-text">{statusMessage}</span>}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;