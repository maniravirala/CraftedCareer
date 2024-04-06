import React, { useState } from 'react';
import Template1 from '../../components/Templates/Template1';
import Template2 from '../../components/Templates/Template2';
import Template3 from '../../components/Templates/Template3';
import DropDownMani from '../../components/Inputs/DropDownMani';

const Preview = ({ formData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const storedTemplate = localStorage.getItem('selectedTemplate');
    return storedTemplate || 'Template1';
  });

  const TemplateComponent = {
    Template1: Template1,
    Template2: Template2,
    Template3: Template3,
  }[selectedTemplate];

  const handleTemplateChange = (value, index) => {
    setSelectedTemplate(value);
    localStorage.setItem('selectedTemplate', value);
  };

  return (
    <div>
      <DropDownMani
        className="h-full outline-none my-2"
        handleChange={handleTemplateChange}
        value={selectedTemplate}
        options={[
          {
            value: 'Template1',
            label: 'Template 1',
          },
          {
            value: 'Template2',
            label: 'Template 2',
          },
          {
            value: 'Template3',
            label: 'Template 3',
          },
        ]}
      />

      <TemplateComponent formData={formData} />
    </div>
  );
};

export default Preview;
