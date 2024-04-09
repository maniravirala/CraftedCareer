import React from 'react';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiSolidMap, BiSolidPhone } from 'react-icons/bi';
import dayjs from 'dayjs';
import { Divider } from 'antd';
import Markdown from 'react-markdown';

import { useFormData } from "../../contexts/Data/FormDataContext";

const Template1 = () => {

  const { formData } = useFormData();

  const formatDate = (date) => {
    if (date.length > 0) {
      return dayjs(date, 'MM/YYYY').format('MMM YYYY');
    }
    else {
      return 'Present';
    }
  };


  return (
    <div className=' overflow-y-auto w-full' //max-h-[82vh]
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="bg-gray-100 text-gray-800" style={{ width: '210mm', minHeight: '297mm', margin: '0 auto' }}>
        <div className="bg-background text-main px-4 py-4 flex gap-6 justify-between">
          <div className="w-[20%] flex items-center justify-center">
            {/* <img src='https://via.placeholder.com/120' alt='profile' className='rounded-full' /> */}
            <img
              src={formData.profilePic || 'https://via.placeholder.com/120'}
              alt='profile'
              className='rounded-full w-[120px] h-[120px]'
            />


          </div>
          <div className="max-w-[40%] flex flex-col justify-center items-center uppercase break-all">
            <span className='text-center text-2xl font-bold'>{formData.personalInfo.name}</span>
            <span className='text-center text-sm'>{formData.personalInfo.position}</span>
          </div>
          <div className="max-w-[40%] min-w-[25%] text-xs flex justify-center break-all flex-wrap items-start flex-col"
          >
            <div className='flex flex-col gap-2 justify-center items-start'>
              <div className='flex gap-1 items-center'>
                <BiLogoGmail size="1rem" />
                <div>{formData.personalInfo.email}</div>
              </div>
              <div className='flex gap-1 items-center'>
                <BiSolidPhone size="1rem" />
                <div>{formData.personalInfo.phone}</div>
              </div>
              <div className='flex gap-1 items-center'>
                <BiSolidMap size="1rem" />
                <div>{formData.personalInfo.address}</div>
              </div>
              <div className='flex gap-1 items-center'>
                <BiLogoGithub size="1rem" />
                {/* <div>{formData.personalInfo.github}</div> */}
                <a href={formData.personalInfo.github} target="_blank" rel="noreferrer">{formData.personalInfo.github}</a>
              </div>
              <div className='flex gap-1 items-center'>
                <BiLogoLinkedinSquare size="1rem" />
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
          <div className="col-span-1 p-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Summary</h1>
              <p className=" text-xs">{formData.personalInfo.summary}</p>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Technical Skills</h1>
              <div className="flex flex-col gap-1">
                {formData.technicalSkills.map((skill, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <h1 className="font-semibold">{skill.content.domain}:</h1>
                    <div className='flex flex-wrap ml-4'>
                      {skill.content.skills.map((tag, index) => (
                        <span key={tag.id} className={index === skill.content.skills.length - 1 ? '' : 'mr-2'}>
                          {tag.content}{index !== skill.content.skills.length - 1 && ','}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Certifications</h1>

              <ul className="flex flex-col gap-1">
                {formData.certifications.map((certification, index) => (
                  <li key={index} className="ml-4">
                    <div className="text-xs flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className=" ">{certification.title}</span>
                      </div>
                      <div className="flex gap-2">
                        <span>{certification.issuedBy}</span>
                        <span>|</span>
                        <span>{formatDate(certification.date)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Extra Curricular Activities</h1>
              <ul className='flex flex-col gap-1'>
                {formData.extraCurricularActivities.map((activity, index) => (
                  <li key={index} className="ml-4 list-disc">
                    <div className="text-xs flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className=" ">{activity.activity}</span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <span>{formatDate(activity.date)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>

          </div>

          <div className="col-span-1 bg-main my-6 rounded-lg">
          </div>

          <div className="col-span-1 p-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Internship</h1>
              {/* <span>{formData.visibility.internships ? "True" : "False"}</span> */}
              <div className="flex flex-col gap-1">
                {formData.internships.map((intern, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1 className="font-semibold ">{intern.company}</h1>
                      <span>{formatDate(intern.date[0])} - {formatDate(intern.date[1])}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>{intern.position}</span>
                      <span>|</span>
                      <span>{intern.location}</span>
                    </div>
                    <div className="flex gap-2">
                      <p>{intern.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Summer Training</h1>
              <div className="flex flex-col gap-1">
                {formData.summerTraining.map((training, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1 className="font-semibold ">{training.title}</h1>
                      <span>{formatDate(training.date[0])} - {formatDate(training.date[1])}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>{training.organization}</span>
                      <span>|</span>
                      <span>{training.location}</span>
                    </div>
                    <div className="flex gap-2">
                      {/* <p>{training.description}</p> */}
                      <Markdown className={'ml-4'}
                      >{training.description}</Markdown>
                    </div>
                  </div>
                ))}
              </div>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Projects</h1>
              <div className="flex flex-col gap-1">
                {formData.projects.map((project, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1 className="font-semibold ">{project.title}</h1>
                      <span>{formatDate(project.date)}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>{project.domain}</span>
                      <span>|</span>
                      <span>{project.technologies}</span>
                    </div>
                    <div className="flex gap-2">
                      {/* <p>{project.description}</p> */}
                      <Markdown className={'ml-4'}
                      >{project.description}</Markdown>
                    </div>
                  </div>
                ))}
              </div>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Achievements</h1>
              <div className="flex flex-col gap-1">
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1 className="font-semibold ">{achievement.title}</h1>
                      <span>{formatDate(achievement.date)}</span>
                    </div>
                    <div className="flex gap-2">
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold uppercase text-main">Education</h1>
              <div className="flex flex-col gap-1">
                {formData.education.map((edu, index) => (
                  <div key={index} className="text-xs flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1 className="font-semibold ">{edu.degree}</h1>
                      <span>{formatDate(edu.date[0])} - {formatDate(edu.date[1])}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className='flex gap-2'>
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
              <Divider className='bg-main h-[2px] rounded-lg mt-1 mb-3' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Template1;