import React from 'react';
import { Pie, Bar, Doughnut, Bubble, Line, Radar, Polar, HorizontalBar, Scatter } from 'react-chartjs-2';

/**
 * Generates a Pie graph out of supplied data
 *
 * @prop {object} graphData
 * @prop {object} graphOptions
 */

interface Props {
    graphType: any
    graphData: Array<number>
    graphLabels: Array<string>
    graphName: string
}

const Graph = (props: Props) => {

    const data = {
        labels: props.graphLabels,
        datasets: [{
            label: props.graphName,
            data: props.graphData,
            backgroundColor: [
                '#e97568',
                '#f5e09f',
                '#aac1a7',
                '#9a9174',
                '#59899c',
                '#045171'
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

    let date = new Date();

    let string = date.toString()



    if(props.graphType === 'Pie') {

        return(
            <Pie
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Bar') {

        return(
            <Bar
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Line') {

        return(
            <Line
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Radar') {

        return(
            <Radar
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Polar') {

        return(
            <Polar
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Doughnut') {

        return(
            <Doughnut
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Horizontal') {

        return(
            <HorizontalBar
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Scatter') {

        return(
            <Scatter
                data={data}
                options={options}
            />
        )
    };
    if(props.graphType === 'Bubble') {

        return(
            <Bubble
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