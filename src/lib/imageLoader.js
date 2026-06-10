const imageCache = new Map();

export const imageLoader = ({ name, type }) => {
  const imageType = type || 'jpg';
  const cacheKey = `${name}.${imageType}`;

  if (!imageCache.has(cacheKey)) {
    const imagePromise = import(`../images/${name}.${imageType}`)
      .then(img => img.default)
      .catch((err) => {
        console.log(err);
        return undefined;
      });

    imageCache.set(cacheKey, imagePromise);
  }

  return imageCache.get(cacheKey);
};

export const preloadImages = (images) => Promise.allSettled(
  images.map(image => imageLoader(image))
);

export default imageLoader;
