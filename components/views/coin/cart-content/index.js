import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useContext } from "react";
import HeaderContext from "context/headerContext";
import CoinContext from "context/coinContext";

let range = (n) => [...Array(n).keys()];

function ChartContent() {
  const { dark } = useContext(HeaderContext);
  const { coin, chart } = useContext(CoinContext);

  const [state, setState] = useState({
    type: "line",
    labels: range(chart.length),
    datasets: [
      {
        label: coin.name,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: chart && chart.flatMap((x) => x[1]),
      },
    ],
  });

  useEffect(() => {
    setState({
      type: "line",
      labels: range(chart.length),
      datasets: [
        {
          label: "USD",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "#FDA859",
          borderWidth: 2,
          data: chart.flatMap((x) => x[1]),
        },
      ],
    });
  }, [chart]);

  return (
    <div
      style={{
        padding: "2rem 1rem 1rem 1rem",
        marginRight: "20rem",
        marginLeft: "20rem",
      }}
    >
      <div className="flex items-center">
        <div
          style={{
            fontSize: "1.6rem",
            color: dark ? "#222121" : "#8A8989",
            transition: "all 1s",
          }}
        >
          Price Change Chart
        </div>
        <div
          className="flex items-center"
          style={{
            marginLeft: "3rem",
          }}
        >
          <div
            style={{
              color: dark ? "#222121" : "#8A8989",
              fontSize: "1.2rem",
              fontWeight: "300",
              marginRight: "1rem",
            }}
          >
            1M Change
          </div>
          <div
            className={`${
              Math.sign(+coin.priceChange1w) === 1 ? "arrow-up" : "arrow-down"
            }`}
          ></div>
          <div
            className="flex items-center"
            style={{
              color:
                Math.sign(+coin.priceChange1w) === 1 ? "#34c759" : "#ff3a30",
              fontSize: "1rem",
            }}
          >
            {`${coin.priceChange1w}%`}
          </div>
        </div>
      </div>
      <div
        style={{
          height: "400px",
          marginTop: "1rem",
        }}
      >
        <Line
          type="line"
          data={state}
          options={{
            tooltips: {
              mode: "x",
            },
            // elements: {
            //   point: {
            //     radius: 0,
            //   },
            // },
            maintainAspectRatio: false,
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
      <style jsx>{`
        .arrow-up {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 8px solid #34c759;
          margin-right: 4px;
        }
        .arrow-down {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 8px solid #ff3a30;
          margin-right: 4px;
        }
      `}</style>
    </div>
  );
}

export default ChartContent;
