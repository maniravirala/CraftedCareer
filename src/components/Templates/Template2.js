import React from "react";
import Template1  from "./Template1";
import FormData from "../../app/Data/FormData";

const Template2 = () => {
    const { formData } = FormData();
    return (
        <Template1 formData={formData} />
    );
}

export default Template2;