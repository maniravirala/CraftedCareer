import React, { useState } from "react";
import { BiAddToQueue, BiCodeAlt, BiEraser } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
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

import { useFormData } from "../../contexts/Data/FormDataContext";
import DragAndDropContainer from "../DND/DragAndDropContainer";

const TechnicalSkills = () => {
  const { formData, handleChange } = useFormData();

  const [domains, setDomains] = useState(formData.technicalSkills || []);

  let nextId =
    domains.length > 0
      ? Math.max(...domains.map((domain) => domain.id)) + 1
      : 1;

  const handletechnicalSkillsChange = (e, domainIndex) => {
    const updatedDomains = [...domains];
    const name = e.target.name.split("-")[0];
    const value = e.target.value;
    setDomains(updatedDomains);
    handleChange(
      { target: { name: "technicalSkills", value: updatedDomains } },
      "technicalSkills",
      domainIndex
    );
  };

  const addDomain = () => {
    setDomains([
      ...domains,
      {
        id: nextId,
        content: { domain: "", temp: "", skills: [] },
      },
    ]);
    nextId++;
    handleChange(
      {
        target: {
          name: "technicalSkills",
          value: [
            ...domains,
            {
              id: nextId,
              content: { domain: "", temp: "", skills: [] },
            },
          ],
        },
      },
      "technicalSkills",
      domains.length
    );
  };

  const removeDomain = (index) => {
    const updatedDomains = domains.filter(
      (domain) => domain.id !== index + 1
    );
    updatedDomains.forEach((domain, index) => {
      domain.id = index + 1;
    });

    setDomains(updatedDomains);
    handleChange(
      { target: { name: "technicalSkills", value: updatedDomains } },
      "technicalSkills",
      index
    );
  };

  const handleOnKeyDown = (id) => {
    const index = domains.findIndex((domain) => domain.id === id);
    const value = domains[index].content.temp;
    const skills = domains[index].content.skills;
    const updatedDomains = [...domains];
    if (value && !skills.some((tag) => tag.content === value)) {
      const newTag = {
        id: skills.length + 1,
        content: value,
      };
      skills.push(newTag);
      updatedDomains[index].content.skills = skills;
      updatedDomains[index].content.temp = "";
      setDomains(updatedDomains);
      handleChange(
        { target: { name: "technicalSkills", value: updatedDomains } },
        "technicalSkills",
        index
      );
    } else {
      message.error("Skill already exists or empty tag");
      updatedDomains[index].temp="";
      setDomains(updatedDomains);
    };
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
    }
  };

  const handleItemsChange = (items, domainIndex) => {
    const updatedDomains = [...domains];
    updatedDomains[domainIndex].content.skills = items;
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
          <div
            key={domainIndex}
            className="flex flex-col w-full p-5 sm:p-10 gap-8"
          >
            <InputMani
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
                    />
                  ))}
                </Flex>
              </SortableContext>
            </DndContext>

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
        ))} */}

        {formData.technicalSkills.length === 0 && (
          <div className="flex items-center justify-center w-full h-96">
            <h2 className="text-2xl font-semibold text-gray-400">
              No Technical Skills Added
            </h2>
          </div>
        )}
        {formData.technicalSkills.map((domain) => (
          <div
            key={domain.id}
            className="flex flex-col w-full p-5 sm:p-10 gap-8"
          >
            <InputMani
              name={`domain-${domain.id}`}
              label="Domain"
              value={domain.content.domain}
              onChange={(e) => handletechnicalSkillsChange(e, domain.id)}
              decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
            />

            <InputMani
              name={`temp-${domain.id}`}
              label="Skills"
              value={domain.content.temp}
              onChange={(e) => handletechnicalSkillsChange(e, domain.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleOnKeyDown(domain.id)
              }
              decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
            />

            <div className="-mt-5 select-none">
              <DragAndDropContainer
                key={domain.id}
                items={domain.content.skills}
                setItems={(items) => {
                  handleItemsChange(items, domain.id);
                }}
                close={true}
                ItemClassName="bg-gray-100 px-2 py-1 m-1 rounded-md shadow-md text-xs"
              />
            </div>

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeDomain(domain.id)}
                className="text-red-500 font-semibold focus:outline-none"
              >
                <BiEraser className="inline-block" size="1.5rem" />
                Remove Domain
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
