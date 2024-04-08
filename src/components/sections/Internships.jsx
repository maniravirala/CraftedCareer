import React, { useState } from "react";
import { BiAddToQueue, BiEraser, BiMap, BiPopsicle, BiSolidSchool } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from 'dayjs';

import { useFormData } from "../../contexts/Data/FormDataContext";

const Internships = ( ) => {

    const {formData, handleChange} = useFormData();
    
    const [internships, setInternships] = useState(formData.internships || []);
    const [visibility, setVisibility] = useState(formData.visibility || []);
    // Company, position, location, start date, enddate and experience
    const handleInternshipChange = (e, internshipIndex) => {
        const updatedInternships = [...internships];
        const name = e.target.name.split("-")[0];
        updatedInternships[internshipIndex][name] = e.target.value;
        setInternships(updatedInternships);
        handleChange({ target: { name: "internships", value: updatedInternships } }, "internships");
    }

    const handleDateChange = (date, dateString, index) => {
        const updatedInternships = [...internships];
        updatedInternships[index].date = dateString;
        setInternships(updatedInternships);
        handleChange({ target: { name: "internships", value: updatedInternships } }, "internships");
    }

    const toggleInternshipVisibility = () => {
        const updatedVisibility = [...visibility];
        updatedVisibility.internships = !visibility.internships;
        setVisibility(updatedVisibility);
        handleChange({ target: { name: "visibility", value: updatedVisibility } }, "visibility");
    }
    
    const today1 = dayjs().format('MM/YYYY');
    const today2 = dayjs().format('MM/YYYY');
    const today = [today1, today2];

    const addInternship = () => {
        setInternships([...internships, { company: "", position: "", location: "", date: today, experience: "" }]);
    }

    const removeInternship = (index) => {
        const updatedInternships = [...internships];
        updatedInternships.splice(index, 1);
        setInternships(updatedInternships);
        handleChange({ target: { name: "internships", value: updatedInternships } }, "internships");
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full p-3 sm:p-10 gap-8">
                <h2 className="text-xl font-semibold">Internships</h2>
                
                <button type="button" onClick={addInternship} className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none">
                    <BiAddToQueue className="inline-block" size="1.5rem" onClick={addInternship} />
                    Add Internship
                </button>
            </div>
            <div>
                {internships.map((internship, internshipIndex) => (
                    <div key={internshipIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            label="Company"
                            name={`company-${internshipIndex}`}
                            value={internship.company}
                            onChange={(e) => handleInternshipChange(e, internshipIndex)}
                            decoration={<BiSolidSchool size="1rem" className="text-gray-400" />}
                        />
                        <InputMani
                            label="Position"
                            name={`position-${internshipIndex}`}
                            value={internship.position}
                            onChange={(e) => handleInternshipChange(e, internshipIndex)}
                            decoration={<BiPopsicle size="1rem" className="text-gray-400" />}
                        />
                        <InputMani
                            label="Location"
                            name={`location-${internshipIndex}`}
                            value={internship.location}
                            onChange={(e) => handleInternshipChange(e, internshipIndex)}
                            decoration={<BiMap size="1rem" className="text-gray-400" />}
                        />

                        <DatePickerMani
                            name={`date-${internshipIndex}`}
                            value={internship.date}
                            onChange={handleDateChange}
                            index={internshipIndex}
                            range={true}
                        />

                        <TextAreaMani
                            label="Experience"
                            name={`experience-${internshipIndex}`}
                            value={internship.experience}
                            onChange={(e) => handleInternshipChange(e, internshipIndex)}
                            attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
                        />

                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeInternship(internshipIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Internship
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Internships;