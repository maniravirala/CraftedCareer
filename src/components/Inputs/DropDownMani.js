import React from 'react';
import { Select } from 'antd';

const DropDownMani = ({ className, handleChange, index, value, options }) => (
    <Select
        defaultValue={value}
        onChange={(value) => { handleChange(value, index) }}
        className={className}
        // style={{ width: 100 }}
        options={options}
    />
);

export default DropDownMani;
