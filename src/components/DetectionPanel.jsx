import React from 'react';

const DetectionPanel = ({ recentAlerts, currentDetections }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg max-w-md">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-yellow-500 mr-2">🔔</span>
          Recent Alerts
        </h2>
        <div className="space-y-2">
          {recentAlerts.map((alert, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded">
              {alert}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-green-500 mr-2">📋</span>
          Current Detections
        </h2>
        <div className="space-y-2">
          {currentDetections.map((detection, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded flex justify-between items-center">
              <span>{detection.label}</span>
              <span className="bg-gray-600 px-2 py-1 rounded">
                {detection.confidence}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetectionPanel;