import Accordion from "@/components/common/Accordion";
import ImageUpload from "../vcard/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setRestaurantInfo,
  setUploadedRestaurantImage,
} from "@/store/slices/menuSlice";
import Input from "../vcard/Input";
import { useUploadFileMutation } from "@/store/api/qrApi";

export default function RestaurantInfo() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);
  const [uploadFile] = useUploadFileMutation();

  const emptyUploadedImage = {
    publicId: "",
    resourceType: "",
    format: "",
    bytes: 0,
  };

  const handleImageChange = async (value: string | null) => {
    if (!value) {
      dispatch(
        setRestaurantInfo({
          ...menu.restaurantInfo,
          image: "",
        }),
      );
      dispatch(setUploadedRestaurantImage(emptyUploadedImage));
      return;
    }

    dispatch(
      setRestaurantInfo({
        ...menu.restaurantInfo,
        image: value,
      }),
    );

    const blob = await fetch(value).then((res) => res.blob());
    const file = new File(
      [blob],
      `uploaded-image-${Date.now()}.${blob.type.split("/")[1]}`,
      { type: blob.type },
    );

    const result = await uploadFile(file);
    const uploadedImage =
      "data" in result
        ? {
            bucketRootUrl: result.data.location.split(
              `/${result.data.bucket}`,
            )[0],
            bytes: result.data.bytes,
            format: result.data.format,
            key: result.data.key,
            publicId: result.data.publicId,
            resourceType: result.data.resourceType,
            storageProvider: result.data.storageProvider,
          }
        : emptyUploadedImage;

    dispatch(setUploadedRestaurantImage(uploadedImage));
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
        <div className="desktop:space-y-8 space-y-6">
          <ImageUpload
            label="Add image"
            value={menu.restaurantInfo.image}
            onCustomLogoUpload={handleImageChange}
            aspectRatio={1.7647}
          />

          <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
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
        </div>
      </Accordion>
    </div>
  );
}
