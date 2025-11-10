import React from 'react';
import './TechnologyCard.css';

function TechnologyCard({ id, title, description, status, onStatusChange }) {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      case 'not-started':
        return '⏳';
      default:
        return '❓';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Изучено';
      case 'in-progress':
        return 'В процессе';
      case 'not-started':
        return 'Не начато';
      default:
        return 'Неизвестно';
    }
  };

  const handleStatusChange = (newStatus) => {
    onStatusChange(id, newStatus);
  };

  return (
    <div className={`technology-card ${status}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="status-icon">{getStatusIcon()}</span>
      </div>
      
      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>
      
      <div className="card-footer">
        <span className={`status-badge ${status}`}>
          {getStatusText()}
        </span>
        
        <div className="status-controls">
          <button 
            className={`status-btn ${status === 'not-started' ? 'active' : ''}`}
            onClick={() => handleStatusChange('not-started')}
          >
            Не начато
          </button>
          <button 
            className={`status-btn ${status === 'in-progress' ? 'active' : ''}`}
            onClick={() => handleStatusChange('in-progress')}
          >
            В процессе
          </button>
          <button 
            className={`status-btn ${status === 'completed' ? 'active' : ''}`}
            onClick={() => handleStatusChange('completed')}
          >
            Изучено
          </button>
        </div>
      </div>
      
      <div className="card-glow"></div>
    </div>
  );
}

export default TechnologyCard;