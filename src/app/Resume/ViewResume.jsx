import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import axiosInstance from "../../utils/axiosInstance";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ViewResume = () => {
  const { uniqueCode } = useParams();
  const [resume, setResume] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(`/api/resume/view/${uniqueCode}`, {
        withCredentials: true,
        responseType: "arraybuffer",
      })
      .then((res) => {
        if (res.error) {
          console.log(res.error);
          return;
        }

        const pdfBlob = new Blob([res], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setResume(pdfUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uniqueCode]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    axios
      .get(`/api/resume/download/${uniqueCode}`, { responseType: "blob" })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${uniqueCode}.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFeedback = () => {
    // Implement feedback functionality
  };

  if (!resume) {
    return (
      <div className="h-[calc(100vh-4rem)] overflow-auto">
        <div className="bg-transparent h-full">
          <div className="container mx-auto flex justify-center items-center h-full">
            <h1 className="text-xl font-bold">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto">
      <div className="bg-transparent h-full">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Resume Viewer</h1>
            <div>
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
              >
                Download
              </button>
              <button
                onClick={handleFeedback}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Feedback
              </button>
            </div>
          </div>
          <div className="bg-yellow-200 p-4 rounded shadow-md">

          {/* Render the PDF other than using react-pdf */}
            <div className="flex flex-col items-center bg-teal-400 ">
              <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}
                className="bg-yellow-500"
              >
                <Page pageNumber={pageNumber} className="bg-indigo-800"/>
              </Document>
            </div>
            {numPages && (
              <div className="flex justify-between items-center mt-4">
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="bg-gray-300 text-black py-1 px-3 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <p className="text-lg">
                  Page {pageNumber} of {numPages}
                </p>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="bg-gray-300 text-black py-1 px-3 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResume;
