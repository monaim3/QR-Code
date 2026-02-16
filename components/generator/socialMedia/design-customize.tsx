"use client";

import Accordion from "@/components/common/Accordion";
import ColorBtn from "@/components/generator/vcard/ColorBtn";
import ColorInput from "@/components/generator/vcard/ColorInput";
import SwapHorizontal from "@/components/icons/swap-horizontal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import ImageCropper from "@/components/generator/vcard/ImageCropper";
import {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setWelcomeScreen,
  setIsPreviewWelcomeScreen,
  removeCarouselImage,
  editCarouselImage,
  setActiveColorIndex,
} from "@/store/slices/social-slice";
import { useState, useRef, useCallback } from "react";
import ImageUpload from "@/components/generator/socialMedia/uploadCarusolImage";
import Carousel from "./image-carousel";

export default function DesignCustomize() {
  const dispatch = useAppDispatch();
  const social = useAppSelector((state) => state.social);
  const isActive = social.activeColorIndex;
  const [imageIndex, setimageIndex] = useState(0);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [isCropping, setIsCropping] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState("");

  const handleSwap = () => {
    const temp = social.primaryColor;
    dispatch(setPrimaryColor(social.secondaryColor));
    dispatch(setSecondaryColor(temp));
    dispatch(
      setColorPalette({
        index: isActive,
        color: {
          primary: social.secondaryColor,
          secondary: social.primaryColor,
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

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
     setimageIndex(index);
     validateAndProcessFile(file);
  };

  const validateAndProcessFile = useCallback((file: File) => {
      // Validate file type
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/svg+xml",
      ];
      if (!validTypes.includes(file.type)) {
        setUploadError("Please upload a valid image file (jpg, png, svg)");
        return;
      }
  
      // Validate file size (5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setUploadError("Image size must be less than 5MB");
        return;
      }
      setUploadError("");
  
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result && typeof result === "string") {
          // Check dimensions for non-SVG images
          if (!file.type.includes("svg")) {
            const img = new Image();
            img.onload = () => {
              if (img.width > 2048 || img.height > 2048) {
                setUploadError(
                  "Image dimensions must be smaller than or equal to 2048 x 2048",
                );
                return;
              }
              // Open cropper with the image
              setImageToCrop(result);
              setIsCropping(true);
            };
            img.onerror = () => {
              setUploadError("Failed to load image");
            };
            img.src = result;
          } else {
            // For SVG, open cropper directly
            setImageToCrop(result);
            setIsCropping(true);
          }
        }
      };
      reader.onerror = () => {
        setUploadError("Failed to read file");
      };
      reader.readAsDataURL(file);
    }, []);

    const handleClose = () => {
    setIsCropping(false);
    // Clean up the image source if user cancels (only blob URLs need cleanup)
    // if (!customLogo && imageToCrop && imageToCrop.startsWith("blob:")) {
    //   URL.revokeObjectURL(imageToCrop);
    // }
    setImageToCrop(null);
  };

  const handleCropComplete = (croppedImageUrl: string) => {
    setIsCropping(false);
    // Clean up the original image (only blob URLs need cleanup)
    if (imageToCrop && imageToCrop.startsWith("blob:")) {
      URL.revokeObjectURL(imageToCrop);
    }
    dispatch(editCarouselImage({index: imageIndex,newImage: croppedImageUrl}));
    setImageToCrop(null);
  };

  const handleImageDelete = (value: string | null) => {
    dispatch(removeCarouselImage(value || ""));
  }


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
            {social.colorPalette.map((item, index) => (
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
              color={social.primaryColor}
              onChange={(v) => handleColorChange(v, social.secondaryColor)}
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
              color={social.secondaryColor}
              onChange={(v) => handleColorChange(social.primaryColor, v)}
            />
          </div>
          <div>
            <ImageUpload
             onCustomLogoUpload={()=>{}}
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
          {social?.carousels?.map((image,index)=> {
            return <div 
            key={`carousel-${index}`}
            className="flex flex-col items-center hustify-center">
              <div className="border border-[var(--Boarder-Grey)] rounded-[12px]">
                <img
                src={image}
                alt={image}
                width={80}
                height={80}
                className="w-[150px] h-[150px] object-cover rounded-[12px] p-1"
              />
              </div>
              <div className="w-[150px] flex gap-2 items-center mt-2">
              {/* Pencil button */}
              <div className="relative flex-1 h-[35px]">
                <label
                  htmlFor={`file-${index}`}
                  className="flex items-center justify-center w-full h-full border border-[var(--Boarder-Grey)] rounded-[6px] cursor-pointer bg-white"
                >
                  <LuPencil className="text-[var(--Grey)]" />
                </label>
                <input
                  id={`file-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(e, index)}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              {/* Delete button */}
              <div
                onClick={() => handleImageDelete(image)}
                id={`button-${index}`}
                className="flex flex-1 h-[35px] border border-[var(--Boarder-Grey)] rounded-[6px] items-center justify-center"
              >
                <RiDeleteBinLine className="text-[var(--Grey)]" />
              </div>
            </div>

            </div>
          })}
        </div>
         <ImageCropper
            open={isCropping}
            onClose={handleClose}
            imageSrc={imageToCrop}
            onCropComplete={handleCropComplete}
            aspectRatio={1}
          />
        </div>
      </Accordion>
    </div>
  );
}