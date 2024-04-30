import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs'
import toast from 'react-hot-toast';

const DatePickerMani = ({ range, onChange, name, index, value, className }) => {
    const isValidDate = (date) => dayjs(date, 'MM/YYYY').isValid();

    const getDefaultValue = (date) => {
        return isValidDate(date) ? dayjs(date, 'MM/YYYY') : dayjs();
    };

    // const handleDateChange = (newValue, dateString, index) => {
    //     const updatedCertificates = [...certificates];
    //     updatedCertificates[index].date = newValue;
    //     setCertificates(updatedCertificates);
    //     handleChange(
    //       { target: { name: "certifications", value: updatedCertificates } },
    //       "certifications"
    //     );
    //   };

    return range ? (
        <DatePicker.RangePicker
            picker='month'
            format='MM/YYYY'
            onChange={(date, dateString) => {
                onChange(date, dateString, index)
            }}
            name={name}
            defaultValue={[getDefaultValue(value[0]), getDefaultValue(value[1])]}
            className={`${className} peer outline-none rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]  w-full p-3 focus:outline-none focus:ring-0 appearance-none border-0 border-success_mani-light`}
            onError={() => {
             toast.error('Some error occurred while selecting date');
            }}
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
            className={`${className} peer outline-none rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] block w-full p-3 focus:outline-none focus:ring-0 appearance-none border-0 border-success_mani-light`}
            onError={() => {
                toast.error('Some error occurred while selecting date');
            }}
        />
    );
}

export default DatePickerMani;
