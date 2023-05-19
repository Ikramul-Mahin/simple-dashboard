import React from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const GraphChart = () => {
    const data = [
        {
            name: "Jan",
            count: 100,
            uv: 50,
            pv: 100,
            amt: 2400
        },
        {
            name: "Feb",
            count: 200,
            uv: 100,
            pv: 200,
            amt: 2210
        },
        {
            name: "Mar",
            count: 300,
            uv: 80,
            pv: 300,
            amt: 2290
        },
        {
            name: "Apr",
            count: 400,
            uv: 200,
            pv: 400,
            amt: 2000
        },
        {
            name: "May",
            count: 500,
            uv: 250,
            pv: 4800,
            amt: 2181
        },
        // {
        //     name: "Jun",
        //     uv: 2390,
        //     pv: 3800,
        //     amt: 2500
        // },
        // {
        //     name: "July",
        //     uv: 3490,
        //     pv: 4300,
        //     amt: 2100
        // }
    ];
    return (
        <div className='bg-stone-100 rounded-md p-6 mr-6'>
            <div>
                <h2>Sales Overview</h2>
                <div className='flex'>
                    <BsArrowUp className='text-green-600'></BsArrowUp>
                    <h3> <span></span> 4% more in 2022 </h3>
                </div>
            </div>
            <LineChart width={400} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis dataKey="count" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default GraphChart;