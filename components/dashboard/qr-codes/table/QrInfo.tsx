import { useState } from "react";
import Copy from "@/components/icons/copy";
import Edit from "@/components/icons/edit";
import Eye from "@/components/icons/eye";
import LinkAlt01 from "@/components/icons/link-alt-01";
import EditInput from "./EditInput";
import EditButton from "./EditButton";

export default function QrInfo() {
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isUrlEditing, setIsUrlEditing] = useState(false);

  return (
    <div className="inline-flex flex-col items-start gap-1">
      {/* Name */}
      <div className="flex items-center gap-2">
        {isNameEditing ? (
          <>
            <EditInput />
            <EditButton
              text="Cancel"
              variant="outline"
              onClick={() => setIsNameEditing(false)}
            />
            <EditButton text="Save" onClick={() => setIsNameEditing(false)} />
          </>
        ) : (
          <>
            <h4 className="text-[var(--Black)] text-[18px] font-bold leading-[var(--Typeface-Line-height-Heading-4)]">
              Italian Restaurant
            </h4>
            <button onClick={() => setIsNameEditing(true)}>
              <Edit className="text-[var(--Grey)]" />
            </button>
          </>
        )}
      </div>

      {/* Preview link */}
      <div className="flex items-center gap-1">
        <Eye />
        <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          myqrcode.com/erTwESsq
        </p>
        <Copy className="cursor-pointer text-[var(--Grey)]" />
      </div>

      {/* Type */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
        Type <span className="text-[var(--Black)]">Website URL</span>
      </p>

      {/* Website link */}
      {isUrlEditing ? (
        <div className="flex items-start gap-2">
          <EditInput />
          <EditButton
            text="Cancel"
            variant="outline"
            onClick={() => setIsUrlEditing(false)}
          />
          <EditButton text="Save" onClick={() => setIsUrlEditing(false)} />
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <LinkAlt01 />
          <div className="flex items-center gap-2">
            <p className="text-[var(--Dark-Grey)] text-[14px] leading-[22px]">
              www.italian-restaurant.com
            </p>
            <button onClick={() => setIsUrlEditing(true)}>
              <Edit className="text-[var(--Grey)]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
