import React, { useState, useEffect } from 'react';

const DownloadResume = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30); // Initial timer value

  useEffect(() => {
    if (showDownload) {
      const timer = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showDownload]);

  const handleDownloadClick = () => {
    // Perform download logic here
    window.location.href = '/resume.pdf';
  };

  const handleShowDownload = () => {
    setShowDownload(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showDownload ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Download Resume</h1>
          <p className="text-lg">
            Click the button below to download my resume.
          </p>
          <button
            onClick={handleDownloadClick}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Please wait...</h1>
          <p className="text-lg">Your download will start in {secondsRemaining} seconds.</p>
          <button
            onClick={handleShowDownload}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Download Now
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadResume;
