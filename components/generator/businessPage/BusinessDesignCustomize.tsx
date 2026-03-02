"use client";

import Accordion from "@/components/common/Accordion";
import SwapHorizontal from "@/components/icons/swap-horizontal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ColorBtn from "../vcard/ColorBtn";
import ColorInput from "../vcard/ColorInput";
import ImageUpload from "../vcard/ImageUpload";
import {
  setBusinessImage,
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setActiveColorIndex,
} from "@/store/slices/businessSlice";

export default function BusinessDesignCustomize() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);
  const isActive = business.activeColorIndex;

  const handleSwap = () => {
    const temp = business.primaryColor;
    dispatch(setPrimaryColor(business.secondaryColor));
    dispatch(setSecondaryColor(temp));
    dispatch(
      setColorPalette({
        index: isActive,
        color: {
          primary: business.secondaryColor,
          secondary: business.primaryColor,
        },
      }),
    );
  };

  const handleColorSwitch = (
    primaryColor: string,
    secondaryColor: string,
    index: number,
  ) => {
    dispatch(setPrimaryColor(primaryColor));
    dispatch(setSecondaryColor(secondaryColor));
    dispatch(setActiveColorIndex(index));
  };

  const handleColorChange = (primaryColor: string, secondaryColor: string) => {
    const upperPrimary = primaryColor.toUpperCase();
    const upperSecondary = secondaryColor.toUpperCase();
    dispatch(setPrimaryColor(upperPrimary));
    dispatch(setSecondaryColor(upperSecondary));
    dispatch(
      setColorPalette({
        index: isActive,
        color: {
          primary: upperPrimary,
          secondary: upperSecondary,
        },
      }),
    );
  };

  const handleImageChange = (value: string | null) => {
    dispatch(setBusinessImage(value));
  };

  return (
    <div className="w-full">
      <Accordion
        title="Design and customize"
        description="Choose your color scheme"
        defaultOpen={true}
      >
        <div className="space-y-8">
          {/* Color palette */}
          <div className="flex items-center gap-4 self-stretch w-full overflow-x-auto desktop:overflow-x-visible pb-4 desktop:pb-0 pt-[2px] px-[2px] desktop:pt-0 desktop:px-0 desktop:flex-wrap">
            {business.colorPalette.map((item, index) => (
              <ColorBtn
                key={index}
                primaryColor={item.primary}
                secondaryColor={item.secondary}
                onClick={() =>
                  handleColorSwitch(item.primary, item.secondary, index)
                }
                isActive={isActive === index}
              />
            ))}
          </div>

          {/* Color Picker */}
          <div className="desktop:p-6 p-4 bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)] flex flex-col desktop:flex-row desktop:items-end items-center gap-4 w-full">
            <ColorInput
              label="Primary color"
              color={business.primaryColor}
              onChange={(v) => handleColorChange(v, business.secondaryColor)}
            />

            <div className="flex desktop:w-10 desktop:h-12 items-center gap-2 py-2 desktop:py-0">
              <button
                onClick={handleSwap}
                className="flex items-center gap-2 p-2 flex-1"
              >
                <span className="text-[var(--Grey)] text-[14px] leading-[22px] desktop:hidden">
                  Swap the colors
                </span>

                <div className="rotate-90 desktop:rotate-0">
                  <SwapHorizontal className="text-[#79809A]" />
                </div>
              </button>
            </div>

            <ColorInput
              label="Secondary color"
              color={business.secondaryColor}
              onChange={(v) => handleColorChange(business.primaryColor, v)}
            />
          </div>

          {/* Add Image */}
          <ImageUpload
            label="Add image"
            value={business.businessImage}
            onCustomLogoUpload={handleImageChange}
            aspectRatio={1.7647}
          />
        </div>
      </Accordion>
    </div>
  );
}
