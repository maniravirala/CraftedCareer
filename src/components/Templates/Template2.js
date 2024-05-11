import React from "react";
import { useFormData } from "../../contexts/Data/FormDataContext";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiSolidPhone } from "react-icons/bi";
import Markdown from "react-markdown";

const Template2 = () => {
    const { formData, getFontSizeClass, getHeadingFontSizeClass, getLineHeightClass, getPageMarginClass, getFontFamilyClass, getTitleCaseClass } = useFormData();

    if (!formData) return null;
    return (
        <div id='a4' className={`bg-white text-black `} style={{
            width: '210mm',
            height: '297mm',
            margin: '0 auto',
            fontFamily: `${getFontFamilyClass()}`,
            // wordWrap: 'break-word',
            // overflowWrap: 'anywhere',
            wordBreak: 'break-all',
        }}>
            <div className={`flex flex-col h-full ${getPageMarginClass()}`}>
                {/* Personal Details */}
                <div className={`flex flex-col items-center`}>
                    <h1 className={`text-3xl font-bold uppercase`}>{formData.personalInfo.name}</h1>
                    <p className={`font-medium ${getFontSizeClass()}`}>{formData.personalInfo.address}</p>
                    <div className="flex gap-x-2 gap-y-1 flex-row flex-wrap justify-center">
                        <p className={`${getFontSizeClass()} flex items-center gap-1`}>
                            {formData.personalInfo.phone && <span className="font-medium -mt-[4px]"><BiSolidPhone className={`${getFontSizeClass()}`} /></span>}
                            <a href={`tel:${formData.personalInfo.phone}`}>{formData.personalInfo.phone}</a>
                        </p>
                        <p className={`${getFontSizeClass()} flex items-center gap-1`}>
                            {formData.personalInfo.email && <span className="font-medium -mt-[4px] "><BiLogoGmail className={`${getFontSizeClass()}`} /></span>}
                            {/* whennnnn i click on this it needs to open the mail */}
                            <a href={`mailto:${formData.personalInfo.email}`}>{formData.personalInfo.email}</a>
                        </p>

                        <p className={`${getFontSizeClass()} flex items-center gap-1`}>
                            {formData.personalInfo.linkedin && <span className="font-medium -mt-[4px] "><BiLogoLinkedinSquare className={`${getFontSizeClass()}`} /></span>}
                            <a href={formData.personalInfo.linkedin} target="_blank" rel="noreferrer">{formData.personalInfo.linkedin}</a>
                        </p>

                        <p className={`${getFontSizeClass()} flex items-center gap-1`}>
                            {formData.personalInfo.github && <span className="font-medium -mt-[4px] "><BiLogoGithub className={`${getFontSizeClass()}`} /></span>}
                            <a href={formData.personalInfo.github} target="_blank" rel="noreferrer">{formData.personalInfo.github}</a>
                        </p>

                    </div></div>

                {/* Summer Training */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Summer Training</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    {formData.summerTraining.map((training, index) => (
                        <div key={index} className={`${getFontSizeClass()}`}>
                            <div className={`flex justify-between`}>
                                <p className={`font-semibold ${getHeadingFontSizeClass()}`}>{training.title}</p>
                                <p >{training.date}</p>
                            </div>
                            <div className={``}>
                                <span >{training.organization}</span>
                                {" "}
                                {training.location && <span>|</span>}
                                {" "}
                                <span >{training.location}</span>
                            </div>
                            <Markdown className={`ml-4 break-normal`}>{training.description}</Markdown>
                        </div>
                    ))}
                </div>

                {/* Projects */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Projects</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    {formData.projects.map((project, index) => (
                        <div key={index} className={`${getFontSizeClass()}`}>
                            <div className={`flex justify-between gap-4`}>
                                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>{project.title}</p>
                                <p className=" ">{project.date}</p>
                            </div>
                            <div className={``}>
                                <span >{project.domain}</span>
                                {" "}
                                {project.technologies && <span>|</span>}
                                {" "}
                                <span >{project.technologies}</span>
                            </div>
                            <Markdown className={`ml-4 break-normal`}>{project.description}</Markdown>
                        </div>
                    ))}
                </div>
                {/* Achievements */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Achievements</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    {formData.achievements.map((achievement, index) => (
                        <div key={index} className={`${getFontSizeClass()}`}>
                            <div className={`flex justify-between gap-4`}>
                                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>{achievement.title}</p>
                                <p className=" ">{achievement.date}</p>
                            </div>
                            <Markdown className={`ml-4 break-normal`}>{achievement.description}</Markdown>
                        </div>
                    ))}
                </div>

                {/* Certification */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Certification</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    {formData.certifications.map((certification, index) => (
                        <div key={index} className={`${getFontSizeClass()}`}>
                            <div className={`flex justify-between gap-4`}>
                                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>{certification.title}</p>
                                <p className=" ">{certification.date}</p>
                            </div>
                            <div className={``}>
                                <span >{certification.issuedBy}</span>
                                {" "}
                                {certification.link && <span>|</span>}
                                {" "}
                                {certification.link && <a href={certification.link} target="_blank" rel="noreferrer">Certificate Link</a>}
                            </div>
                            <Markdown className={`ml-4 break-normal`}>{certification.description}</Markdown>
                        </div>
                    ))}
                </div>


                {/* Skills */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Skills</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    <div className={`flex flex-col gap-1 ${getFontSizeClass()}`}>
                        {formData.technicalSkills.map((skill, index) => (
                            <div key={index} className={`block break-all`}>
                                <div className={`flex `}>
                                    <span className="font-semibold">
                                        {skill.domain}
                                        {skill.domain && ':'}
                                    </span>
                                    {skill.skills.map((tag, index) => (
                                        <span key={tag.id} className={index === skill.skills.length - 1 ? '' : 'mr-2'}>    
                                        {tag.text}{index !== skill.skills.length - 1 && ','}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className={`mt-4`}>
                    <p className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}>Education</p>
                    <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
                    {formData.education.map((education, index) => (
                        <div key={index} className={`${getFontSizeClass()}`}>
                            <div className={`flex justify-between gap-4`}>
                                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>{education.degree}</p>
                                <p className=" ">{education.date}</p>
                            </div>
                            <div className={`flex justify-between gap-4`}>
                                <div>
                                    <span >{education.institute}</span>
                                    {" "}
                                    {education.location && <span>|</span>}
                                    {" "}
                                    <span >{education.location}</span>
                                </div>
                                <div>
                                    <span >{education.scoreType}</span>
                                    {" "}
                                    {education.score && <span>|</span>}
                                    {" "}
                                    <span >{education.score}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>

    );
};

export default Template2;
