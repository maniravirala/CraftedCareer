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
  // const pdf = "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf";

  // const resume = {
  //   name: "John Doe",
  //   views: 10,
  //   uniqueViews: 5,
  //   viewedBy: [
  //     {
  //       name: "Alice Markus Smith",
  //       date: "2024-05-15T08:24:00.000Z",
  //     },
  //     {
  //       name: "Jane Doe",
  //       date: "2024-05-16T09:14:00.000Z",
  //     },
  //     {
  //       name: "Jane Doe skdsv clsdkfffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddfndinf sdflidsdddddddddddddddd",
  //       date: "2024-05-12T10:34:00.000Z",
  //     },
  //   ],
  //   downloads: 2,
  //   feedback: [
  //     {
  //       name: "John Doe",
  //       feedback: "Great resume!",
  //       date: "2024-05-15T08:24:00.000Z",
  //     },
  //     {
  //       name: "Jane Doe skdsv clsdkfffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddfndinf sdflidsdddddddddddddddd",
  //       feedback: "Nice resume!",
  //       date: "2024-05-16T09:14:00.000Z",
  //     },
  //     {
  //       name: "Alice Markus Smith",
  //       feedback:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //       date: "2024-05-17T10:34:00.000Z",
  //     },
  //   ],
  //   createdAt: "2024-05-17T04:26:33.109Z",
  // };

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
            // res is in binary format, so we need to convert it to blob and then to URL
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

    // axiosInstance
    //   .get(`/api/resume/get/${uniqueCode}`, { withCredentials: true })
    //   .then((res) => {
    //     if (res.error) {
    //       toast.error(res.error);
    //       return;
    //     }
    //     setResume(res.data.resume);
    //   });

    // axiosInstance
    //   .get(`/api/resume/view/${uniqueCode}`, { withCredentials: true, responseType: "arraybuffer" })
    //   .then((res) => {
    //     if (res.error) {
    //       toast.error(res.error);
    //       return;
    //     }
    //     // res is in binary format, so we need to convert it to blob and then to URL
    //     const pdfBlob = new Blob([res], { type: "application/pdf" });
    //     const pdfUrl = URL.createObjectURL(pdfBlob);
    //     setPdf(pdfUrl);
    //   });
  }, [uniqueCode, fetchedResume]);

  // Sort feedback by most recent date
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

    // Submit feedback to the server
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
    // navigator.clipboard.writeText(window.location.href);
    // toast.success("Link copied to clipboard!");

    // onclick of share button, open share dialog with platform options like email, whatsapp, etc.
    // get the current url and with messa gefor sharing resume link
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
      <div className="bg-transparent h-full">
        <div className="p-4 flex gap-4 h-full">
          <div className="border-0 w-3/4">
            {/* {resume && <PdfViewer fileUrl={pdf} />} */}
            {/* if resume is not loaded, show skeleton else show PdfViewer */}
            {pdf ? (
              <PdfViewer fileUrl={pdf} />
            ) : (
              <Skeleton loading={true} className={"w-full h-full rounded-lg"} />
            )}
          </div>
          <div className="w-1/4 flex flex-col items-center gap-4 h-full overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full text-center">
              {/* if resume is not loaded, show skeleton else show resume name */}
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
                  <div className="flex items-center justify-center h-24 w-full">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      No one has viewed this resume yet!
                    </p>
                  </div>
                )}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md w-full">
              <h1 className="text-xl font-semibold">Feedback</h1>
              {sortedFeedback.length > 0 ? (
                <ul className="space-y-4 max-h-96 overflow-y-auto">
                  {sortedFeedback.map((fb, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-full">
                        <div className="bg-background dark:bg-gray-700 shadow-lg rounded-lg lg:p-3 p-2 mr-2">
                          <div className="flex justify-between items-center">
                            <h1 className="text-md font-semibold truncate">
                              {fb.name}
                            </h1>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(fb.date).toLocaleDateString()}
                            </span>
                          </div>
                          <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                            {JSON.parse(fb.feedback, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-center justify-center h-24 w-full">
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    No feedback available yet!
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 w-full">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={handleDownload}
              >
                Download
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={handleFeedback}
              >
                Feedback
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-96">
            <h1 className="text-xl font-semibold">Feedback</h1>
            <textarea
              className="w-full h-32 p-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg mt-2 outline-none focus:border-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              style={{ resize: "none" }}
            ></textarea>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={submitFeedback}
              >
                Submit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition"
                onClick={() => setIsFeedbackModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewResume;
