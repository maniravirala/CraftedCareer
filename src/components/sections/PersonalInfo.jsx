import React from "react";

import { BiMap, BiUser, BiLogoGmail, BiPhone, BiRepost, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import Input from "../Inputs/Input";
import TextAreaMani from "../Inputs/TextAreaMani";

import { useFormData } from "../../contexts/Data/FormDataContext";

const PersonalInfo = () => {

  const {formData, handleChange} = useFormData();

  return (
    <div className="h-full pt-8">
      <div className="flex flex-col w-full p-5 gap-8">
        <Input
          name="name"
          label="Name"
          value={formData.personalInfo.name}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiUser size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"

        />
        <Input
          name="email"
          label="Email"
          value={formData.personalInfo.email}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoGmail size="1rem" className="text-gray-400" />}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />
        <Input
          name="phone"
          label="Phone"
          value={formData.personalInfo.phone}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiPhone size="1rem" className="text-gray-400" />}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

        <Input
          name="position"
          label="Position"
          value={formData.personalInfo.position}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiRepost size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

        <Input
          name="address"
          label="Address"
          value={formData.personalInfo.address}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiMap size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

        <Input
          name="linkedin"
          label="Linkedin"
          value={formData.personalInfo.linkedin}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoLinkedin size="1rem" className="text-gray-400" />}
          attributes={{ autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

        <Input
          name="github"
          label="Github"
          value={formData.personalInfo.github}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoGithub size="1rem" className="text-gray-400" />}
          attributes={{  autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

        <TextAreaMani
          name="summary"
          label="Summary"
          value={formData.personalInfo.summary}
          onChange={(e) => handleChange(e, "personalInfo")}
          // decoration={<BiMap size="1rem" className="text-gray-400" />}
          className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
        />

      </div>
    </div>
  );
}

export default PersonalInfo;
