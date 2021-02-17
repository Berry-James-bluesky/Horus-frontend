import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import test from '../../../test.json';

/**
 * Multi-use dropdown-style filter powered by { react-select }
 * --
 * Filter types:
 * - Project Name
 * - User
 * - Client
 *
 * Filter type is determined by passed prop filterType
 */

interface Props {
    isType: string
    /** type of filter to be displayed */
}

export const Filter: React.FC<Props> = (props: Props) => {

    const [filterType, setFilterType] = useState('')
    /** value is set by props.isType */

    let filterOptions: Array<object> = [];

    /** Function runs on first render, checks for passed props.isType */

    const getData = () => {
        if(filterType === 'Project Name') {
            /** Loop through each item in fetched data (test in this case) */
            test.forEach(item => {
                let filterObj = {
                    "value": '',
                    "label": ''
                }
                /** set filterObj 'value' and 'label' to corresponding value from fetched data (in this case, the name is assigned as this is a 'Project Name' filter) */
                filterObj.value = item.name;
                filterObj.label = item.name;
                /** Push newly created filterObj to the filterOptions array (to be displayed in the react-select dropdown) */
                filterOptions.push(filterObj);
            });
        }

        if(filterType === 'User') {
            test.forEach(item => {
                let filterObj = {
                    "value": '',
                    "label": ''
                }
                filterObj.value = item.assignedTo;
                filterObj.label = item.assignedTo;
                filterOptions.push(filterObj);
            });
        }

        if(filterType === 'Client') {
            test.forEach(item => {
                let filterObj = {
                    "value": '',
                    "label": ''
                }
                filterObj.value = item.client;
                filterObj.label = item.client;
                filterOptions.push(filterObj);
            });
        }
    }

    useEffect(() => {
        /** set the filterType state to passed isType prop */
        setFilterType(props.isType);
        /** fetch data and assign it to dropdown */
        getData();
    }, []);

    return(
        <div className='w-60 ml-6 mr-6'>
            <Select placeholder={filterType} options={filterOptions} />
        </div>
    )

}