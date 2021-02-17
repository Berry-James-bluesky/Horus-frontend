import React from 'react';
import { Pie } from 'react-chartjs-2';

/**
 * Generates a Pie graph out of supplied data
 *
 * @prop {object} graphData
 * @prop {object} graphOptions
 */

interface Props {
    graphData: {}
    graphOptions: {}
}

const PieGraph = (props: Props) => {

    return(

        <Pie
            data={props.graphData}
            options={props.graphOptions}
        />


    )

}

export default PieGraph