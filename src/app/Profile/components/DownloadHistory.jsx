import React from "react";
import moment from "moment";
import { FaEye, FaShare, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";

const DownloadHistory = ({ downloadHistory }) => {
  const navigate = useNavigate();

  const sortedDownloadHistory = downloadHistory.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleView = (code) => {
    navigate(`/resume/view/${code}`);
  };

  const handleShare = (code) => {
    const sharedData = {
      title: "Resume",
      text: "Check out my resume",
      url: `${window.location.origin}/resume/view/${code}`,
    };
    if (navigator.share) {
      navigator
        .share(sharedData)
        .then(() => toast.success("Link shared successfully"))
        .catch(() => toast.error("Error sharing link"));
    } else {
      navigator.clipboard
        .writeText(sharedData.url)
        .then(() => toast.success("Link copied to clipboard"))
        .catch(() => toast.error("Error copying link"));
    }
  };

  const handleEdit = (code) => {
    axiosInstance
      .get(`/resume/${code}`)
      .then((response) => {
        if (response.error) {
          toast.error(response.error);
          return;
        }
        navigate(`/resume/edit/${code}`, { state: response.data });
      })
      .catch((error) => {
        toast.error("Error fetching resume");
      });
  };

  const handleDelete = (code) => {
    axiosInstance
      .delete(`/resume/${code}`)
      .then((response) => {
        if (response.error) {
          toast.error(response.error);
          return;
        }
        toast.success("Resume deleted successfully");
      })
      .catch((error) => {
        toast.error("Error deleting resume");
      });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {sortedDownloadHistory.map((download) => (
        <div
          key={download.uniqueCode}
          className="flex items-center gap-4 justify-between p-4 bg-background dark:bg-gray-700 shadow-md rounded-lg transition-all hover:shadow-lg"
        >
          <div className="flex items-center gap-4 justify-between w-full">
            <p className="text-gray-900 dark:text-gray-200 font-medium break-all">
              {download.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
              {moment(download.date).format("MMM DD, YYYY")}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleView(download.uniqueCode)}
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaEye />
            </button>
            <button
              onClick={() => handleShare(download.uniqueCode)}
              className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
            >
              <FaShare />
            </button>
            <button
              onClick={() => handleEdit(download.uniqueCode)}
              className="text-gray-500 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(download.uniqueCode)}
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadHistory;
