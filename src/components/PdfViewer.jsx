import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { pdfjs } from "react-pdf";

import { useDarkMode } from "../contexts/Theme/DarkModeContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  const { darkMode } = useDarkMode();

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div className="flex items-center justify-between lg:w-2/4 mx-auto text-black dark:text-white">
            <div className="flex items-center gap-2">
              <ShowSearchPopover />
              <div className="flex items-center gap-1">
                <ZoomOut />
                <Zoom />
                <ZoomIn />
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <GoToPreviousPage />
              <div className="flex items-center gap-1">
                <CurrentPageInput />
                <span>/</span>
                <NumberOfPages />
              </div>
              <GoToNextPage />
            </div>
            {/* <div id="thisone" className="flex items-center gap-2">
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.print()}>Print</button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.open(fileUrl)}>Download</button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.open(fileUrl, "_blank")}>
                  new
                </button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.open(fileUrl, "_self")}>
                  same
                </button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.open(fileUrl, "_parent")}>
                  parent
                </button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button onClick={() => window.open(fileUrl, "_top")}>
                  top
                </button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button
                  onClick={() =>
                    window.open(
                      fileUrl,
                      "_blank",
                      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                    )
                  }
                >
                  custom
                </button>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <button
                  onClick={() => {
                    alert("You clicked the custom button!");
                  }}
                  style={{
                    background: "#0078D4",
                    border: "none",
                    borderRadius: "4px",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "4px 8px",
                  }}
                >
                  Custom Button
                </button>
              </div>
            </div> */}
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: (defaultTabs) => [defaultTabs[0]],
  });

  return (
    <div className="h-full overflow-auto">
      <div className={`bg-transparent h-full`}>
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme={darkMode ? "dark" : "light"}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
