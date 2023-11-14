import React from "react";
import ReactApexChart from "react-apexcharts";

function LineChart() {
  // 데이터셋
  const series = [
    {
      data: [
        { x: "2023-05-12", y: 30 },
        { x: "2023-05-13", y: 20 },
        { x: "2023-05-14", y: 40 },
        { x: "2023-05-15", y: 50 },
        { x: "2023-05-16", y: 40 },
        { x: "2023-05-17", y: 50 },
      ],
    },
  ];

  const fill = {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#9397FF"], // 끝 색상
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          color: "#5C8FFF", // 시작 색상
          opacity: 1,
        },
        {
          offset: 100,
          color: "#9397FF", // 끝 색상
          opacity: 1,
        },
      ],
    },
  };

  // 애니메이션 옵션 설정
  const animations = {
    enabled: true,
    easing: "easeinout",
    speed: 600,
    animateGradually: {
      enabled: true,
      delay: 150,
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350,
    },
  };
  // 차트 설정
  const options = {
    chart: {
      height: 300,
      type: "line",
      zoom: {
        enabled: false,
      },
      animations: animations,
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      show: true,
      curve: "smooth",
      dashArray: 0,
      width: 4.5,
    },
    fill: fill,
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
}

export default LineChart;
