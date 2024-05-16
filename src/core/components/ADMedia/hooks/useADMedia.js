import { useState, useEffect } from "react";
import { useMutations } from "hermes-io";
import { getImageByThumbnail, getNextImage } from "queries/products";
// import { selectProductThumbnail } from "mutations/products";
import store from "store/app";
import { SELECT_PRODUCT_VARIATION } from "constants";

export const useADMedia = (images, id) => {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    const internval = setInterval(() => {
      const nextImage = store.query(() => getNextImage(images, image.id));
      if (nextImage) {
        setImage(nextImage);
        // const thumbnail = thumbnails[index];
        // selectProductThumbnail([id], thumbnail);
        return;
      }
      setImage(images[0]);
    }, 2000);
    return () => clearInterval(internval);
  }, [image]);

  const handleUseADMediaNotification = (thumbnail) => {
    const image = store.query(() => getImageByThumbnail(images, thumbnail));
    if (image) setImage(image);
  };
  useMutations({
    events: [SELECT_PRODUCT_VARIATION],
    noUpdate: true,
    onChange: handleUseADMediaNotification,
    store,
    id,
  });

  return image;
};
