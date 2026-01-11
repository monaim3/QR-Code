"use client";

import { useState } from "react";
import Chip from "./Chip";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function ScanActivity() {
  const [selectedPeriod, setSelectedPeriod] = useState("day");

  const handlePeriodClick = (value: string) => {
    setSelectedPeriod(value);
  };

  // Sample data based on your image
  const data = [
    { date: "28 Feb", scans: 70 },
    { date: "1 Mar", scans: 30 },
    { date: "3 Mar", scans: 45 },
    { date: "5 Mar", scans: 25 },
    { date: "7 Mar", scans: 35 },
    { date: "9 Mar", scans: 45 },
    { date: "11 Mar", scans: 32 },
    { date: "13 Mar", scans: 42 },
    { date: "15 Mar", scans: 28 },
    { date: "17 Mar", scans: 65 },
    { date: "19 Mar", scans: 58 },
    { date: "21 Mar", scans: 72 },
    { date: "23 Mar", scans: 48 },
    { date: "25 Mar", scans: 55 },
    { date: "27 Mar", scans: 38 },
    { date: "29 Mar", scans: 52 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 self-stretch rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] p-6 font-roboto">
      {/* Heading */}
      <div className="w-full flex items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-1 flex-1">
          <h4 className="text-[var(--Black)] font-bold text-[18px] leading-[26px]">
            Scan activity
          </h4>
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            25 February 2024 - 25 March 2024
          </p>
        </div>

        <div className="flex justify-end items-center gap-2">
          <Chip
            label="Day"
            selectedPeriod={selectedPeriod}
            value="day"
            onClick={handlePeriodClick}
          />
          <Chip
            label="Week"
            selectedPeriod={selectedPeriod}
            value="week"
            onClick={handlePeriodClick}
          />
          <Chip
            label="Month"
            selectedPeriod={selectedPeriod}
            value="month"
            onClick={handlePeriodClick}
          />
          <Chip
            label="Year"
            selectedPeriod={selectedPeriod}
            value="year"
            onClick={handlePeriodClick}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-[304px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -36, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="rgba(205, 208, 219, 0.50)"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#79809A", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#79809A", fontSize: 12 }}
              ticks={[0, 20, 40, 60, 80]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              position={{ y: undefined }}
              offset={-87}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <Area
              type="monotone"
              dataKey="scans"
              stroke="#01A56D"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorScans)"
              activeDot={{
                r: 6,
                fill: "#3D75F3",
                stroke: "white",
                strokeWidth: 4,
                width: 12,
                height: 12,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
