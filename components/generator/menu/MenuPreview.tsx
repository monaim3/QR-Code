import { ScrollArea } from "@/components/ui/scroll-area";
import MenuInitialPreview from "./InitialPreview";

export default function MenuPreview() {
  return (
    <ScrollArea className="w-full h-full">
      <MenuInitialPreview />
    </ScrollArea>
  );
}
