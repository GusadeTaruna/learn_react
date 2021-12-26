import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataValues = props.data.map(data => data.value);
    const totalMax = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.data.map(function (data) {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMax}
            label={data.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
