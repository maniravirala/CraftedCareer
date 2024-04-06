import React, { useState } from "react";
import { BiAddToQueue, BiEraser, BiFile, BiSolidSchool, BiTime } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from 'dayjs';

import { useFormData } from "../../contexts/Data/FormDataContext";

const Certifications = ( ) => {

    const {formData, handleChange} = useFormData();
    
    const [certificates, setCertificates] = useState(formData.certifications || []);

    const handleCertificateChange = (e, certificateIndex) => {
        const updatedCertificates = [...certificates];
        const name = e.target.name.split("-")[0];
        updatedCertificates[certificateIndex][name] = e.target.value;
        setCertificates(updatedCertificates);
        handleChange({ target: { name: "certifications", value: updatedCertificates } }, "certifications");
    };

    const handleDateChange = (date, dateString, index) => {
        const updatedCertificates = [...certificates];
        updatedCertificates[index].date = dateString;
        setCertificates(updatedCertificates);
        handleChange({ target: { name: "certifications", value: updatedCertificates } }, "certifications");
    };

    const today = dayjs().format('MM/YYYY');

    const addCertificate = () => {
        setCertificates([...certificates, { title: "", issuedBy: "", date: today }]);
    }

    const removeCertificate = (index) => {
        const updatedCertificates = [...certificates];
        updatedCertificates.splice(index, 1);
        setCertificates(updatedCertificates);
        handleChange({ target: { name: "certifications", value: updatedCertificates } }, "certifications");
    }

    return (
        <div>
            <div
                className="flex items-center justify-between w-full p-3 sm:p-10 gap-8">
                <h2
                    className="text-xl font-semibold">
                    Certifications
                </h2>
                <button
                    type="button"
                    onClick={addCertificate}
                    className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none">
                    <BiAddToQueue className="inline-block" size="1.5rem" onClick={addCertificate} />
                    Add Certificate
                </button>
            </div>
            <div>
                {certificates.map((certificate, certificateIndex) => (
                    <div key={certificateIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            name={`title-${certificateIndex}`}
                            label="Title"
                            value={certificate.title}
                            onChange={(e) => handleCertificateChange(e, certificateIndex)}
                            decoration={<BiFile size="1rem" className="text-gray-400" />}
                        />
                        <InputMani
                            name={`issuedBy-${certificateIndex}`}
                            label="Issued By"
                            value={certificate.issuedBy}
                            onChange={(e) => handleCertificateChange(e, certificateIndex)}
                            decoration={<BiSolidSchool size="1rem" className="text-gray-400" />}
                        />
                        <DatePickerMani
                            name={`date-${certificateIndex}`}
                            value={certificate.date}
                            onChange={handleDateChange}
                            index={certificateIndex}
                            range={false}
                        />

                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeCertificate(certificateIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Certificate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;