import React, { useState } from "react";
import {
  BiCalendar,
  BiFile,
  BiLink,
  BiPlusCircle,
  BiSolidSchool,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";
import Lottie from "react-lottie";
import { arrowDarkLottie, arrowLottie } from "../../assets";

const Certifications = () => {
  const { formData, handleChange, handleVisibility } = useFormData();
  const { darkMode } = useDarkMode();

  const [certificates, setCertificates] = useState(
    formData.certifications || []
  );

  const handleCertificateChange = (e, certificateIndex) => {
    const updatedCertificates = [...certificates];
    const name = e.target.name.split("-")[0];
    updatedCertificates[certificateIndex][name] = e.target.value;
    setCertificates(updatedCertificates);
    handleChange(
      { target: { name: "certifications", value: updatedCertificates } },
      "certifications"
    );
  };

  const addCertificate = () => {
    setCertificates([...certificates, { title: "", issuedBy: "", link:"", date: "" }]);
  };  

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
    handleChange(
      { target: { name: "certifications", value: updatedCertificates } },
      "certifications"
    );
  };

  const handleToggle = () => {
    handleVisibility("certifications");
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.certifications}
            style={{
              backgroundColor: formData.visibility.certifications
                ? "#58d68d"
                : "#ec7063",
            }}
          />
          <button
            type="button"
            onClick={addCertificate}
            className="flex items-center gap-2 text-primary font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              onClick={addCertificate}
            />
          </button>
        </div>
      </div>
      {certificates.length === 0 ? (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 p-4">
          {/* create a div starting from row 5 to row 12 and col 1 to col 5 that consists of the arrow */}
          <div className="h-48 col-start-5 col-end-13 row-start-1 row-end-6 relative overflow-hidden">
            <div className="flex items-center gap-2 -z-10 absolute -right-6 transform translate-x-1/4 -translate-y-1/4 rotate-180">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: darkMode ? arrowDarkLottie : arrowLottie,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                isClickToPauseDisabled={true}
                // style={{ transform: "rotate(180deg)", margin: "0 20px" }}
                height={300}
                width={300}
              />
            </div>
          </div>

          <div className="row-start-6 row-end-13 col-span-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold">
              Add your Certifications
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Showcase your certifications and achievements here.
            </p>
          </div>
        </div>
      ) : (
        <div>
          {certificates.map((certificate, certificateIndex) => (
            <div
              key={certificateIndex}
              className="flex flex-col w-full p-5 gap-8"
            >
              <Input
                name={`title-${certificateIndex}`}
                label="Title"
                value={certificate.title}
                onChange={(e) => handleCertificateChange(e, certificateIndex)}
                decoration={<BiFile size="1rem" className="text-gray-400" />}
                className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
              />
              <Input
                name={`issuedBy-${certificateIndex}`}
                label="Issued By"
                value={certificate.issuedBy}
                onChange={(e) => handleCertificateChange(e, certificateIndex)}
                decoration={
                  <BiSolidSchool size="1rem" className="text-gray-400" />
                }
                className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
              />

              <Input
                name={`link-${certificateIndex}`}
                label="Link"
                value={certificate.link}
                onChange={(e) => handleCertificateChange(e, certificateIndex)}
                decoration={
                  <BiLink size="1rem" className="text-gray-400" />
                }
                className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
              />

              {/* <DatePickerMani
              name={`date-${certificateIndex}`}
              value={certificate.date}
              onChange={handleDateChange}
              index={certificateIndex}
              range={false}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700"
            /> */}

              <Input
                name={`date-${certificateIndex}`}
                label="Date"
                value={certificate.date}
                onChange={(e) => handleCertificateChange(e, certificateIndex)}
                decoration={
                  <BiCalendar size="1rem" className="text-gray-400" />
                }
                className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
              />

              <div className="flex items-center gap-2 justify-center -mt-5">
                <button
                  type="button"
                  onClick={() => removeCertificate(certificateIndex)}
                  className="text-danger_mani font-semibold focus:outline-none border-2 border-danger_mani py-1 px-4 rounded-xl hover:bg-red-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
