import React, { useState } from "react";
import {
  BiCalendar,
  BiCodeAlt,
  BiCoinStack,
  BiNetworkChart,
  BiPlusCircle,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import TextAreaMani from "../Inputs/TextAreaMani";
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";

const Projects = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

  const [projects, setProjects] = useState(formData.projects || []);

  const handleProjectChange = (e, projectIndex) => {
    const updatedProjects = [...projects];
    const name = e.target.name.split("-")[0];
    updatedProjects[projectIndex][name] = e.target.value;
    setProjects(updatedProjects);
    handleChange(
      { target: { name: "projects", value: updatedProjects } },
      "projects"
    );
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", domain: "", technologies: "", date: "", description: "" },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    handleChange(
      { target: { name: "projects", value: updatedProjects } },
      "projects"
    );
  };

  const handleToggle = () => {
    handleVisibility("projects");
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.projects}
            style={{
              backgroundColor: formData.visibility.projects
                ? "#58d68d"
                : "#ec7063",
            }}
          />
          <button
            type="button"
            onClick={addProject}
            className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              onClick={addProject}
            />
          </button>
        </div>
      </div>
      <div>
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="flex flex-col w-full p-5 gap-8">
            <Input
              label="Title"
              name={`title-${projectIndex}`}
              value={project.title}
              onChange={(e) => handleProjectChange(e, projectIndex)}
              decoration={
                <BiNetworkChart size="1rem" className="text-gray-400" />
              }
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <Input
              label="Domain"
              name={`domain-${projectIndex}`}
              value={project.domain}
              onChange={(e) => handleProjectChange(e, projectIndex)}
              decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <Input
              label="Technologies"
              name={`technologies-${projectIndex}`}
              value={project.technologies}
              onChange={(e) => handleProjectChange(e, projectIndex)}
              decoration={<BiCoinStack size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Date"
              name={`date-${projectIndex}`}
              value={project.date}
              onChange={(e) => handleProjectChange(e, projectIndex)}
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <TextAreaMani
              label="Description"
              name={`description-${projectIndex}`}
              value={project.description}
              onChange={(e) => handleProjectChange(e, projectIndex)}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeProject(projectIndex)}
                className="text-danger_mani dark:text-danger_mani-dark font-semibold focus:outline-none border-2 border-danger_mani dark:border-danger_mani-dark py-1 px-4 rounded-xl hover:bg-red-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
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

export default Projects;
