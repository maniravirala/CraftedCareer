import React from "react";

import { Input } from "@material-tailwind/react";
import { TEInput } from "tw-elements-react";
import { BiMap, BiUser, BiLogoGmail, BiPhone, BiRepost, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";

import { useFormData } from "../../contexts/Data/FormDataContext";

const PersonalInfo = () => {

  const {formData, handleChange} = useFormData();

  return (
    <div>
      <div className="flex flex-col w-full p-5 sm:p-10 gap-8">
        <InputMani
          name="name"
          label="Name"
          value={formData.personalInfo.name}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiUser size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}

        />
        <InputMani
          name="email"
          label="Email"
          value={formData.personalInfo.email}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoGmail size="1rem" className="text-gray-400" />}
        />
        <InputMani
          name="phone"
          label="Phone"
          value={formData.personalInfo.phone}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiPhone size="1rem" className="text-gray-400" />}
        />

        <InputMani
          name="position"
          label="Position"
          value={formData.personalInfo.position}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiRepost size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
        />

        <InputMani
          name="address"
          label="Address"
          value={formData.personalInfo.address}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiMap size="1rem" className="text-gray-400" />}
          attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
        />

        <InputMani
          name="linkedin"
          label="Linkedin"
          value={formData.personalInfo.linkedin}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoLinkedin size="1rem" className="text-gray-400" />}
          attributes={{ autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
        />

        <InputMani
          name="github"
          label="Github"
          value={formData.personalInfo.github}
          onChange={(e) => handleChange(e, "personalInfo")}
          decoration={<BiLogoGithub size="1rem" className="text-gray-400" />}
          attributes={{  autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
        />

        <TextAreaMani
          name="summary"
          label="Summary"
          value={formData.personalInfo.summary}
          onChange={(e) => handleChange(e, "personalInfo")}
          // decoration={<BiMap size="1rem" className="text-gray-400" />}
        />

      </div>
    </div>
  );
}

export default PersonalInfo;
