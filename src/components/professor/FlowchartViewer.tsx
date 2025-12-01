import React from 'react';

interface FlowchartViewerProps {
  flowchartFile: string;
  professorName: string;
}

export const FlowchartViewer: React.FC<FlowchartViewerProps> = ({
  flowchartFile,
  professorName
}) => {
  // Check if we're on localhost
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  // Use draw.io viewer with the flowchart file
  const viewerUrl = `https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=${encodeURIComponent(professorName)}&url=${encodeURIComponent(window.location.origin + flowchartFile)}`;

  // Local file path for download
  const downloadPath = flowchartFile;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-pda-cranberry-600 text-white p-4">
          <h2 className="text-2xl font-bold">📊 Interactive Flowchart</h2>
          <p className="text-pda-parchment-100 text-sm mt-1">
            Click nodes to expand, zoom with mouse wheel, and drag to pan
          </p>
        </div>

        {/* Flowchart Viewer */}
        <div className="relative" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
          {isLocalhost ? (
            <div className="flex flex-col items-center justify-center h-full bg-pda-parchment-50 p-8">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Flowchart Available After Deployment</h3>
              <p className="text-gray-600 text-center max-w-md mb-6">
                Interactive flowcharts use an external viewer that can't access localhost.
                They will work perfectly once the app is deployed to production!
              </p>
              <a
                href={downloadPath}
                download
                className="px-6 py-3 bg-pda-cranberry-600 text-white rounded-lg font-semibold hover:bg-pda-cranberry-700 transition-colors"
              >
                📥 Download Flowchart File
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Open the downloaded .drawio file with <a href="https://app.diagrams.net/" target="_blank" rel="noopener noreferrer" className="text-pda-gold-600 underline">diagrams.net</a>
              </p>
            </div>
          ) : (
            <iframe
              src={viewerUrl}
              className="w-full h-full border-0"
              title={`${professorName} Flowchart`}
              allow="fullscreen"
            />
          )}
        </div>

        {/* Instructions */}
        <div className="bg-pda-parchment-50 p-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="font-semibold">🖱️ Click:</span>
              <span>Select and expand nodes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">🔍 Scroll:</span>
              <span>Zoom in/out</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✋ Drag:</span>
              <span>Pan around</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">📱 Mobile:</span>
              <span>Pinch to zoom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-4 bg-pda-gold-50 border-2 border-pda-gold-300 rounded-lg p-4">
        <h3 className="font-bold text-pda-gold-800 mb-2">💡 Study Tips</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Use the flowchart to see how concepts connect and flow</li>
          <li>• Zoom in to focus on specific topics or drug classes</li>
          <li>• Follow the arrows to understand sequential processes</li>
          <li>• Color coding indicates different categories or importance levels</li>
        </ul>
      </div>
    </div>
  );
};
