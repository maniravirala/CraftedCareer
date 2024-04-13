import React, { useState } from "react";
import { BiCodeAlt, BiPlusCircle } from "react-icons/bi";
import Input from "../Inputs/Input";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { Flex, message } from "antd";

import DraggableTag from "../Inputs/DraggableTag";
import { useFormData } from "../../contexts/Data/FormDataContext";

const TechnicalSkills = () => {
  const { formData, handleChange } = useFormData();

  const [domains, setDomains] = useState(formData.technicalSkills || []);
  const handletechnicalSkillsChange = (e, domainIndex) => {
    const updatedDomains = [...domains];
    const name = e.target.name.split("-")[0];
    updatedDomains[domainIndex][name] = e.target.value;
    setDomains(updatedDomains);
    handleChange(
      { target: { name: "technicalSkills", value: updatedDomains } },
      "technicalSkills",
      domainIndex
    );
  };

  const addDomain = () => {
    setDomains([...domains, { domain: "", temp: "", skills: [] }]);
  };

  const removeDomain = (index) => {
    const updatedDomains = [...domains];
    updatedDomains.splice(index, 1);
    setDomains(updatedDomains);
    handleChange(
      { target: { name: "technicalSkills", value: updatedDomains } },
      "technicalSkills",
      index
    );
  };

  const handleOnKeyDown = (index) => {
    let value = domains[index].temp;
    let skills = domains[index].skills;
    const updatedDomains = [...domains];
    if (value && !skills.some((tag) => tag.text === value)) {
      const newTag = {
        id: skills.length + 1,
        text: value,
      };
      skills.push(newTag);
      updatedDomains[index].skills = skills;
      updatedDomains[index].temp = "";
      setDomains(updatedDomains);
      handleChange(
        { target: { name: "technicalSkills", value: updatedDomains } },
        "technicalSkills",
        index
      );
    } else {
      message.error("Skill already exists or empty tag");
      updatedDomains[index].temp = "";
      setDomains(updatedDomains);
    }
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event, domainIndex) => {
    const { active, over } = event;
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      const updatedDomains = [...domains];
      const activeIndex = updatedDomains[domainIndex].skills.findIndex(
        (tag) => tag.id === active.id
      );
      const overIndex = updatedDomains[domainIndex].skills.findIndex(
        (tag) => tag.id === over.id
      );
      const activeTag = updatedDomains[domainIndex].skills[activeIndex];
      updatedDomains[domainIndex].skills.splice(activeIndex, 1);
      updatedDomains[domainIndex].skills.splice(overIndex, 0, activeTag);
      setDomains(updatedDomains);
      handleChange(
        { target: { name: "technicalSkills", value: updatedDomains } },
        "technicalSkills",
        domainIndex
      );
    }
  };

  const handleTagClose = (tag, domainIndex) => {
    const updatedDomains = [...domains];
    updatedDomains[domainIndex].skills = updatedDomains[
      domainIndex
    ].skills.filter((t) => t.id !== tag.id);
    updatedDomains[domainIndex].skills = updatedDomains[domainIndex].skills.map(
      (t, index) => ({ ...t, id: index + 1 })
    );
    setDomains(updatedDomains);
    handleChange(
      { target: { name: "technicalSkills", value: updatedDomains } },
      "technicalSkills",
      domainIndex
    );
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <button
          type="button"
          onClick={addDomain}
          className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
        >
          <BiPlusCircle className="inline-block" size="1.5rem" />
        </button>
      </div>
      <div>
        {domains.map((domain, domainIndex) => (
          <div key={domainIndex} className="flex flex-col w-full p-5 gap-8">
            <Input
              name={`domain-${domainIndex}`}
              label="Domain"
              value={domain.domain}
              onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
              decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <Input
              name={`temp-${domainIndex}`}
              label="Skills"
              value={domain.temp}
              onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleOnKeyDown(domainIndex)
              }
              decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <div className="-mt-4">
              <DndContext
                sensors={sensors}
                onDragEnd={(event) => handleDragEnd(event, domainIndex)}
              >
                <SortableContext
                  items={domain.skills.map((tag) => tag.id)}
                  strategy={horizontalListSortingStrategy}
                >
                  <Flex gap="4px 0" wrap="wrap">
                    {domain.skills.map((tag) => (
                      <DraggableTag
                        tag={tag}
                        key={tag.id}
                        handleTagClose={() => handleTagClose(tag, domainIndex)}
                        className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
                      />
                    ))}
                  </Flex>
                </SortableContext>
              </DndContext>
            </div>

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeDomain(domainIndex)}
                className="text-danger_mani dark:text-danger_mani-dark font-semibold focus:outline-none border-2 border-danger_mani py-1 px-4 rounded-xl hover:bg-red-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
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

export default TechnicalSkills;