import React, { useState } from "react";
import { BiCalendar, BiFile, BiPlusCircle, BiSolidSchool } from "react-icons/bi";
import Input from "../Inputs/Input";
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";

const Certifications = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

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
    setCertificates([
      ...certificates,
      { title: "", issuedBy: "", date: "" },
    ]);
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
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
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
    </div>
  );
};

export default Certifications;
