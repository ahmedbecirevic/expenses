import ChartBar from "./ChartBar";
import styles from "./Chart.module.css";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maximumTotal = Math.max(...dataPointsValues);

  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumTotal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
