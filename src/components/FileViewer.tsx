import React from 'react';
import { X, Download, FileText, Monitor } from 'lucide-react';

interface FileViewerProps {
  fileName: string;
  filePath: string;
  fileType?: 'PDF' | 'PowerPoint' | 'Document';
  onClose: () => void;
}

const FileViewer: React.FC<FileViewerProps> = ({ fileName, filePath, fileType, onClose }) => {
  // Determine file type - use provided fileType prop or fallback to extension check
  const isPresentation = fileType === 'PowerPoint' || fileName.toLowerCase().endsWith('.pptx');
  const isPdf = fileName.toLowerCase().endsWith('.pdf');

  const handleViewFile = () => {
    if (isPresentation) {
      // For PowerPoint files (even if saved as PDF), open as PDF with PowerPoint styling
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>PowerPoint Preview - ${fileName}</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f5f5f5; }
              .header { background: #d04a02; color: white; padding: 10px; text-align: center; font-size: 14px; }
              .content { height: calc(100vh - 120px); }
              embed { width: 100%; height: 100%; border: none; }
              .fallback { 
                padding: 40px; 
                text-align: center; 
                color: #666; 
                display: none; 
                background: white; 
                margin: 20px; 
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .download-btn { 
                background: #d04a02; 
                color: white; 
                padding: 12px 24px; 
                border: none; 
                border-radius: 8px; 
                cursor: pointer; 
                text-decoration: none; 
                display: inline-block;
                margin: 10px;
                font-weight: 500;
                font-size: 16px;
              }
              .download-btn:hover { background: #b8430a; }
              .loading { 
                text-align: center; 
                padding: 40px; 
                color: #666; 
                background: white; 
                margin: 20px; 
                border-radius: 8px;
              }
              .footer { background: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; color: #666; }
              .no-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
            </style>
          </head>
          <body class="no-select">
            <div class="header">
              <strong>📊 PowerPoint Presentation:</strong> ${fileName} | Sample Preview
            </div>
            <div class="loading" id="loading">
              <p>Loading PowerPoint presentation...</p>
            </div>
            <div class="content">
              <embed 
                src="${filePath}" 
                type="application/pdf"
                onload="document.getElementById('loading').style.display='none';"
                onerror="showFallback()">
              </embed>
            </div>
            <div class="fallback" id="fallback">
              <h3>📊 PowerPoint Presentation</h3>
              <p>Unable to load the presentation viewer. You can download the file to view it locally:</p>
              <a href="${filePath}" class="download-btn" download>📥 Download Presentation</a>
              <p style="margin-top: 20px; font-size: 14px;">
                <em>The file will download to your computer where you can open it with Microsoft PowerPoint, 
                LibreOffice Impress, or Google Slides.</em>
              </p>
            </div>
            <div class="footer">
              PowerPoint Presentation converted to PDF | This is a sample preview
            </div>
            <script>
              function showFallback() {
                document.querySelector('.content').style.display = 'none';
                document.getElementById('loading').style.display = 'none';
                document.getElementById('fallback').style.display = 'block';
              }
              
              // Show fallback if embed fails to load after 5 seconds
              setTimeout(function() {
                const embed = document.querySelector('embed');
                if (embed && embed.offsetHeight === 0) {
                  showFallback();
                }
              }, 5000);
              
              // Disable context menu and text selection
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });
            </script>
          </body>
          </html>
        `);
      }
    } else if (isPdf) {
      // For PDFs, open in new window with restrictions
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>PDF Preview - Sample</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              .header { background: #1e40af; color: white; padding: 10px; text-align: center; }
              .content { height: calc(100vh - 60px); }
              embed { width: 100%; height: 100%; }
              .no-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
              .fallback { padding: 40px; text-align: center; color: #666; }
              .download-btn { 
                background: #1e40af; 
                color: white; 
                padding: 12px 24px; 
                border: none; 
                border-radius: 8px; 
                cursor: pointer; 
                text-decoration: none; 
                display: inline-block;
                margin: 10px;
                font-weight: 500;
              }
            </style>
          </head>
          <body class="no-select">
            <div class="header">
              <strong>PDF Sample Preview - Read Only</strong> | For demonstration purposes only
            </div>
            <div class="content">
              <embed src="${filePath}" type="application/pdf" />
              <div class="fallback" style="display: none;" id="fallback">
                <h3>PDF Viewer</h3>
                <p>If the PDF doesn't display, you can download it instead:</p>
                <a href="${filePath}" class="download-btn" download>Download PDF</a>
              </div>
            </div>
            <script>
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });
              
              // Show fallback if embed fails to load
              setTimeout(function() {
                const embed = document.querySelector('embed');
                if (embed && embed.offsetHeight === 0) {
                  embed.style.display = 'none';
                  document.getElementById('fallback').style.display = 'block';
                }
              }, 3000);
            </script>
          </body>
          </html>
        `);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">File Preview</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mr-4">
              {isPresentation ? <Monitor className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{fileName}</h4>
              <p className="text-sm text-gray-500">
                {isPresentation ? 'PowerPoint Presentation (PDF Format)' : isPdf ? 'PDF Document' : 'Document'}
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Sample Preview:</strong> This is a demonstration file. 
              {isPresentation ? ' This PowerPoint presentation has been converted to PDF for easy viewing.' : ' Full access requires contacting us.'}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleViewFile}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <Monitor className="h-4 w-4 mr-2" />
              {isPresentation ? 'View Presentation' : 'View Document'}
            </button>
            <a
              href="/contact"
              className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Request Full
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileViewer;
