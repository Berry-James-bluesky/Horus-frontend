import React from 'react';
import { Bar } from 'react-chartjs-2';

/**
 * Generates a bar graph out of supplied data
 *
 * @typedef Props
 * @prop {object} graphData
 * @prop {object} graphOptions
 *
 */


interface Props {
    graphData: {}
    graphOptions: {}
}

const BarGraph = (props: Props) => {

    return(

        <Bar
            data={props.graphData}
            options={props.graphOptions}
        />

    )

}

export default BarGraph