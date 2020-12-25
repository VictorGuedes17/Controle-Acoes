import React from 'react';
 //@ts-ignore
import { ResponsivePie } from '@nivo/pie'

interface Props {
  data: any;
}

const PieChart: React.FC<Props> = props => {

  const { data } = props;

  return (
    //@ts-ignore
    <ResponsivePie
      data={data || []}
      margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={0}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
      //@ts-ignore
      slicesLabelsSkipAngle={0}
      slicesLabelsTextColor="#333333"
      //@ts-ignore
      sliceLabel={(d:any) => <tspan>{d.id}</tspan>}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: "dots",
          type: "linearGradient",
          colors: [
            { offset: 0, color: "inherit", opacity: 0.1 },
            { offset: 100, color: "inherit", opacity: 0.1 }
          ]
        },
        {
          id: "lines",
          // opacity: 0.9,
          type: "patternLines"
        }
      ]}
      fill={[
        {
          match: {
            id: "c"
          },
          id: "lines"
        },
        {
          match: {
            id: "rust"
          },
          id: "lines"
        },
        {
          match: {
            id: "css"
          },
          id: "dots"
        },
        {
          match: {
            id: "make"
          },
          id: "dots"
        },
        {
          match: {
            id: "hack"
          },
          id: "dots"
        }
      ]}
    />
  );
}

export default PieChart;