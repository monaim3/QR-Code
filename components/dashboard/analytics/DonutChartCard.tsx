import { useState } from "react";
import { Label, Pie, PieChart } from "recharts";
import Chip from "./Chip";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import CustomTooltip from "./CustomTooltip";
import DonutChartPopover from "./DonutChartPopover";

export interface ChartData {
  name: string;
  value: number;
  fill: string;
  scans: number;
}

interface Props {
  title: string;
  data: ChartData[];
}

export default function DonutChartCard({ title, data }: Props) {
  const [selectedPeriod, setSelectedPeriod] = useState("%");

  const total = data.reduce((acc, item) => acc + item.scans, 0);

  const handlePeriodClick = (value: string) => {
    setSelectedPeriod(value);
  };

  // Process data: if more than 8 items, show first 7 + Others
  const processedData = (() => {
    if (data.length > 8) {
      const first7 = data.slice(0, 7);
      const others = data.slice(7);
      const othersValue = others.reduce((acc, item) => acc + item.value, 0);
      const othersScans = others.reduce((acc, item) => acc + item.scans, 0);
      const othersFill = others[0]?.fill || "#808080"; // Use first other item's color or default gray

      return [
        ...first7,
        {
          name: "Others",
          value: othersValue,
          fill: othersFill,
          scans: othersScans,
        },
      ];
    }
    return data;
  })();

  const chartConfig = processedData.reduce((acc, item) => {
    acc[item.name.toLowerCase().replace(/\s/g, "_")] = {
      label: item.name,
      color: item.fill,
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <div className="flex flex-col items-start p-6 gap-6 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="w-full flex justify-between items-center desktopDashboard:gap-4 gap-2 self-stretch">
        <h4 className="text-[var(--Black)] font-bold text-[18px] leading-[26px]">
          {title}
        </h4>

        <div className="flex justify-end items-center gap-2">
          <Chip
            label="%"
            selectedPeriod={selectedPeriod}
            value="%"
            onClick={handlePeriodClick}
          />
          <Chip
            label="XX"
            selectedPeriod={selectedPeriod}
            value="XX"
            onClick={handlePeriodClick}
          />
        </div>
      </div>

      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row desktopDashboard:items-center desktopDashboard:h-[204px] desktopDashboard:gap-16 tablet:gap-16 gap-4 self-stretch">
        {processedData.length > 0 ? (
          <>
            <ChartContainer
              config={chartConfig}
              className="aspect-square w-[200px] h-[200px] desktopDashboard:mx-0 tablet:mx-0 mx-auto"
            >
              <PieChart width={200} height={200}>
                <ChartTooltip cursor={false} content={<CustomTooltip />} />
                <Pie
                  data={processedData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-[25px] font-rubik text-[#000] font-semibold"
                            >
                              {total.toLocaleString()}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="flex flex-col items-start desktopDashboard:w-[244px] desktopDashboard:gap-1 gap-2">
              {processedData?.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center self-stretch"
                >
                  <div className="flex items-center gap-2 flex-1 basis-0">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <p className="text-[var(--Black)] text-[14px] leading-[22px]">
                      {item.name}
                    </p>
                  </div>

                  <p className="text-[var(--Black)] text-[14px] leading-[22px] font-semibold">
                    {item.value.toLocaleString()}%
                  </p>
                </div>
              ))}
            </div>
            {data.length > 8 && (
              <div className="flex desktopDashboard:justify-end tablet:justify-end items-end gap-2 flex-1 basis-0 self-stretch relative">
                <DonutChartPopover data={data} />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
              No data to display
            </h4>
            <p className="text-[var(--Grey)] text-center text-[14px] leading-[22px]">
              Not enough data to show statistics
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
