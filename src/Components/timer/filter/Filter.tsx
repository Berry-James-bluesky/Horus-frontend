import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import test from '../../../test.json';
import { useSharedTimerState } from '../TimerContainer'
import { useSharedFilterState } from './FilterContainer';

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

    const {timerModel, setTimerModel, timerView, setTimerView} = useSharedTimerState();

    const [filterType, setFilterType] = useState(props.isType)
    /** value is set by props.isType */

    let filterOptionsArray: Array<object> = [];

    const [filterOptions, setFilterOptions]: any = useState(null);

    const {filterParams, setFilterParams} = useSharedFilterState();

    const [selectedOption, setSelectedOption]: any = useState(null);


    const filterTimers = (key: any, input: any) => {
        let filterArray: any = [];
        let result: any = '';
        let timerData: any = [];
        // if the input is id (user dropdown)
        if (input === 'user'){
          let timers = timerModel;
          filterArray = filterParams;
          filterArray['assignedTo'] = key;
          // set state of filter to include id param
          setFilterParams(filterArray);
          // if the filter has a check param
          if (filterParams.client) {
            // set todos to only the todos that are checked
            timers = timerModel.filter((obj: any) => obj.client === filterParams.client);
            console.log('client filter is', timers)
          }
          //console.log('filter is', filter)
          // set result to todos that either match the key user id OR the array of user ids includes the todo.user id
          result = timers.filter((obj: any) => obj.assignedTo === key || key.includes(obj.assignedTo));
        } 
        // if the input is a keyword (searchbar)
        if (input === 'client') {
          // set todos to the todos in the model
          filterArray = filterParams;
          let timers = timerModel;
          filterArray['client'] = key;
          setFilterParams(filterArray)
          // if there is an id filter and a check filter 
          if (filterParams.assignedTo) {
            // set todos to todos where the 'isComplete' value and the 'user' value are equal to the filter params
            timers = timerModel.filter((obj: any) => obj.assignedTo === filterParams.assignedTo);
          } 
          // set result to all the todos (already filtered by user dropdown/checkbox) that include the search keyword/letters
          result = timers.filter((obj: any) => obj.client === key);
        } 
        // set the todos in the formData to the filtered todos 
        timerData = result;
        console.log('TIMER DATA', timerData)
        // console.log('result is', result);
      
        // set the view state to the formData array
        setTimerView(timerData)
      }

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
                filterOptionsArray.push(filterObj);
                //console.log('the options are', filterOptions)
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
                filterOptionsArray.push(filterObj);
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
                filterOptionsArray.push(filterObj);
            });
        }
        setFilterOptions(filterOptionsArray);
    }

    useEffect(() => {
        /** set the filterType state to passed isType prop */
        setFilterType(props.isType);
        /** fetch data and assign it to dropdown */
        getData();
    }, []);

    useEffect(() => {
        if (!filterParams.user && !filterParams.client) {
            
        }
    }, [timerView])

    useEffect(()=> {
        console.log('timers are', timerModel)
        console.log('timerView is', timerView)
        console.log('filter options are', filterOptions)
        console.log('filter is', filterParams)
    }, [timerView])
    console.log('timerView is', timerView)

    return(
        <div className='w-60 ml-6 mr-6'>
            <Select placeholder={filterType} options={filterOptions} onChange={(e: any) => {setSelectedOption(e.value); filterTimers(e.value, filterType.toLowerCase())}} />
        </div>
    )

}