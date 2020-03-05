import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';


const arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomArray = () => arrayValues.map(() => Math.random() * arrayValues.length);
const gettingData = () => ({
      labels: ['', '', '', '', '', '', ''],
      datasets: [
            {
                  label: 'Show Dates Here',
                  backgroundColor: 'rgba(0,230,200,1)',
                  borderColor: 'rgba(0,102,0,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(0,230,132,1)',
                  hoverBorderColor: 'rgba(0,102,0,1)',
                  data: randomArray(),
            }
      ]
});

const Graph = ({
      personId,
      data: initialData,
}) => {
      const [data, setData] = useState(initialData);

      useEffect(() => {
            setData(gettingData());
      }, [personId]);

      return (<Bar
            data={data}
            width={500}
            height={500}
            options={{
                  maintainAspectRatio: false
            }}
      />)
};

Graph.defaultProps = {
      data: gettingData(),
      personId: 0,
};

export default Graph;
