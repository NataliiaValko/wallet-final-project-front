import s from './GraphDetails.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';

drilldown(Highcharts);

const getData = (value, name) => {
  return [
    [`First ${name}`, value],
    [`Second ${name}`, value * 2],
  ];
};
const options = {
  chart: {
    type: 'column',
    events: {
      drilldown: function (e) {
        if (!e.seriesOptions) {
          var chart = this;
          if (e.point.name === 'NAMR') {
            chart.addSingleSeriesAsDrilldown(e.point, {
              name: 'New',
              color: 'green',
              data: getData(5, 'Johny'),
            });
            chart.addSingleSeriesAsDrilldown(e.point, {
              name: 'In Progress',
              color: 'blue',
              data: getData(2, 'Marry'),
            });
          }
          chart.applyDrilldown();
        }
      },
    },
  },
  title: {
    text: 'Testing Chart',
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#123E69',
    },
  },
  subtitle: {
    text: 'Click the columns to drilldown to each region',
  },

  xAxis: {
    type: 'category',
  },
  yAxis: {
    min: 0, // Lowest value to show on the yAxis
    title: {
      text: 'Counts', // Title for the yAxis
    },
  },
  legend: {
    enabled: true, // Enable/Disable the legend
  },

  tooltip: {
    shared: true, // If you have multiple series then all points in each category will show up on one tooltip
  },
  series: [
    {
      name: 'New',
      data: [
        {
          name: 'NAMR',
          y: 34,
          drilldown: true,
        },
      ],
    },
    {
      name: 'In Progress',
      data: [
        {
          name: 'NAMR',
          y: 66,
          drilldown: true,
        },
      ],
    },
  ],
};

const GraphDetails = () => {
  return (
    <div className={s.graphDetails}>
      <h2>ГРАФИКИ</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GraphDetails;
