import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import PdfViewer from "../../components/PdfViewer";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import Skeleton from "../../components/Skeleton";

const ViewResume = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [resume, setResume] = useState(null);
  const [pdf, setPdf] = useState(null);

  const { uniqueCode } = useParams();
  const previousUniqueCode = useRef(null);

  const fetchedResume = useMemo(
    () => async () => {
      try {
        axiosInstance
          .get(`/api/resume/get/${uniqueCode}`, { withCredentials: true })
          .then((res) => {
            if (res.error) {
              toast.error(res.error);
              return;
            }
            setResume(res.data.resume);
          });
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch resume!");
      }

      try {
        axiosInstance
          .get(`/api/resume/view/${uniqueCode}`, {
            withCredentials: true,
            responseType: "arraybuffer",
          })
          .then((res) => {
            if (res.error) {
              toast.error(res.error);
              return;
            }
            const pdfBlob = new Blob([res], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            setPdf(pdfUrl);
          });
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch resume PDF!");
      }
    },
    [uniqueCode]
  );

  useEffect(() => {
    if (previousUniqueCode.current !== uniqueCode) {
      previousUniqueCode.current = uniqueCode;
    } else {
      return;
    }

    fetchedResume();
  }, [uniqueCode, fetchedResume]);

  const sortedFeedback = resume
    ? [...resume.feedback].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  const sortedViewedBy = resume
    ? [...resume.viewedBy].sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  const handleDownload = () => {
    axiosInstance
      .get(`/api/resume/download/${uniqueCode}`, {
        withCredentials: true,
        responseType: "arraybuffer",
      })
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
          return;
        }

        const pdfBlob = new Blob([res], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = `${resume.name}.pdf`;
        a.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFeedback = () => {
    setIsFeedbackModalOpen(true);
  };

  const submitFeedback = () => {
    if (!feedbackText) {
      toast.error("Feedback cannot be empty!");
      return;
    }

    axiosInstance
      .post(
        `/api/resume/feedback/${uniqueCode}`,
        {
          feedback: feedbackText,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
          return;
        }
        setFeedbackText("");
        toast.success(res.message);
        setIsFeedbackModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShare = () => {
    const shareData = {
      title: "Resume Link",
      text: "Check out this resume",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {
          toast.success("Link shared successfully!");
        })
        .catch(() => {
          toast.error("Failed to share link!");
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto bg-gray-100 dark:bg-gray-900">
      <div className="bg-transparent lg:h-full">
        <div className="p-4 flex flex-col lg:flex-row gap-4 h-full overflow-y-auto">
          <div className="border-0 w-full lg:w-3/4">
            {pdf ? (
              <PdfViewer fileUrl={pdf} />
            ) : (
              <Skeleton loading={true} className={"w-full h-full rounded-lg"} />
            )}
          </div>
          <div className="w-full lg:w-1/4 flex flex-col items-center gap-4 h-full overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full text-center">
              {resume ? (
                <h1 className="text-2xl font-semibold">{resume.name}</h1>
              ) : (
                <Skeleton loading={true} className={"w-full h-8 rounded-lg"} />
              )}
              <span className="text-xs">
                {resume ? (
                  `Created on ${new Date(resume.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}`
                ) : (
                  <Skeleton
                    loading={true}
                    className={"w-full h-4 mt-2 rounded-lg"}
                  />
                )}
              </span>

              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                <button
                  onClick={handleShare}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 "
                  style={{
                    width: "min(50%, 120px)",
                  }}
                >
                  Share
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 "
                  style={{
                    width: "min(50%, 120px)",
                  }}
                >
                  Download
                </button>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 w-36 h-24 shadow-md">
                {resume ? (
                  <span className="text-3xl font-semibold">
                    <CountUp end={resume.views} />
                  </span>
                ) : (
                  <Skeleton
                    loading={true}
                    className={"w-16 h-8 rounded-lg mb-2"}
                  />
                )}
                <span className="text-md">Views</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 w-36 h-24 shadow-md">
                {resume ? (
                  <span className="text-3xl font-semibold">
                    <CountUp end={resume.uniqueViews} />
                  </span>
                ) : (
                  <Skeleton
                    loading={true}
                    className={"w-16 h-8 rounded-lg mb-2"}
                  />
                )}
                <span className="text-md">Unique Views</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 w-36 h-24 shadow-md">
                {resume ? (
                  <span className="text-3xl font-semibold">
                    <CountUp end={resume.downloads} />
                  </span>
                ) : (
                  <Skeleton
                    loading={true}
                    className={"w-16 h-8 rounded-lg mb-2"}
                  />
                )}
                <span className="text-md">Downloads</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full">
              <h1 className="text-xl font-semibold">Viewed By</h1>
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {sortedViewedBy.length > 0 ? (
                  sortedViewedBy.map((view, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-full">
                        <div className="bg-background dark:bg-gray-700 shadow-lg rounded-lg lg:p-3 p-2 mr-2">
                          <div className="flex justify-between items-center">
                            <h1 className="text-md font-semibold truncate">
                              {view.name}
                            </h1>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(view.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-24">
                    <span>No Views</span>
                  </div>
                )}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full">
              <h1 className="text-xl font-semibold">Feedback</h1>
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {sortedFeedback.length > 0 ? (
                  sortedFeedback.map((feedback, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-full">
                        <div className="bg-background dark:bg-gray-700 shadow-lg rounded-lg lg:p-3 p-2 mr-2">
                          <div className="flex justify-between items-center">
                            <h1 className="text-md font-semibold truncate">
                              {feedback.name}
                            </h1>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(feedback.date).toLocaleDateString()}
                            </span>
                          </div>
                          <pre className="text-sm mt-2 whitespace-pre-wrap">
                            {JSON.parse(feedback.feedback)}
                          </pre>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-24">
                    <span>No Feedback</span>
                  </div>
                )}
              </ul>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleFeedback}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Give Feedback</h2>
            <textarea
              className="w-full p-2 ring-2 ring-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows="5"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Write your feedback..."
              style={{ resize: "none" }}
            ></textarea>
            <div className="flex justify-end mt-4 gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsFeedbackModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={submitFeedback}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewResume;
