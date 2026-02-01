import Accordion from "@/components/common/Accordion";
import CheckBox from "@/components/dashboard/qr-codes/filters/CheckBox";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import TimeDropdown from "./TimeDropdown";
import { Time, OpeningTime, TimeFormat } from "@/types/business";
import {
  setTimeFormat,
  setWeeklyCloseTime,
  setWeeklyOpenTime,
  addWeeklySecondSlot,
  removeWeeklySecondSlot,
  setUseWeekdaysTemplate,
  clearOpeningHours,
  addOpeningHours,
  removeOpeningHours,
  updateOpeningHours,
} from "@/store/slices/businessSlice";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";
import TimeSlotCard from "./TimeSlotCard";

type Format = {
  title: string;
  value: TimeFormat;
};

const formats: Format[] = [
  {
    title: "AM/PM",
    value: "AM/PM",
  },
  {
    title: "24 hrs",
    value: "24-hour",
  },
  {
    title: "Open 24/7",
    value: "24/7",
  },
];

export default function OpeningHours() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);
  const timeFormat = business.timeFormat;

  const handleChangeFormat = (value: TimeFormat) => {
    dispatch(setTimeFormat(value));
  };

  const handleWeeklyTimeChange = (
    status: "open" | "close",
    slotIndex: 0 | 1,
    time: Time,
  ) => {
    if (status === "close") {
      dispatch(
        setWeeklyCloseTime({
          slotIndex,
          time,
        }),
      );
      return;
    }
    dispatch(
      setWeeklyOpenTime({
        slotIndex,
        time,
      }),
    );
  };

  const handleMondayFridayToggle = () => {
    const next = !business.useWeekdaysTemplate;
    dispatch(setUseWeekdaysTemplate(next));
    if (next) dispatch(clearOpeningHours());
  };

  const handleDayToggle = (day: string, checked: boolean) => {
    if (checked) {
      dispatch(setUseWeekdaysTemplate(false));
      const slot0 = { ...business.weeklyOpeningHours[0] };
      const slot1 = business.weeklyOpeningHours[1]
        ? { ...business.weeklyOpeningHours[1] }
        : undefined;
      dispatch(
        addOpeningHours({
          day,
          times: slot1 ? [slot0, slot1] : [slot0],
        }),
      );
    } else {
      dispatch(removeOpeningHours(day));
    }
  };

  const handleDayOpenChange = (day: string, slotIndex: 0 | 1, time: Time) => {
    const entry = business.openingHours.find((h) => h.day === day);
    if (!entry) return;
    const newTimes = [...entry.times] as OpeningTime["times"];
    const slot = newTimes[slotIndex];
    if (!slot) return;
    newTimes[slotIndex] = { ...slot, open: time };
    dispatch(updateOpeningHours({ day, times: newTimes }));
  };

  const handleDayCloseChange = (day: string, slotIndex: 0 | 1, time: Time) => {
    const entry = business.openingHours.find((h) => h.day === day);
    if (!entry) return;
    const newTimes = [...entry.times] as OpeningTime["times"];
    const slot = newTimes[slotIndex];
    if (!slot) return;
    newTimes[slotIndex] = { ...slot, close: time };
    dispatch(updateOpeningHours({ day, times: newTimes }));
  };

  const handleDayAddSecondSlot = (day: string) => {
    const entry = business.openingHours.find((h) => h.day === day);
    if (!entry || entry.times[1]) return;
    const defaultSlot = business.weeklyOpeningHours[1] ?? {
      open: { hour: "13", minute: "00", amPm: "PM" },
      close: { hour: "18", minute: "00", amPm: "PM" },
    };
    dispatch(
      updateOpeningHours({
        day,
        times: [entry.times[0], { ...defaultSlot }],
      }),
    );
  };

  const handleDayRemoveSecondSlot = (day: string) => {
    const entry = business.openingHours.find((h) => h.day === day);
    if (!entry) return;
    dispatch(
      updateOpeningHours({
        day,
        times: [entry.times[0]],
      }),
    );
  };

  return (
    <div className="w-full">
      <Accordion
        title="Opening hours"
        description="If applicable, provide your business hours"
        defaultOpen={true}
      >
        <div className="desktop:space-y-8 space-y-6">
          {/* Formats */}
          <div className="flex items-center gap-4">
            {formats.map((format, i) => (
              <button
                key={i}
                onClick={() => handleChangeFormat(format.value)}
                className={`flex h-10 py-1 px-6 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] border text-[16px] leading-[24px] transition-all duration-300 ease-in-out hover:bg-[var(--Blue-hover)] hover:text-white ${timeFormat === format.value ? "text-white bg-[var(--Blue)] border-[var(--Blue)]" : "text-[var(--Blue)] bg-white border-[var(--Blue)]"}`}
              >
                {format.title}
              </button>
            ))}
          </div>

          {timeFormat !== "24/7" && (
            <>
              {/* Monday - Friday */}
              <div className="flex flex-col p-4 justify-center items-start gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]">
                <div
                  className={`flex flex-col desktop:flex-row items-center desktop:gap-8 gap-4 self-stretch ${business.useWeekdaysTemplate ? "opacity-100" : "opacity-50"}`}
                >
                  <div className="flex items-center gap-2 flex-1 text-[var(--Black)] text-[16px] leading-[24px]">
                    <CheckBox
                      checked={business.useWeekdaysTemplate}
                      onChange={handleMondayFridayToggle}
                    />
                    <p>Monday - Friday</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <TimeDropdown
                      format={timeFormat}
                      activeTime={business.weeklyOpeningHours[0].open}
                      onChange={(time) =>
                        handleWeeklyTimeChange("open", 0, time)
                      }
                    />
                    <TimeDropdown
                      format={timeFormat}
                      activeTime={business.weeklyOpeningHours[0].close}
                      onChange={(time) =>
                        handleWeeklyTimeChange("close", 0, time)
                      }
                    />
                    <button
                      type="button"
                      disabled={!!business.weeklyOpeningHours[1]}
                      onClick={() => dispatch(addWeeklySecondSlot())}
                      className="flex w-10 h-10 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] hover:bg-[var(--light-grey-70)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                      aria-label="Add second time slot"
                    >
                      <Plus className="text-[var(--Dark-gray)]" />
                    </button>
                  </div>
                </div>

                {business.weeklyOpeningHours[1] ? (
                  <div
                    className={`flex flex-col desktop:flex-row items-center justify-end desktop:gap-8 gap-4 self-stretch ${business.useWeekdaysTemplate ? "opacity-100" : "opacity-50"}`}
                  >
                    <div className="flex items-center gap-2">
                      <TimeDropdown
                        format={timeFormat}
                        activeTime={business.weeklyOpeningHours[1].open}
                        onChange={(time) =>
                          handleWeeklyTimeChange("open", 1, time)
                        }
                      />
                      <TimeDropdown
                        format={timeFormat}
                        activeTime={business.weeklyOpeningHours[1].close}
                        onChange={(time) =>
                          handleWeeklyTimeChange("close", 1, time)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => dispatch(removeWeeklySecondSlot())}
                        className="flex w-10 h-10 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] hover:bg-[var(--light-grey-70)]"
                        aria-label="Remove second time slot"
                      >
                        <TrashAlt className="text-[var(--Dark-gray)]" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Separator */}
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-[1px] bg-[var(--boarder-grey-50)]" />
                <div className="text-[var(--Grey)] text-[16px] leading-[24px]">
                  OR
                </div>
                <div className="flex-1 h-[1px] bg-[var(--boarder-grey-50)]" />
              </div>

              {/* Opening Hours */}
              <div className="w-full space-y-2">
                {(
                  [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ] as const
                ).map((day) => {
                  const entry = business.openingHours.find(
                    (h) => h.day === day,
                  );
                  const isChecked = !!entry;
                  return (
                    <TimeSlotCard
                      key={day}
                      day={day}
                      timeFormat={timeFormat}
                      isChecked={isChecked}
                      onToggle={() => handleDayToggle(day, !isChecked)}
                      entry={entry ?? null}
                      defaultSlot0={business.weeklyOpeningHours[0]}
                      onOpenChange={(slotIndex: 0 | 1, time: Time) =>
                        handleDayOpenChange(day, slotIndex, time)
                      }
                      onCloseChange={(slotIndex: 0 | 1, time: Time) =>
                        handleDayCloseChange(day, slotIndex, time)
                      }
                      onAddSecondSlot={() => handleDayAddSecondSlot(day)}
                      onRemoveSecondSlot={() => handleDayRemoveSecondSlot(day)}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </Accordion>
    </div>
  );
}
