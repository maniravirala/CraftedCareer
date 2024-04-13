import React from 'react';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiSolidMap, BiSolidPhone } from 'react-icons/bi';
import { Divider } from 'antd';
import Markdown from 'react-markdown';

import { useFormData } from "../../contexts/Data/FormDataContext";

const Template1 = () => {

  const { formData } = useFormData();
  const settings = formData.settings || {};

  const getFontSizeClass = () => {
    if (settings.fontSize <= 12) return 'text-xs';
    else if (settings.fontSize <= 14) return 'text-sm';
    else if (settings.fontSize <= 16) return 'text-base';
    else if (settings.fontSize <= 18) return 'text-lg';
    else if (settings.fontSize <= 20) return 'text-xl';
    else return 'text-xs';
  }

  const getHeadingFontSizeClass = () => {
    if (settings.fontSize <= 12) return 'text-sm';
    else if (settings.fontSize <= 14) return 'text-base';
    else if (settings.fontSize <= 16) return 'text-lg';
    else if (settings.fontSize <= 18) return 'text-xl';
    else if (settings.fontSize <= 20) return 'text-2xl';
    else return 'text-sm';
  }

  const getLineHeightClass = () => {
    if (settings.lineHeight === 0) return 'gap-0';
    else if (settings.lineHeight <= 2) return 'gap-0.5';
    else if (settings.lineHeight <= 4) return 'gap-1';
    else if (settings.lineHeight <= 6) return 'gap-1.5';
    else if (settings.lineHeight <= 8) return 'gap-2';
    else if (settings.lineHeight <= 10) return 'gap-2.5';
    else if (settings.lineHeight <= 12) return 'gap-3';
    else if (settings.lineHeight <= 14) return 'gap-3.5';
    else if (settings.lineHeight <= 16) return 'gap-4';
    else if (settings.lineHeight <= 18) return 'gap-[1.125rem]';
    else if (settings.lineHeight <= 20) return 'gap-5';
    else return 'gap-2';
  }

  const getPageMarginClass = () => {
    if (settings.pageMargins <= 12) return 'p-3';
    else if (settings.pageMargins <= 14) return 'p-3.5';
    else if (settings.pageMargins <= 16) return 'p-4';
    else if (settings.pageMargins <= 20) return 'p-5';
    else if (settings.pageMargins <= 24) return 'p-6';
    else if (settings.pageMargins <= 28) return 'p-7';
    else if (settings.pageMargins <= 32) return 'p-8';
    else if (settings.pageMargins <= 36) return 'p-9';
    else if (settings.pageMargins <= 40) return 'p-10';
    else return 'p-6';
  }

  const getFontFamilyClass = () => {
    switch (settings.fontFamily) {
      case "Arial":
        return "font-sans";
      case "Courier New":
        return "font-mono";
      case "Poppins":
        return "font-poppins";
      case "Roboto":
        return "font-roboto";
      case "Times New Roman":
        return "font-serif";
      case "Verdana":
        return "font-verdana";
      default:
        return "font-poppins";
    }
  };

  const getTitleCaseClass = () => {
    switch (settings.titleCase) {
      case "Uppercase":
        return "uppercase";
      case "Lowercase":
        return "lowercase";
      case "Capitalize":
        return "capitalize";
      default:
        return "uppercase";
    }
  };

  console.log(getFontFamilyClass(), getTitleCaseClass())


  return (
    <div id='a4' className={`${getFontFamilyClass()} bg-white text-black `} style={{ width: '210mm', height: '297mm', margin: '0 auto' }}>
      <div className={`${getPageMarginClass()} text-border bg-main-template1 text-main flex gap-6 justify-between`}>
        <div className="w-[20%] flex items-center justify-center">
          {/* <img src='https://via.placeholder.com/120' alt='profile' className='rounded-full' /> */}
          <img
            src={formData.profilePic || 'https://via.placeholder.com/120'}
            alt='profile'
            className='rounded-full w-[120px] h-[120px]'
          />


        </div>
        <div className={` max-w-[40%] flex flex-col justify-center items-center break-all uppercase`}>
          <span className='text-center text-2xl font-bold'>{formData.personalInfo.name}</span>
          <span className={`text-center text-sm `}>{formData.personalInfo.position}</span>
        </div>
        <div className={`${getFontSizeClass()} max-w-[40%] min-w-[25%] flex justify-center break-all flex-wrap items-start flex-col`}
        >
          <div className={`${getLineHeightClass()} flex flex-col justify-center items-start`}>
            <div className='flex gap-1 items-center'>
              <div className='bg-border p-1 rounded-full'><BiLogoGmail size="0.825rem" className='text-white'/></div>
              <div>{formData.personalInfo.email}</div>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-border p-1 rounded-full'><BiSolidPhone size="0.825rem" className='text-white' /></div>
              <div>{formData.personalInfo.phone}</div>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-border p-1 rounded-full'><BiSolidMap size="0.825rem" className='text-white' /></div>
              <div>{formData.personalInfo.address}</div>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-border p-1 rounded-full'><BiLogoGithub size="0.825rem" className='text-white' /></div>
              {/* <div>{formData.personalInfo.github}</div> */}
              <a href={formData.personalInfo.github} target="_blank" rel="noreferrer">{formData.personalInfo.github}</a>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-border p-1 rounded-full'><BiLogoLinkedinSquare size="0.825rem" className='text-white' /></div>
              {/* <div>{formData.personalInfo.linkedin}</div> */}
              <a href={formData.personalInfo.linkedin} target="_blank" rel="noreferrer">{formData.personalInfo.linkedin}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid " style={{
        gridTemplateColumns: '1fr 2px 2fr',
        width: '210mm', // A4 paper width
        wordWrap: 'break-word', // Wrap long words
        overflowWrap: 'anywhere', // Wrap overflowing content
      }}
      >
        <div className={`${getPageMarginClass()} col-span-1`}>
          <div className={`${getLineHeightClass()} flex flex-col`}>
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Summary</h1>
            <p className={`${getFontSizeClass()}`}>{formData.personalInfo.summary}</p>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>

          <div className={`${getLineHeightClass()} flex flex-col`}>
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Technical Skills</h1>
            <div className="flex flex-col gap-1">
              {formData.technicalSkills.map((skill, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <h1 className="font-semibold">{skill.domain}:</h1>
                  <div className='flex flex-wrap ml-4'>
                    {skill.skills.map((tag, index) => (
                      <span key={tag.id} className={index === skill.skills.length - 1 ? '' : 'mr-2'}>
                        {tag.text}{index !== skill.skills.length - 1 && ','}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>

          <div className={`flex flex-col ${getLineHeightClass()} ${formData.visibility.certifications ? '' : 'hidden'}`} >
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Certifications</h1>

            <ul className="flex flex-col gap-0">
              {formData.certifications.map((certification, index) => (
                <li key={index} className="ml-4 ">
                  <div className={`${getFontSizeClass()} flex flex-col gap-0`}>
                    <div className="flex justify-between">
                      <span className=" ">{certification.title}</span>
                    </div>
                    <div className={`${getLineHeightClass()} flex`}>
                      <span>{certification.issuedBy}</span>
                      <span>|</span>
                      <span>{certification.date}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>

          <div className={`flex flex-col ${getLineHeightClass()} ${formData.visibility.extraCurricularActivities ? '' : 'hidden'}`} >
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Extra Curricular Activities</h1>
            <ul className='flex flex-col gap-1'>
              {formData.extraCurricularActivities.map((activity, index) => (
                <li key={index} className="ml-4 list-disc">
                  <div className={`${getFontSizeClass()} flex flex-col gap-0`}>
                    <div className="flex justify-between">
                      <span className=" ">{activity.activity}</span>
                    </div>
                    <div className="flex justify-end gap-0">
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>

        </div>

        <div className="col-span-1 bg-border my-6 rounded-lg">
        </div>

        <div className={`${getPageMarginClass()} col-span-1`}>
          <div className={`flex flex-col ${getLineHeightClass()} ${formData.visibility.internships ? '' : 'hidden'}`} >
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Internship</h1>
            {/* <span>{formData.visibility.internships ? "True" : "False"}</span> */}
            <div className={`${getLineHeightClass()} flex flex-col `}>
              {formData.internships.map((intern, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <div className="flex justify-between">
                    <h1 className="font-semibold ">{intern.company}</h1>
                    <span>{intern.date}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    <span>{intern.position}</span>
                    <span>|</span>
                    <span>{intern.location}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    <p>{intern.experience}</p>
                  </div>
                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>
          <div className={`flex flex-col ${getLineHeightClass()} ${formData.visibility.summerTraining ? '' : 'hidden'}`}>
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Summer Training</h1>
            <div className={`${getLineHeightClass()} flex flex-col `}>
              {formData.summerTraining.map((training, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <div className="flex justify-between">
                    <h1 className="font-semibold ">{training.title}</h1>
                    <span>{training.date}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    <span>{training.organization}</span>
                    <span>|</span>
                    <span>{training.location}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    {/* <p>{training.description}</p> */}
                    <Markdown className={'ml-4'}
                    >{training.description}</Markdown>
                  </div>
                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>
          <div className={`flex flex-col ${getLineHeightClass()}${formData.visibility.projects ? '' : 'hidden'}`} >
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Projects</h1>
            <div className={`${getLineHeightClass()} flex flex-col `}>
              {formData.projects.map((project, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <div className="flex justify-between">
                    <h1 className="font-semibold ">{project.title}</h1>
                    <span>{project.date}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    <span>{project.domain}</span>
                    <span>|</span>
                    <span>{project.technologies}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    {/* <p>{project.description}</p> */}
                    <Markdown className={'ml-4'}
                    >{project.description}</Markdown>
                  </div>
                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>
          <div className={`flex flex-col ${getLineHeightClass()} ${formData.visibility.achievements ? '' : 'hidden'}`} >
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Achievements</h1>
            <div className="flex flex-col gap-1">
              {formData.achievements.map((achievement, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <div className="flex justify-between">
                    <h1 className="font-semibold ">{achievement.title}</h1>
                    <span>{achievement.date}</span>
                  </div>
                  <div className={`flex ${getLineHeightClass()}`}>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>
          <div className={`${getLineHeightClass()} flex flex-col `}>
            <h1 className={`${getTitleCaseClass()} ${getHeadingFontSizeClass()} font-semibold text-main`}>Education</h1>
            <div className="flex flex-col gap-1">
              {formData.education.map((edu, index) => (
                <div key={index} className={`${getFontSizeClass()} flex flex-col ${getLineHeightClass()}`}>
                  <div className="flex justify-between">
                    <h1 className="font-semibold ">{edu.degree}</h1>
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className={`flex ${getLineHeightClass()}`}>
                      <span>{edu.institute}</span>
                      <span>|</span>
                      <span>{edu.location}</span>
                    </div>
                    <div>
                      <span className={`${edu.scoreType === 'cgpa' ? 'uppercase' : 'capitalize'} `}>
                        {edu.scoreType}: {edu.score}
                      </span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Divider className='bg-border h-[2px] rounded-lg mt-1 mb-3' />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Template1;