import React from 'react';
import Select from 'react-select';

export const ChartView: React.FC = () => {

    const options = [
        {
            "value": "pie",
            "label": "pie"
        },
        {
            "value": "bar",
            "label": "bar"
        },
        {
            "value": "line",
            "label": "line"
        }
    ]


    return(
        <Select options={options} />
    )

}
