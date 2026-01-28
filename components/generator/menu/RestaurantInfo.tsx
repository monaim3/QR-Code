import Accordion from "@/components/common/Accordion";
import ImageUpload from "../vcard/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setRestaurantInfo } from "@/store/slices/menuSlice";
import Input from "../vcard/Input";

export default function RestaurantInfo() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);

  const handleImageChange = (value: string | null) => {
    dispatch(
      setRestaurantInfo({
        ...menu.restaurantInfo,
        image: value,
      }),
    );
  };

  const handleChange = (value: string, id: string) => {
    dispatch(
      setRestaurantInfo({
        ...menu.restaurantInfo,
        [id]: value,
      }),
    );
  };

  return (
    <div className="w-full">
      <Accordion
        title="Restaurant information"
        description="Provide details about your restaurant"
        defaultOpen={true}
      >
        <ImageUpload label="Add image" onCustomLogoUpload={handleImageChange} />

        <div className="flex items-start gap-12 self-stretch !mt-0">
          <Input
            label="Restaurant name"
            placeholder="e.g. My restaurant"
            id="res-name"
            value={menu.restaurantInfo.name}
            onChange={(v) => handleChange(v, "name")}
          />
          <Input
            label="Description"
            placeholder="e.g. Italian"
            id="res-description"
            value={menu.restaurantInfo.description}
            onChange={(v) => handleChange(v, "description")}
          />
        </div>
      </Accordion>
    </div>
  );
}
