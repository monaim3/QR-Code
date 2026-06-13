"use client";

import { useDispatch } from "react-redux";
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
import LineChart1 from "@/components/icons/line-chart 1";
import { useT } from "@/utils/t";
import { setScanGroupBy } from "@/store/slices/analyticsSlice";
import { useGetAnalyticsBatchQuery } from "@/store/api/analyticsApi";
import { useAnalyticsParams } from "@/utils/useAnalyticsParams";

export default function ScanActivity() {
  const t = useT();
  const dispatch = useDispatch();
  const params = useAnalyticsParams();
  const { data } = useGetAnalyticsBatchQuery(params);
  const { scanGroupBy } = params;

  const chartData = (data?.chart ?? []).map((item) => ({
    date: item.date,
    scans: item.scans,
  }));

  const dateLabel =
    chartData.length > 0
      ? `${chartData[0].date} - ${chartData[chartData.length - 1].date}`
      : "";

  return (
    <div className="flex flex-col items-center justify-center gap-8 self-stretch rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] p-6 relative">
      {/* Heading */}
      <div className="w-full flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-1 flex-1">
          <h4 className="text-[var(--Black)] font-bold text-[18px] leading-[26px]">
            {t("public__dashboard__analytics__activity_card__title")}
          </h4>
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            {dateLabel}
          </p>
        </div>

        <div className="flex desktopDashboard:justify-end items-center gap-2 flex-wrap">
          <Chip
            label={t("public__dashboard__analytics__activity_card__day")}
            selectedPeriod={scanGroupBy}
            value="day"
            onClick={(v) => dispatch(setScanGroupBy(v))}
          />
          <Chip
            label={t(
              "public__dashboard__analytics__activity_card__group_by__weeks",
            )}
            selectedPeriod={scanGroupBy}
            value="week"
            onClick={(v) => dispatch(setScanGroupBy(v))}
          />
          <Chip
            label={t("public__dashboard__analytics__activity_card__month")}
            selectedPeriod={scanGroupBy}
            value="month"
            onClick={(v) => dispatch(setScanGroupBy(v))}
          />
          <Chip
            label={t("public__dashboard__analytics__activity_card__year")}
            selectedPeriod={scanGroupBy}
            value="year"
            onClick={(v) => dispatch(setScanGroupBy(v))}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-[304px] w-full">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
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
        ) : (
          <div className="flex flex-col items-center gap-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LineChart1 />

            <div className="flex flex-col items-center gap-1 font-roboto">
              <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
                {t(
                  "public__dashboard__analytics__scans_by_field_card__empty_title",
                )}
              </h4>
              <p className="text-[var(--Grey)] text-center text-[14px] leading-[22px]">
                {t(
                  "public__dashboard__analytics__scans_by_field_card__empty_description",
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
