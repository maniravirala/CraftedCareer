import React from "react";
import Markdown from "react-markdown";
import { useFormData } from "../../contexts/Data/FormDataContext";
import { useTemplateOrder } from "../../contexts/Data/TemplateOrderContext";
import SortableList from "../../components/DragNDropHOC/SortableList";

const Test = () => {
  const {
    formData,
    getFontSizeClass,
    getHeadingFontSizeClass,
    getLineHeightClass,
    getPageMarginClass,
    getFontFamilyClass,
    getTitleCaseClass,
  } = useFormData();

  const { templateOrder, updateTemplateOrder } = useTemplateOrder();

  const SummerTraining = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.summerTraining.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${
            formData.visibility.summerTraining ? "" : "hidden"
          } `}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()}`}
          >
            Summer Training
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.summerTraining.map((training, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()} `}
            >
              <div className={`flex justify-between`}>
                <p className={`font-semibold ${getHeadingFontSizeClass()}`}>
                  {training.title}
                </p>
                <p>{training.date}</p>
              </div>
              <div className={``}>
                <span>{training.organization}</span>{" "}
                {training.location && <span>|</span>}{" "}
                <span>{training.location}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {training.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Internships = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.internships.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${
            formData.visibility.internships ? "" : "hidden"
          }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Internships
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.internships.map((internship, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {internship.company}
                </p>
                <p className=" ">{internship.date}</p>
              </div>
              <div className={``}>
                <span>{internship.position}</span>{" "}
                {internship.location && <span>|</span>}{" "}
                <span>{internship.location}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {internship.experience}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Projects = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.projects.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()} ${
            formData.visibility.projects ? "" : "hidden"
          }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Projects
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.projects.map((project, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {project.title}
                </p>
                <p className=" ">{project.date}</p>
              </div>
              <div className={``}>
                <span>{project.domain}</span>{" "}
                {project.technologies && <span>|</span>}{" "}
                <span>{project.technologies}</span>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {project.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Achievements = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.achievements.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()}  ${
            formData.visibility.achievements ? "" : "hidden"
          }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Achievements
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.achievements.map((achievement, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {achievement.title}
                </p>
                <p className=" ">{achievement.date}</p>
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {achievement.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Certifications = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.certifications.length > 0 && (
        <div
          className={`mt-4 flex flex-col w-full ${getLineHeightClass()}  ${
            formData.visibility.certifications ? "" : "hidden"
          }`}
        >
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()} `}
          >
            Certification
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.certifications.map((certification, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {certification.title}
                </p>
                <p className=" ">{certification.date}</p>
              </div>
              <div className={``}>
                <span>{certification.issuedBy}</span>{" "}
                {certification.link && <span>|</span>}{" "}
                {certification.link && (
                  <a href={certification.link} target="_blank" rel="noreferrer">
                    Certificate Link
                  </a>
                )}
              </div>
              <Markdown className={`ml-4 break-normal`}>
                {certification.description}
              </Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const Skills = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.technicalSkills.length > 0 && (
        <div className={`mt-4 flex flex-col w-full ${getLineHeightClass()} `}>
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Skills
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          <div
            className={`flex flex-col gap-1 ${getLineHeightClass()}  ${getFontSizeClass()}`}
          >
            {formData.technicalSkills.map((skill, index) => (
              <div key={index} className={`block break-all`}>
                <div className={`flex `}>
                  <span className="font-semibold">
                    {skill.domain}
                    {skill.domain && ":"}
                  </span>
                  {skill.skills.map((tag, index) => (
                    <span
                      key={tag.id}
                      className={
                        index === skill.skills.length - 1 ? "" : "mr-2"
                      }
                    >
                      {tag.text}
                      {index !== skill.skills.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const Education = () => (
    <div className="w-full m-0 p-0 flex flex-grow">
      {formData.education.length > 0 && (
        <div className={`mt-4 flex flex-col w-full ${getLineHeightClass()} `}>
          <p
            className={`font-bold ${getTitleCaseClass()} ${getHeadingFontSizeClass()} ${getLineHeightClass()}`}
          >
            Education
          </p>
          <div className={`divider h-[1px] w-full bg-black mt-0 mb-2`} />
          {formData.education.map((education, index) => (
            <div
              key={index}
              className={` flex flex-col ${getLineHeightClass()} ${getFontSizeClass()}`}
            >
              <div className={`flex justify-between gap-4`}>
                <p className={` font-semibold ${getHeadingFontSizeClass()}`}>
                  {education.degree}
                </p>
                <p className=" ">{education.date}</p>
              </div>
              <div className={`flex justify-between gap-4`}>
                <div>
                  <span>{education.institute}</span>{" "}
                  {education.location && <span>|</span>}{" "}
                  <span>{education.location}</span>
                </div>
                <div>
                  <span>{education.scoreType}</span>{" "}
                  {education.score && <span>|</span>}{" "}
                  <span>{education.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // const [templateItems, setTemplateItems] = useState([
  //   { id: "1", component: <Education /> },  
  //   { id: "2", component: <Skills /> },
  //   { id: "3", component: <Projects /> },
  //   { id: "4", component: <Internships /> },
  //   { id: "5", component: <SummerTraining /> },
  //   { id: "6", component: <Achievements /> },
  //   { id: "7", component: <Certifications /> }
  // ]);

  const ComponentMappings = {
    Education: <Education />,
    Skills: <Skills />,
    Projects: <Projects />,
    Internships: <Internships />,
    SummerTraining: <SummerTraining />,
    Achievements: <Achievements />,
    Certifications: <Certifications />,
  };

  const templateItems = 
    templateOrder.template2.map((item) => ({
      id: item.id.toString(),
      component: ComponentMappings[item.component],
      key: item.component,
    })
  );

  const onSortTemplateItems = ({ oldIndex, newIndex }) => {
    // const newItems = [...templateItems];
    // const [removed] = newItems.splice(oldIndex, 1);
    // newItems.splice(newIndex, 0, removed);
    // setTemplateItems(newItems);
    const newTemplateItems = [...templateItems];
    const [removed] = newTemplateItems.splice(oldIndex, 1);
    newTemplateItems.splice(newIndex, 0, removed);
    updateTemplateOrder({
      template2: newTemplateItems.map((item, index) => ({
        id: index + 1,
        component: item.key,
      })),
    });

    document.body.style.cursor = "auto";
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto">
      <h1 className="text-3xl font-bold ">Resume Template</h1>
      <div
        id="a4"
        className={`bg-white text-black `}
        style={{
          width: "210mm",
          height: "297mm",
          margin: "0 auto",
          fontFamily: `${getFontFamilyClass()}`,
          // wordWrap: 'break-word',
          // overflowWrap: 'anywhere',
          wordBreak: "break-all",
        }}
      >         
       
        <div className={`flex flex-col h-full ${getPageMarginClass()}`}>
          <SortableList
            items={templateItems}
            onSortEnd={onSortTemplateItems}
            onSortStart={() => {
              document.body.style.cursor = "grabbing";
            }}
            lockToContainerEdges={true}
            lockAxis="y"
            helperClass={
              "w-full flex items-center border-2 border-dashed border-gray-500 shadow-lg rounded-lg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
