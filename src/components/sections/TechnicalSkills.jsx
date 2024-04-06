import React, { useState } from "react";
import { BiAddToQueue, BiCodeAlt, BiEraser } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";

import { useFormData } from "../../contexts/Data/FormDataContext";

const TechnicalSkills = ( ) => {

    const { formData, handleChange } = useFormData();

    const [domains, setDomains] = useState(formData.technicalSkills || []);

    const handletechnicalSkillsChange = (e, domainIndex) => {
        const updatedDomains = [...domains];
        const name = e.target.name.split("-")[0];
        updatedDomains[domainIndex][name] = e.target.value;
        setDomains(updatedDomains);

        // handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills");
        handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", domainIndex);
    };

    const addDomain = () => {
        setDomains([...domains, { domain: "", skills: [] }]);
    };

    const removeDomain = (index) => {
        const updatedDomains = [...domains];
        updatedDomains.splice(index, 1);
        setDomains(updatedDomains);
        handleChange({ target: { name: "technicalSkills", value: updatedDomains } }, "technicalSkills", index);
    };

    return (
        <div>
            <div
                className="flex items-center justify-between w-full p-3 sm:p-10 gap-8"
            >
                <h2 className="text-xl font-semibold">Technical Skills</h2>
                <button
                    type="button"
                    onClick={addDomain}
                    className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none"
                >
                    <BiAddToQueue className="inline-block" size="1.5rem" />
                    Add Domain
                </button>
            </div>
            <div>
                {domains.map((domain, domainIndex) => (
                    <div key={domainIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            name={`domain-${domainIndex}`}
                            label="Domain"
                            value={domain.domain}
                            onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
                            decoration={<BiCodeAlt size="1rem" className="text-gray-400" />}
                        />

                        <TextAreaMani
                            name={`skills-${domainIndex}`}
                            label="Skills (comma-separated)"
                            value={domain.skills}
                            onChange={(e) => handletechnicalSkillsChange(e, domainIndex)}
                            attributes={{ maxLength: 50, autoCorrect: "off", autoCapitalize: "off", spellCheck: "false" }}
                        />
                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeDomain(domainIndex)} className="text-red-500 font-semibold focus:outline-none">
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
