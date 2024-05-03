import React, { useState } from "react";
import { FloatButton, FloatButtonGroup } from "../../components/FloatButtons";
import {
  PlusOutlined,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  DownloadOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { renderToStaticMarkup } from "react-dom/server";
import { FormDataProvider } from "../../contexts/Data/FormDataContext";
import Links from "../../assets/links";
import toast from "react-hot-toast";
import Template1 from "../../components/Templates/Template1";
import Template2 from "../../components/Templates/Template2";
import Template3 from "../../components/Templates/Template3";

const FloatBtnResume = () => {
  const selectedTemplate = useState(
    localStorage.getItem("selectedTemplate") || "Template 1"
  )[0];

  const TemplateComponent = () => {
    switch (selectedTemplate) {
      case "Template 1":
        return <Template1 />;
      case "Template 2":
        return <Template2 />;
      case "Template 3":
        return <Template3 />;
      default:
        return <Template1 />;
    }
  };

  const handleJSONUpload = (e) => {
    const file = document.createElement("input");
    file.type = "file";
    file.accept = ".json";
    file.click();
    file.onchange = (e) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // const data = JSON.parse(e.target.result);
        const data = e.target.result;
        localStorage.setItem("formData", data);
        window.location.reload();
      };
      reader.readAsText(e.target.files[0]);
    };
  };

  const handleJSONDownload = () => {
    const json = localStorage.getItem("formData");
    // const json = JSON.stringify(data);
    const url = URL.createObjectURL(
      new Blob([json], { type: "application/json" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePDFDownload = () => {
    const loadingToast = toast.loading("Generating PDF...");
    try {
      const html = renderToStaticMarkup(
        <FormDataProvider>
          <TemplateComponent />
        </FormDataProvider>
      );
      axios
        .post(
          Links.API.GENERATE_PDF,
          { html: html },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          setTimeout(() => {
            toast.dismiss(loadingToast.id);
            downloadPdf(response.data.downloadUrl);
          }, 6000);
        })
        .catch((err) => {
          toast.dismiss(loadingToast.id);
          toast.error(
            err.response ? err.response.data.message : "Error generating PDF"
          );
        });
    } catch (err) {
      toast.dismiss(loadingToast.id);
      toast.error(
        err.response ? err.response.data.message : "Error generating PDF"
      );
    }
  };

  function downloadPdf(url) {
    const loadingToast = toast.loading("Downloading PDF...");
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        toast.dismiss(loadingToast.id);
        downloadToBrowser(blob);
        sendPdfToEmail(url);
      })
      .catch(() => {
        toast.dismiss(loadingToast.id);
        toast.error("Error downloading PDF");
      });
  }

  function sendPdfToEmail(url) {
    try {
      axios
        .post(
          Links.API.SEND_PDF,
          { downloadUrl: url },
          { withCredentials: true }
        )
        .then((response) => {
          toast.success(response.data.message);
        })
        .catch((err) => {
          toast.error(
            err.response
              ? err.response.data.message
              : "Error sending PDF to email"
          );
        });
    } catch (err) {
      toast.error(
        err.response ? err.response.data.message : "Error sending PDF to email"
      );
    }
  }

  function downloadToBrowser(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = new Date().toISOString() + "." + blob.type.split("/")[1];
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const handleClear = () => {
    localStorage.removeItem("formData");
    window.location.reload();
  };

  return (
    <FloatButtonGroup
      trigger="both"
      type="circle"
      style={{
        right: 24,
        bottom: 20,
      }}
      icon={<PlusOutlined />}
    >
      <FloatButton
        icon={<CloudDownloadOutlined />}
        onClick={handleJSONDownload}
        tooltip="Download JSON"
      />
      <FloatButton
        icon={<CloudUploadOutlined />}
        onClick={handleJSONUpload}
        tooltip="Upload JSON"
      />
      <FloatButton
        icon={<DownloadOutlined />}
        onClick={handlePDFDownload}
        tooltip="Download PDF"
      />
      <FloatButton
        icon={<ClearOutlined />}
        onClick={handleClear}
        tooltip="Clear Data"
      />
    </FloatButtonGroup>
  );
};

export default FloatBtnResume;
