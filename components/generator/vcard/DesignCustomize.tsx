import Accordion from "@/components/common/Accordion";
import ColorBtn from "./ColorBtn";
import ColorPicker from "./ColorPicker";
import SwapHorizontal from "@/components/icons/swap-horizontal";

const palette = [
  {
    primary: "#6594FF",
    secondary: "#FFFFFF",
  },
  {
    primary: "#ECEDF1",
    secondary: "#232321",
  },
  {
    primary: "#ECECF0",
    secondary: "#6594FF",
  },
  {
    primary: "#DAEBF6",
    secondary: "#6594FF",
  },
  {
    primary: "#B69EDE",
    secondary: "#FFFFFF",
  },
  {
    primary: "#6ECD9D",
    secondary: "#242420",
  },
  {
    primary: "#FACB67",
    secondary: "#FFFFFF",
  },
];

export default function DesignCustomize() {
  return (
    <div className="w-full">
      <Accordion
        title="Design and customize"
        description="Choose your color scheme"
        defaultOpen={true}
      >
        <div className="space-y-8">
          {/* Color palette */}
          <div className="flex justify-between items-center gap-4 self-stretch w-full overflow-x-auto desktop:overflow-x-visible pb-4 desktop:pb-0 pt-[2px] px-[2px] desktop:pt-0 desktop:px-0">
            {palette.map((item, index) => (
              <ColorBtn
                key={index}
                primaryColor={item.primary}
                secondaryColor={item.secondary}
              />
            ))}
          </div>

          {/* Color Picker */}
          <div className="p-6 bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)] flex flex-col desktop:flex-row desktop:items-end items-center gap-4 w-full">
            <ColorPicker label="Primary color" color={"#6594FF"} />

            <div className="flex desktop:w-10 desktop:h-12 items-center gap-2 py-2 desktop:py-0">
              <button className="flex items-center gap-2 p-2 flex-1">
                <span className="text-[var(--Grey)] text-[14px] leading-[22px] desktop:hidden">
                  Swap the colours
                </span>

                <div className="rotate-90 desktop:rotate-0">
                  <SwapHorizontal />
                </div>
              </button>
            </div>

            <ColorPicker label="Secondary color" color={"#FFFFFF"} />
          </div>
        </div>
      </Accordion>
    </div>
  );
}
