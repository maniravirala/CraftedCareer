import React, { useState } from "react";
import { BiAddToQueue, BiCodeAlt, BiCoinStack, BiEraser, BiNetworkChart } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from 'dayjs';

const Projects = ({ formData, handleChange }) => {
    const [projects, setProjects] = useState(formData.projects || []);

    const handleProjectChange = (e, projectIndex) => {
        const updatedProjects = [...projects];
        const name = e.target.name.split("-")[0];
        updatedProjects[projectIndex][name] = e.target.value;
        setProjects(updatedProjects);
        handleChange({ target: { name: "projects", value: updatedProjects } }, "projects");
    };

    const handleDateChange = (date,dateString, projectIndex) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].date = dateString;
        setProjects(updatedProjects);
        handleChange({ target: { name: "projects", value: updatedProjects } }, "projects");
    };

    const today = dayjs().format('MM/YYYY');

    const addProject = () => {
        setProjects([...projects, { title: "", domain: "", technologies: "", date: today, description: "" }]);
    };

    const removeProject = (index) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(index, 1);
        setProjects(updatedProjects);
        handleChange({ target: { name: "projects", value: updatedProjects } }, "projects");
    };

    return (
        <div>
            <div className="flex items-center justify-between w-full p-3 sm:p-10 gap-8">
                <h2 className="text-xl font-semibold">Projects</h2>
                <button type="button" onClick={addProject} className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none">
                    <BiAddToQueue className="inline-block" size="1.5rem" onClick={addProject} />
                    Add Project
                </button>
            </div>
            <div>
                {projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            label="Title"
                            name={`title-${projectIndex}`}
                            value={project.title}
                            onChange={(e) => handleProjectChange(e, projectIndex)}
                            decoration={<BiNetworkChart size="1rem" className="text-gray-400" />}
                        />
                        
                        <InputMani
                            label="Domain"
                            name={`domain-${projectIndex}`}
                            value={project.domain}
                            onChange={(e) => handleProjectChange(e, projectIndex)}
                            decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
                        />

                        <InputMani
                            label="Technologies"
                            name={`technologies-${projectIndex}`}
                            value={project.technologies}
                            onChange={(e) => handleProjectChange(e, projectIndex)}
                            decoration={<BiCoinStack size="1rem" className="text-gray-400" />}
                        />

                        <DatePickerMani
                            name={`date-${projectIndex}`}
                            value={project.date}
                            onChange={handleDateChange}
                            index={projectIndex}
                        />

                        <TextAreaMani
                            label="Description"
                            name={`description-${projectIndex}`}
                            value={project.description}
                            onChange={(e) => handleProjectChange(e, projectIndex)}
                        />
                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeProject(projectIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
