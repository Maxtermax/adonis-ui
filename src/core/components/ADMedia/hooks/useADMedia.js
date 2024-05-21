import find from "lodash/find";
import { useMutations } from "hermes-io";
// import { getImageByThumbnail, getNextImage } from "queries/products";
// import { selectImage } from "mutations/products";
import { SELECT_IMAGE } from "constants";
import store from "store/app";

export const useADMedia = (images, productId) => {
  // const [image, setImage] = useState(images[0]);

  /*
  useEffect(() => {
    const internval = setInterval(() => {
      const nextImage = store.query(() => getNextImage(images, image.id));
      if (nextImage) {
        setImage(nextImage);
        return;
      }
      setImage(images[0]);
    }, 3000);
    return () => clearInterval(internval);
  }, [image]);
  */

  const handleUseADMediaNotification = ({ imageId }) => {
    const image = find(images, ({ id }) => imageId === id) ?? {};
    return { image };
  };

  const { state } = useMutations({
    events: [SELECT_IMAGE],
    onChange: handleUseADMediaNotification,
    initialState: { image: images[0] },
    store,
    id: productId,
  });
  return state.image;
};
