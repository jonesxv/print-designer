const imageCache = new Map();
const resolvedImageCache = new Map();

export const imageLoader = ({ name, type }) => {
  const imageType = type || 'jpg';
  const cacheKey = `${name}.${imageType}`;

  if (!imageCache.has(cacheKey)) {
    const imagePromise = import(`../images/${name}.${imageType}`)
      .then((img) => {
        resolvedImageCache.set(cacheKey, img.default);
        return img.default;
      })
      .catch((err) => {
        console.log(err);
        resolvedImageCache.set(cacheKey, undefined);
        return undefined;
      });

    imageCache.set(cacheKey, imagePromise);
  }

  return imageCache.get(cacheKey);
};

export const getCachedImage = ({ name, type }) => (
  resolvedImageCache.get(`${name}.${type || 'jpg'}`)
);

export const preloadImages = (images) => Promise.allSettled(
  images.map(image => imageLoader(image))
);

export default imageLoader;
