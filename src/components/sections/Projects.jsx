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
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";
import Lottie from "react-lottie";
import { arrowDarkLottie, arrowLottie } from "../../assets";


const Projects = () => {
  const { formData, handleChange, handleVisibility } = useFormData();
  const { darkMode } = useDarkMode();

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
      
      {projects.length === 0 ? (
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
              Add your Projects
            </h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Add the projects you have worked on. You can add as many projects as you want.
            </p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Projects;
