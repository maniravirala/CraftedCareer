import React from 'react';
import FormData from '../Data/FormData';
import Template1 from '../../components/Templates/Template1';
import Template2 from '../../components/Templates/Template2';
import Template3 from '../../components/Templates/Template3';

const DownloadResume = () => {
    const { formData } = FormData();
    const selectedTemplate = localStorage.getItem("selectedTemplate") || 'Template1';

    const TemplateComponent = {
        Template1: <Template1 formData={formData} />,
        Template2: <Template2 formData={formData} />,
        Template3: <Template3 formData={formData} />,
    }[selectedTemplate];

    return (
        <div>
            {TemplateComponent}
        </div>
    );
}

export default DownloadResume;
