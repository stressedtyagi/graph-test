import React, { useRef, useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasChart = () => {
  const chartRef = useRef(null);

  const addSymbols = (e) => {
    const suffixes = ["", "K", "M", "B"];
    const order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );
    const suffix = suffixes[order];
    return (
      CanvasJSReact.CanvasJS.formatNumber(e.value / Math.pow(1000, order)) +
      suffix
    );
  };

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  useEffect(() => {
    const options = {
      animationEnabled: true,
      colorSet: "colorSet2",
      title: {
        text: "CanvasJSChart",
      },
      axisX: {
        valueFormatString: "MMMM",
      },
      axisY: {
        prefix: "$",
        labelFormatter: addSymbols,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries,
        verticalAlign: "top",
      },
      data: [
        {
          type: "column",
          name: "Dataset 1",
          showInLegend: true,
          xValueFormatString: "MMMM YYYY",
          yValueFormatString: "$#,##0",
          dataPoints: new Array(120).fill(0).map((_, i) => ({
            x: new Date(2017, i),
            y: Math.floor(Math.random() * 1000),
          })),
        },
        {
          type: "line",
          name: "Dataset 2",
          showInLegend: true,
          yValueFormatString: "$#,##0",
          dataPoints: new Array(120).fill(0).map((_, i) => ({
            x: new Date(2017, i),
            y: Math.floor(Math.random() * 1000),
          })),
        },
        {
          type: "line",
          name: "Dataset 3",
          showInLegend: true,
          yValueFormatString: "$#,##0",
          dataPoints: new Array(120).fill(0).map((_, i) => ({
            x: new Date(2017, i),
            y: Math.floor(Math.random() * 1000),
          })),
        },
        // {
        //   type: "area",
        //   name: "Profit",
        //   markerBorderColor: "white",
        //   markerBorderThickness: 2,
        //   showInLegend: true,
        //   yValueFormatString: "$#,##0",
        //   dataPoints: [
        //     { x: new Date(2017, 0), y: 11500 },
        //     { x: new Date(2017, 1), y: 10500 },
        //     { x: new Date(2017, 2), y: 9000 },
        //     { x: new Date(2017, 3), y: 13500 },
        //     { x: new Date(2017, 4), y: 13890 },
        //     { x: new Date(2017, 5), y: 18500 },
        //     { x: new Date(2017, 6), y: 16000 },
        //     { x: new Date(2017, 7), y: 14500 },
        //     { x: new Date(2017, 8), y: 15880 },
        //     { x: new Date(2017, 9), y: 24000 },
        //     { x: new Date(2017, 10), y: 31000 },
        //     { x: new Date(2017, 11), y: 19000 },
        //   ],
        // },
      ],
    };

    if (chartRef.current) {
      chartRef.current.options = options;
      chartRef.current.render();
    }
  }, []);

  return (
    <div>
      <CanvasJSReact.CanvasJSChart
        options={null}
        onRef={(ref) => (chartRef.current = ref)}
      />
    </div>
  );
};

export default CanvasChart;
