import { ScrollArea } from "@/components/ui/scroll-area";
import MenuInitialPreview from "./InitialPreview";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import PreviewCard from "./PreviewCard";
import { useEffect, useRef, useCallback, useState } from "react";
import { setIsPreviewWelcomeScreen } from "@/store/slices/menuSlice";
import ArrowLeft from "@/components/icons/arrow-left";
import PreviewSectionCard from "./PreviewSectionCard";

export default function MenuPreview() {
  const [isMenuView, setIsMenuView] = useState(true);
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);
  const sectionTabsRef = useRef<HTMLDivElement>(null);
  const sectionCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    didDrag: false,
    sectionIdAtPointerDown: null as string | null,
  });

  const visibleSections = menu.sections.filter((s) => s.isVisible);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const effectiveActiveId = activeSectionId ?? visibleSections[0]?.id ?? null;

  // Show initial preview until any menu state is changed
  const isInitialState =
    !menu.restaurantInfo.name &&
    !menu.restaurantInfo.description &&
    !menu.restaurantInfo.image &&
    menu.primaryColor === "#6594FF" &&
    menu.secondaryColor === "#FFFFFF" &&
    !menu.welcomeScreen &&
    menu.sections.length === 1 &&
    menu.sections[0].name === "" &&
    menu.sections[0].products.length === 0;

  const handleTabClick = useCallback((sectionId: string) => {
    setActiveSectionId(sectionId);
    sectionCardRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = sectionTabsRef.current;
    if (!el) return;
    const sectionId =
      (e.target as HTMLElement).closest<HTMLButtonElement>("[data-section-id]")
        ?.dataset.sectionId ?? null;
    dragRef.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      didDrag: false,
      sectionIdAtPointerDown: sectionId,
    };
    el.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const el = sectionTabsRef.current;
    if (!el || !dragRef.current.isDown) return;
    const dx = dragRef.current.startX - e.clientX;
    if (Math.abs(dx) > 3) dragRef.current.didDrag = true;
    el.scrollLeft = dragRef.current.scrollLeft + dx;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    const el = sectionTabsRef.current;
    if (el) el.releasePointerCapture(e.pointerId);
    dragRef.current.isDown = false;
  }, []);

  const handleClickCapture = useCallback(
    (e: React.MouseEvent) => {
      if (dragRef.current.didDrag) {
        e.preventDefault();
        e.stopPropagation();
        dragRef.current.didDrag = false;
      } else if (dragRef.current.sectionIdAtPointerDown) {
        handleTabClick(dragRef.current.sectionIdAtPointerDown);
      }
      dragRef.current.sectionIdAtPointerDown = null;
    },
    [handleTabClick],
  );

  const handleClickMenu = useCallback((id: string) => {
    setActiveSectionId(id);
    setIsMenuView(false);
    // Scroll to section card after detail view is rendered
    setTimeout(() => {
      sectionCardRefs.current[id]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsPreviewWelcomeScreen(false));
    }, 1000);
  }, [menu.isPreviewWelcomeScreen, dispatch]);

  return (
    <ScrollArea className="w-full h-full">
      {/* Welcome Screen */}
      <div
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${menu.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {menu.welcomeScreen && (
          <Image
            src={menu.welcomeScreen}
            alt="Background"
            width={200}
            height={200}
            className="object-contain"
          />
        )}
      </div>

      {/* Initial Preview - show until any state changes */}
      {isInitialState ? (
        <MenuInitialPreview />
      ) : (
        <>
      {isMenuView ? (
        <div className="w-full h-full flex flex-col items-center relative">
          <div
            className="flex flex-col items-center gap-4 pb-12 pt-[58px] px-5 stretch relative z-[2] w-full"
            style={{ backgroundColor: menu.primaryColor }}
          >
            {menu.restaurantInfo.image && (
              <Image
                src={menu.restaurantInfo.image}
                alt="menu"
                width={120}
                height={68}
                className="object-cover w-[120px] h-[68px] rounded"
              />
            )}

            <div className="flex flex-col items-center w-[220px]">
              <h4 className="text-white text-[18px] text-center leading-[26px] font-bold truncate w-[220px]">
                {menu.restaurantInfo.name}
              </h4>

              <p className="text-white text-[10px] leading-[16px] text-center truncate w-[220px]">
                {menu.restaurantInfo.description}
              </p>
            </div>
          </div>

          <div className="space-y-2 px-5 relative z-[2] w-full -mt-6">
            {menu.sections
              .filter((s) => s.isVisible)
              .map((section, index) => (
                <PreviewCard
                  key={section.id}
                  title={section.name || "Section " + (index + 1)}
                  borderColor={menu.secondaryColor}
                  onClick={() => handleClickMenu(section.id)}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6 items-center relative">
          <div
            className="w-full h-[125px] px-5 pt-[58px] space-y-4 sticky top-0 z-[2]"
            style={{ backgroundColor: menu.primaryColor }}
          >
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMenuView(true)}
            >
              <ArrowLeft className="text-[var(--Dark-gray)]" />
              <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
                Back
              </p>
            </div>

            <div
              ref={sectionTabsRef}
              role="region"
              aria-label="Section tabs"
              className="flex items-center gap-4 overflow-x-auto overflow-y-hidden pb-1 min-w-0 w-[220px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none touch-pan-x"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onClickCapture={handleClickCapture}
            >
              {visibleSections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  data-section-id={section.id}
                  className={`relative flex-shrink-0 whitespace-nowrap transition-opacity`}
                >
                  <span
                    className="text-[14px] leading-[22px] font-medium"
                    style={{ color: menu.secondaryColor }}
                  >
                    {section.name || "Section" + (index + 1)}
                  </span>

                  <div
                    className={`w-full h-[2px] rounded-full absolute bottom-[-1px] left-0 top-[26px] ${effectiveActiveId === section.id ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundColor: menu.secondaryColor }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 pb-8 space-y-6 w-full">
            {visibleSections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionCardRefs.current[section.id] = el;
                }}
                className="scroll-mt-[140px]"
              >
                <PreviewSectionCard section={section} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
        </>
      )}
    </ScrollArea>
  );
}
