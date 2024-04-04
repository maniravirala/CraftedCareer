import React from 'react';
import { DatePicker } from 'antd';
import * as dayjs from 'dayjs'

const DatePickerMani = ({ range, onChange, name, index, value }) => {
    const isValidDate = (date) => dayjs(date, 'MM/YYYY').isValid();

    const getDefaultValue = (date) => {
        return isValidDate(date) ? dayjs(date, 'MM/YYYY') : dayjs();
    };

    return range ? (
        <DatePicker.RangePicker
            picker='month'
            format='MM/YYYY'
            onChange={(date, dateString) => {
                onChange(date, dateString, index)
            }}
            name={name}
            defaultValue={[getDefaultValue(value[0]), getDefaultValue(value[1])]}
            className='peer outline-none rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]  w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none border-0 border-b-[2px]'
        />
    ) : (
        <DatePicker
            picker="month"
            format="MM/YYYY"
            onChange={(date, dateString) => {
                onChange(date, dateString, index)
            }}
            name={name}
            defaultValue={getDefaultValue(value)}
            className='peer outline-none rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none border-0 border-b-[2px]'
        />
    );
}

export default DatePickerMani;
