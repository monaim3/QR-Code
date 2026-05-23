import Accordion from "@/components/common/Accordion";
import ImageUpload from "../vcard/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setRestaurantInfo } from "@/store/slices/menuSlice";
import Input from "../vcard/Input";
import { useT } from "@/utils/t";

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
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__restaurant_info__title")}
        description={t(
          "generator__content_form_section__restaurant_info__description",
        )}
        defaultOpen={true}
      >
        <div className="desktop:space-y-8 space-y-6">
          <ImageUpload
            label={t("generator__content_form_section__menu_screen__image")}
            value={menu.restaurantInfo.image}
            onCustomLogoUpload={handleImageChange}
            aspectRatio={1.7647}
          />

          <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
            <Input
              label={t(
                "generator__content_form_section__menu__restaurant_info__name",
              )}
              placeholder={t(
                "generator__content_form_section__menu__restaurant_info__name__placeholder",
              )}
              id="res-name"
              value={menu.restaurantInfo.name}
              onChange={(v) => handleChange(v, "name")}
            />
            <Input
              label={t(
                "generator__content_form_section__menu__restaurant_info__description",
              )}
              placeholder={t(
                "generator__content_form_section__menu__restaurant_info__description__placeholder",
              )}
              id="res-description"
              value={menu.restaurantInfo.description}
              onChange={(v) => handleChange(v, "description")}
            />
          </div>
        </div>
      </Accordion>
    </div>
  );
}
