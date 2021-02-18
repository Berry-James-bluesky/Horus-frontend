import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

/**
 * Generates a Pie graph out of supplied data
 *
 * @prop {object} graphData
 * @prop {object} graphOptions
 */

interface Props {
    graphType: string
    graphData: Array<number>
    graphLabels: Array<string>
    graphName: string
}

const Graph = (props: Props) => {

    const data = {
        type: 'pie',
        labels: props.graphLabels,
        datasets: [{
            label: props.graphName,
            data: props.graphData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        title:{
            display:true,
            text: props.graphName,
            fontSize:20
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    if(props.graphType === 'bar') {
        return(
            <Bar
                data={data}
                options={options}
            />
        )
    };

    if(props.graphType === 'pie') {
        return(
            <Pie
                data={data}
                options={options}
            />
        )
    }

    else {
        return(<span></span>)
    }

}

export default Graph