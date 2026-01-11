import { useState } from "react";
import { Label, Pie, PieChart } from "recharts";
import Chip from "./Chip";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import CustomTooltip from "./CustomTooltip";

interface ChartData {
  name: string;
  value: number;
  fill: string;
  scans: number;
}

interface Props {
  title: string;
  hasMore?: boolean;
  data: ChartData[];
}

export default function DonutChartCard({
  title,
  hasMore = false,
  data,
}: Props) {
  const [selectedPeriod, setSelectedPeriod] = useState("%");

  const total = data.reduce((acc, item) => acc + item.scans, 0);

  const handlePeriodClick = (value: string) => {
    setSelectedPeriod(value);
  };

  const chartConfig = data.reduce((acc, item) => {
    acc[item.name.toLowerCase().replace(/\s/g, "_")] = {
      label: item.name,
      color: item.fill,
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <div className="flex flex-col items-start p-6 gap-6 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="w-full flex justify-between items-center gap-4 self-stretch">
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

      <div className="flex items-center h-[204px] gap-16 self-stretch">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-[200px] h-[200px]"
        >
          <PieChart width={200} height={200}>
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Pie
              data={data}
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

        <div className="flex flex-col items-start w-[244px] gap-1">
          {data?.map((item, i) => (
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

        {hasMore && (
          <div className="flex justify-end items-end gap-2 flex-1 basis-0 self-stretch">
            <button className="text-[var(--Blue)] text-[14px] leading-[22px] font-bold">
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
