import React from "react";

const Template2 = ({ formData }) => {
    return (
        <div>
            <h1>Template 2</h1>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
}

export default Template2;