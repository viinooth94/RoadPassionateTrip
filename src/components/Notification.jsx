import { useEffect } from 'react';
import '../styles/Notification.css';

export default function Notification({ message, type, onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span className="notification-message">{message}</span>
        {onClose && (
          <button className="notification-close" onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}
